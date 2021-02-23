<?php

namespace App\Utility;

use Illuminate\Support\Collection;

class Random
{

    /**
     * @param integer $length
     *
     * @return string
     */
    public function getString(int $length): string
    {
        return substr(md5(rand()), 0, $length);
    }

    /**
     * @param integer $lower
     * @param integer $upper
     *
     * @return integer
     */
    public function getRandomBetween(int $lower, int $upper): int
    {
        return rand($lower, $upper);
    }

    /**
     * @param integer $numberOfQuotes
     *
     * @return \Illuminate\Support\Collection
     */
    public function getManyRandomBetween(int $lower, int $upper, int $numberOfQuotes = 10, bool $unique = false): array
    {
        $randomNumbers = collect();

        while ($randomNumbers->count() < $numberOfQuotes) {
            $randomNumber = $this->getRandomBetween($lower, $upper);
            if ($unique && $randomNumbers->has($randomNumber)) {
                continue;
            }
            $randomNumbers->add($randomNumber);
        }
        return $randomNumbers->toArray();
    }
}
