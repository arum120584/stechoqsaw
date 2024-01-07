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
        Schema::create('criteria_crisps', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('weight'); 

            $table->unsignedBigInteger('selection_criteria_id');
            $table->foreign('selection_criteria_id')->references('id')->on('selection_criterias')->onDelete("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('criteria_crisps');
    }
};
