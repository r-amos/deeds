<?php

use App\Models\Image;
use App\Models\Quote;
use App\Assets\CloudinaryProvider;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Cache;
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

    $urls = Cache::rememberForever('quotes', function () {
        $provider = CloudinaryProvider::create();
        return $provider->getAssetUrls('deeds/quotes');
    });

    $count  = Quote::count();
    $quotes = collect();

    while ($quotes->count() < 10) {
        $quote = Quote::find(rand(1, $count));
        if (!$quotes->has($quote->getKey())) {
            $quotes->add($quote);
        }
    }

    $quote = $quotes->pop();

    $colours = [
        'purple',
        'red', 'blue', 'green', 'yellow', 'indigo', 'pink',
        'gray', 'orange', 'amber', 'lime', 'emerald', 'teal',
        'cyan', 'lightBlue', 'violet', 'fuchsia', 'rose',
    ];
    $colour = $colours[rand(0, count($colours) - 1)];

    $i = 2;
    $quotes->map(function ($quote) use (&$colours, &$urls, &$i) {
        $quote->index  = $i;
        $quote->colour = $colours[rand(0, count($colours) - 1)];
        $colours       = array_values(array_filter($colours, function ($x) use ($quote) {
            return $x !== $quote->colour;
        }));
        $quote->image = $urls->random()['url'];
        $urls         = $urls->filter(function ($url) use ($quote) {
            return $url['url'] !== $quote->image;
        });
        $quote->template = view('quote.container', [
            'index'  => $i,
            'colour' => $quote->colour,
            'url'    => $quote->image,
            'text'   => $quote->quote,
            'author' => $quote->author,
            'year'   => [2016, 2017, 2018, 2019, 2020, 2021][rand(0, 5)],
        ])->render();
        $i++;
        return $quote;
    });

    return view('daily', [
        'cover'  => view('quote.loading')->render(),
        'quotes' => $quotes,
        'quote'  => [
            'text'   => $quote->quote,
            'author' => $quote->author,
        ],
        'url'    => $urls->first()['url'],
        'colour' => $colour,
        'year'   => [2016, 2017, 2018, 2019, 2020, 2021][rand(0, 5)],
    ]);
});
