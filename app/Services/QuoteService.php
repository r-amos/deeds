<?php

namespace App\Services;

use App\Models\Quote;
use App\Models\Colour;
use App\Utility\RandomYear;
use App\Assets\CloudinaryProvider;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

class QuoteService
{
    /**
     * @var RandomService
     */
    protected $randomService;

    /**
     * @var CloudinaryProvider
     */
    protected $provider;

    /**
     * @var RandomYear
     */
    protected $randomYear;

    public function __construct(RandomService $randomService, CloudinaryProvider $provider, RandomYear $randomYear)
    {
        $this->randomService = $randomService;
        $this->provider      = $provider;
        $this->randomYear    = $randomYear;
    }

    /**
     * @return array
     */
    protected function getUrls(): Collection
    {
        return Cache::rememberForever('quotes', function () {
            return $this->provider->getAssetUrls('deeds/quotes')->map->url;
        });
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function getMany(int $number = 10): Collection
    {
        $quotes  = $this->randomService->getManyRandom(Quote::class, $number, true);
        $colours = $this->randomService->getManyRandom(Colour::class, $number);
        $urls    = $this->getUrls()->shuffle();

        return $quotes->map(function ($quote) use (&$colours, &$urls) {
            $quote->index    = $this->randomService->randomIndex();
            $quote->colour   = $colours->pop()->colour;
            $quote->image    = $urls->pop();
            $quote->text     = $quote->quote;
            $quote->author   = $quote->author;
            $quote->year     = $this->randomYear->get();
            $quote->template = view('quote.container', compact('quote'))->render();
            return $quote;
        });
    }
}
