<?php

namespace App\Http\Requests\Admin\SubscriptionPlans;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:subscription_plans,name',
            'price' => 'required|numeric|min:0',
            'active_period_in_months' => 'required|numeric|min:1',
            'features' => 'required|array',
            'features.*' => 'string',
        ];
    }
}
