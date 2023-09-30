<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CandidateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('candidates')->insert(
            [
                [
                    'name' => Str::random(10),
                    'email' => Str::random(10).'@gmail.com',
                    'phone' => '0812345556',
                    'job_id' => 1,
                ],
                [
                    'name' => Str::random(10),
                    'email' => Str::random(10).'@gmail.com',
                    'phone' => '0812345556',
                    'job_id' => 1,
                ],
                [
                    'name' => Str::random(10),
                    'email' => Str::random(10).'@gmail.com',
                    'phone' => '0812345556',
                    'job_id' => 1,
                ],
                [
                    'name' => Str::random(10),
                    'email' => Str::random(10).'@gmail.com',
                    'phone' => '0812345556',
                    'job_id' => 1,
                ],
                [
                    'name' => Str::random(10),
                    'email' => Str::random(10).'@gmail.com',
                    'phone' => '0812345556',
                    'job_id' => 1,
                ],
            ]
        );
    }
}
