<?php

use App\Services\QuoteService;
use Illuminate\Support\Facades\Route;

Route::get('daily', function (QuoteService $quoteService) {
    return $quoteService->getMany();
});
