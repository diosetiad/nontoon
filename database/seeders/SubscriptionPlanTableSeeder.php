<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subsciptionPlans = [
            [
                'name' => 'Basic',
                'price' => 120000,
                'active_period_in_months' => 1,
                'features' => json_encode(['Great video and sound quality', '1080p (Full HD) resolution', 'TV, computer, mobile phone, tablet', 'Up to 2 users']),
            ],
            [
                'name' => 'Premium',
                'price' => 186000,
                'active_period_in_months' => 1,
                'features' => json_encode(['Best video and sound quality', '4K (Ultra HD) resolution', 'Spatial audio', 'TV, computer, mobile phone, tablet', 'Up to 4 users']),
            ],
        ];

        SubscriptionPlan::insert($subsciptionPlans);
    }
}
