<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::all();

        return Inertia::render('Subscribe', [
            'subscriptionPlans' => $subscriptionPlans
        ]);
    }

    public function store(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('browse'));
    }
}
