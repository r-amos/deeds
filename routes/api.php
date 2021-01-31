<?php

use App\Models\Quote;
use Illuminate\Http\Request;
use App\Assets\CloudinaryProvider;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('daily', function () {
    $quote = Quote::find(rand(1, Quote::count()));

    $provider = CloudinaryProvider::create();
    $urls     = $provider->getAssetUrls('deeds/quotes');

    $overlays = [
        'purple' => '139, 92, 246',
        'red'    => '239, 68, 68',
        'blue'   => '59, 130, 246',
        'green'  => '16, 185, 129',
        'yellow' => '245, 158, 11',
        'indigo' => '99, 102, 241',
        'pink'   => '236, 72, 153',
        'gray'   => '107, 114, 128',
    ];

    $colour = ['purple', 'red', 'blue', 'green', 'yellow', 'indigo', 'pink', 'gray'][rand(0, 7)];

    return [
        'quote'   => [
            'text'   => $quote->quote,
            'author' => $quote->author,
        ],
        //'url'     => Image::find(rand(1, Image::count()))->url,
        'url'     => $urls->random()['url'],
        'colour'  => $colour,
        'overlay' => $overlays[$colour],
    ];
});
