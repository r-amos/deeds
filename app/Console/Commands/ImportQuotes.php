<?php

namespace App\Console\Commands;

use App\Models\Quote;
use Illuminate\Console\Command;

class ImportQuotes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:quotes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import Quote Database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $quotes = file_get_contents(
            'https://raw.githubusercontent.com/dwyl/quotes/master/quotes.json'
        );

        foreach (json_decode($quotes, true) as $quote) {
            Quote::create([
                'author' => $quote['author'],
                'quote'  => $quote['text'],
            ]);
        }
    }
}
