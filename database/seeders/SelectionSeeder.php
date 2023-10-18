<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SelectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('selections')->insert(
            [
                [
                    'name' => 'CV',
                    'status' => 'ONGOING',
                    'job_id' => 1,
                ],
                [
                    'name' => 'Skill Test',
                    'status' => 'NOT YET',
                    'job_id' => 1,
                ],
                [
                    'name' => 'Asessment Test',
                    'status' => 'NOT YET',
                    'job_id' => 1,
                ],
                [
                    'name' => 'Interview',
                    'status' => 'NOT YET',
                    'job_id' => 1,
                ],
            ]
        );
    }
}
