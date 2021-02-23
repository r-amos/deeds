<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colours', function (Blueprint $table) {
            $table->id();
            $table->string('colour');
        });

        DB::table('colours')->insert([
            ['colour' => 'purple'],
            ['colour' => 'red'],
            ['colour' => 'blue'],
            ['colour' => 'green'],
            ['colour' => 'yellow'],
            ['colour' => 'indigo'],
            ['colour' => 'pink'],
            ['colour' => 'gray'],
            ['colour' => 'orange'],
            ['colour' => 'amber'],
            ['colour' => 'lime'],
            ['colour' => 'emerald'],
            ['colour' => 'teal'],
            ['colour' => 'cyan'],
            ['colour' => 'lightBlue'],
            ['colour' => 'violet'],
            ['colour' => 'fuchsia'],
            ['colour' => 'rose'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colours');
    }
}
