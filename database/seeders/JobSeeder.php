<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('jobs')->insert(
            [
                [
                    'job_name' => 'Software Engineering',
                    'type' => 'MAGANG MSIB',
                    'due_date' => '2023-10-31'
                ],
            ]
        );
    }
}
