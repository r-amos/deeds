<?php

namespace App\Providers;

use App\Utility\Random;
use App\Utility\RandomYear;
use App\Services\QuoteService;
use App\Services\RandomService;
use App\Assets\CloudinaryProvider;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(RandomService::class, function () {
            return new RandomService(new Random);
        });

        $this->app->bind(QuoteService::class, function () {
            return new QuoteService(
                $this->app->make(RandomService::class),
                CloudinaryProvider::create(),
                new RandomYear
            );
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
