<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('participant_criterias', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('participant_id');
            $table->foreign('participant_id')->references('id')->on('participants')->onDelete("cascade");

            $table->unsignedBigInteger('selection_criteria_id');
            $table->foreign('selection_criteria_id')->references('id')->on('selection_criterias')->onDelete("cascade");

            $table->integer('value')->nullable();
            
            $table->integer('weight');
            $table->float('weight_normalization')->nullable();
            $table->longText('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participant_criterias');
    }
};
