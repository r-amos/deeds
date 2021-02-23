<?php

namespace App\Utility;

class RandomYear
{

    /**
     * @return integer
     */
    public function get(): int
    {
        $year  = new \DateTime('2014-01-01');
        $years = collect([]);

        while ($year->format('Y') <= (new \DateTime())->format('Y')) {
            $years->push($year->format('Y'));
            $year->modify('+1Year');
        }

        return $years->random();
    }
}
