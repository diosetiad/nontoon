<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SubscriptionPlans\Store;
use App\Http\Requests\Admin\SubscriptionPlans\Update;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::withTrashed()->orderBy('deleted_at')->get();

        return Inertia::render('Admin/SubscriptionPlans/Index', [
            'subscriptionPlans' => $subscriptionPlans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/SubscriptionPlans/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $data = $request->validated();

        if (isset($data['features'])) {
            $data['features'] = json_encode($data['features']);
        }

        $subscriptionPlan = SubscriptionPlan::create($data);

        return redirect(route('subscription-plans.index'))->with([
            'message' => 'Subscription plan was created successfully!',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function show(SubscriptionPlan $subscriptionPlan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function edit(SubscriptionPlan $subscriptionPlan)
    {
        $subscriptionPlan->features = json_decode($subscriptionPlan->features, true);

        return Inertia::render('Admin/SubscriptionPlans/Edit', [
            'subscriptionPlan' => $subscriptionPlan
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = $request->validated();

        if (isset($data['features'])) {
            $data['features'] = json_encode($data['features']);
        }

        $subscriptionPlan->update($data);

        return redirect(route('subscription-plans.index'))->with([
            'message' => 'Subscription plan was updated successfully!',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubscriptionPlan $subscriptionPlan)
    {
        $subscriptionPlan->delete();

        return redirect(route('subscription-plans.index'))->with([
            'message' => 'Subscription plan was deleted successfully!',
            'type' => 'success'
        ]);
    }

    public function restore($subscriptionPlan)
    {
        SubscriptionPlan::withTrashed()->find($subscriptionPlan)->restore();
        return redirect(route('subscription-plans.index'))->with([
            'message' => 'Subscription plan was restored successfully!',
            'type' => 'success'
        ]);
    }
}
