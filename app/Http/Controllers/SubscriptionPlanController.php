<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
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
}
