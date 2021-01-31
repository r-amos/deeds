<?php

use App\Models\Image;
use App\Models\Quote;
use App\Assets\CloudinaryProvider;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

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

Route::get('/daily', function () {
    //quote = Quote::find(rand(1, Quote::count()));

    $provider = CloudinaryProvider::create();
    $urls     = $provider->getAssetUrls('deeds/quotes');

    $count  = Quote::count();
    $quotes = collect();

    while ($quotes->count() < 10) {
        $quote = Quote::find(rand(1, $count));
        if (!$quotes->has($quote->getKey())) {
            $quotes->add($quote);
        }
    }

    $quote = $quotes->pop();

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

    $colours = ['purple', 'red', 'blue', 'green', 'yellow', 'indigo', 'pink', 'gray'];
    $colour  = $colours[rand(0, 7)];

    $quotes->map(function ($quote) use ($colours, $overlays, $urls) {
        $quote->colour  = $colours[rand(0, 7)];
        $quote->overlay = $overlays[$quote->colour];
        $quote->image   = $urls->random()['url'];
        return $quote;
    });

    return view('daily', [
        'quotes'  => $quotes,
        'quote'   => [
            'text'   => $quote->quote,
            'author' => $quote->author,
        ],
        //'url'     => Image::find(rand(1, Image::count()))->url,
        'url'     => $urls->first()['url'],
        'colour'  => $colour,
        'overlay' => $overlays[$colour],
    ]);
});

Route::get('/test', function () {

    $count  = Quote::count();
    $quotes = collect();

    while ($quotes->count() !== 0) {
        $quote = Quote::find(rand(1, $count));
        if (!$quotes->has($quote->getKey())) {
            $quotes->add($quote);
        }
    }

    $quote = $quotes->pop();

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

    return view('test', [
        'quotes'  => $quotes,
        'quote'   => [
            'text'   => $quote->quote,
            'author' => $quote->author,
        ],
        //'url'     => Image::find(rand(1, Image::count()))->url,
        'url'     => [
            'https://res.cloudinary.com/dy5neeiyk/image/upload/v1611518830/deeds/quotes/IMG_20201125_080924_k321xw.jpg',
            'https://res.cloudinary.com/dy5neeiyk/image/upload/v1611399541/deeds/quotes/IMG_20210116_103854_icbygr.jpg',
        ][rand(0, 1)],
        'colour'  => $colour,
        'overlay' => $overlays[$colour],
    ]);
});
