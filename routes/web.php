<?php

use App\Models\Image;
use App\Services\QuoteService;
use App\Assets\CloudinaryProvider;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index', [
        'images' => with(new CloudinaryProvider)->getThumbnails(Image::get()),
        'deeds'  => cloudinary_url(
            'deeds/IMG_20201221_112400_ztah8v.jpg',
            [
                'transformation' => [
                    "height" => 800,
                    "width"  => 800,
                    "crop"   => "fill",
                    "secure" => true,
                ],
            ]
        ),
    ]);
});

Route::get('/images/{image}', function (Image $image) {
    return view('image', [
        'image' => $image,
    ]);
});

Route::get('/daily', function (QuoteService $quoteService) {

    $quotes     = $quoteService->getMany();
    $quote      = $quotes->pop();
    $visibility = 'visible';

    return view('daily', compact('quotes', 'quote', 'visibility'));
});

Route::get('/test', function (QuoteService $quoteService) {
    $quotes     = $quoteService->getMany(1);
    $quote      = $quotes->pop();
    $visibility = 'visible';

    return view('test', compact('quotes', 'quote', 'visibility'));
});
