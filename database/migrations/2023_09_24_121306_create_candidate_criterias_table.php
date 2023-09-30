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
        Schema::create('candidate_criterias', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('candidate_id')->nullable();
            $table->foreign('candidate_id')->references('id')->on('candidates')->onDelete("cascade");

            $table->unsignedBigInteger('job_criteria_id')->nullable();
            $table->foreign('job_criteria_id')->references('id')->on('job_criterias')->onDelete("cascade");

            $table->double('value', 15, 8);
            
            $table->integer('weight')->nullable();
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
        Schema::dropIfExists('candidate_criterias');
    }
};
