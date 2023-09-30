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
                    'job_name' => 'Programmer',
                    'description' => 'Ini adalah pekerjaan programmer untuk anak magang MSIB',
                    'type' => 'MAGANG MSIB',
                    'image' => '1695865336_acb55fb00d7c5c58fce4612811fa670e.jpeg'
                ],
                [
                    'job_name' => 'Graphic Designer',
                    'description' => 'Ini adalah pekerjaan desain grafis untuk anak magang MSIB',
                    'type' => 'MAGANG REGULAR',
                    'image' => '1695865441_1501-360x203.jpg.jpg'
                ]
            ]
        );
    }
}
