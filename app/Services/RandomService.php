<?php

namespace App\Services;

use App\Utility\Random;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;

class RandomService
{

    /**
     * @var Random
     */
    protected $randomService;

    /**
     * @param \App\Utility\Random $random
     */
    public function __construct(Random $random)
    {
        $this->randomService = $random;
    }

    /**
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getRandom(string $model): Model
    {
        return $model::find(
            $this->randomService->getRandomBetween(1, $this->model::count())
        );
    }

    /**
     * @param [type] $model
     * @param integer $number
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getManyRandom(string $model, int $number = 10, bool $unique = false): Collection
    {

        $identifiers = $this->randomService->getManyRandomBetween(1, $model::count(), $number, $unique);
        $models      = $model::findMany($identifiers);

        return ($unique)
        ? $models
        : collect(
            array_map(function ($identifier) use ($models) {
                return $models->find($identifier);
            }, $identifiers)
        );

    }

    /**
     * @return string
     */
    public function randomIndex(): string
    {
        return $this->randomService->getString(7);
    }
}
