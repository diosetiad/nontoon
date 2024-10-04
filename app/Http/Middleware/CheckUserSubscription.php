<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $status)
    {
        if (Auth::user()->hasRole('admin')) {
            return $next($request);
        }

        if ($status == 'true' && !Auth::user()->is_active) {
            return redirect(route('subscribe'));
        }

        if ($status == 'false' && Auth::user()->is_active) {
            return redirect(route('browse'));
        }

        return $next($request);
    }
}
