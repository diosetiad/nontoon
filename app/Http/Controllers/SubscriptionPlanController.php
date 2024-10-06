<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Midtrans;

class SubscriptionPlanController extends Controller
{
    public function __construct()
    {
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');

        \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');

        \Midtrans\Config::$isSanitized = env('MIDTRANS_IS_SANITIZED');

        \Midtrans\Config::$is3ds = env('MIDTRANS_IS_3DS');
    }

    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::all();

        return Inertia::render('Subscribe', [
            'subscriptionPlans' => $subscriptionPlans,
            'userSubscription' => null
        ]);
    }

    public function store(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'payment_status' => 'pending',
        ];

        $userSubscription = UserSubscription::create($data);

        $params = [
            'transaction_details' => [
                'order_id' => $userSubscription->id . '-' . Str::random(5),
                'gross_amount' => $userSubscription->price,
            ],
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $userSubscription->update([
            'snap_token' => $snapToken
        ]);

        return Inertia::render('Subscribe', [
            'userSubscription' => $userSubscription
        ]);
    }

    public function midtransCallback(Request $request)
    {
        $notif = new Midtrans\Notification();

        $transaction_status = $notif->transaction_status;
        $fraud = $notif->fraud_status;

        $transaction_id = explode('-', $notif->order_id)[0];
        $userSubscription = UserSubscription::find($transaction_id);

        if ($transaction_status == 'capture') {
            if ($fraud == 'challenge') {
                $userSubscription->payment_status = 'pending';
            } else if ($fraud == 'accept') {
                $userSubscription->payment_status = 'paid';
                $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_period_in_months);
            }
        } else if ($transaction_status == 'cancel') {
            if ($fraud == 'challenge') {
                $userSubscription->payment_status = 'failed';
            } else if ($fraud == 'accept') {
                $userSubscription->payment_status = 'failed';
            }
        } else if ($transaction_status == 'deny') {
            $userSubscription->payment_status = 'failed';
        } else if ($transaction_status == 'settlement') {
            $userSubscription->payment_status = 'paid';
            $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_period_in_months);
        } else if ($transaction_status == 'pending') {
            $userSubscription->payment_status = 'pending';
        } else if ($transaction_status == 'expire') {
            $userSubscription->payment_status = 'failed';
        }

        $userSubscription->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Payment success'
        ]);
    }
}
