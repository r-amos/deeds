<?php

namespace App\Console\Commands;

use App\Models\Image;
use Illuminate\Console\Command;
use App\Assets\CloudinaryProvider;

class SyncImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get All Images From Provider';

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
        $provider = CloudinaryProvider::create();
        $provider->getAssetUrls('deeds')->map(fn($images) => Image::firstOrCreate($images));
    }
}
