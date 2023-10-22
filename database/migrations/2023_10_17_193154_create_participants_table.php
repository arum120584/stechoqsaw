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
        Schema::create('participants', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('second_id')->nullable();
            $table->string('nim')->nullable();
            $table->date('applied')->nullable();
            $table->string("name")->nullable();
            $table->string('position')->nullable();
            $table->string('university')->nullable();
            $table->string('major')->nullable();
            $table->string('status')->nullable();
            $table->float('ipk')->nullable();
            $table->integer('semester')->nullable();
            $table->year('entry_year')->nullable();
            $table->string('university_type')->nullable();
            $table->string("email")->nullable();
            $table->string("phone")->nullable();
            $table->string('link_whatsapp')->nullable();
            $table->string('registration_eligibility_status')->nullable();
            $table->string('survey_kebhinekaan_status')->nullable();
            $table->string('letter_of_recommendadtion')->nullable();
            $table->string('spjtm')->nullable();
            $table->string('cv')->nullable();
            $table->string('transcripts')->nullable();
            $table->string('certificate_organization_one')->nullable();
            $table->string('certificate_organization_two')->nullable();
            $table->string('certificate_organization_three')->nullable();
            $table->string('certificate_organization_four')->nullable();
            $table->string('certificate_organization_five')->nullable();
            $table->float("score")->nullable();

            $table->unsignedBigInteger('selection_id')->nullable();
            $table->foreign('selection_id')->references('id')->on('selections')->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participants');
    }
};
