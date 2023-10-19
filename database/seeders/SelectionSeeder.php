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
                    'name' => 'Pemberkasan',
                    'status' => 'BERLANGSUNG',
                    'job_id' => 1,
                ],
                [
                    'name' => 'Tes Keahlian',
                    'status' => 'AKAN DATANG',
                    'job_id' => 1,
                ],
                [
                    'name' => 'Tes Kepribadian',
                    'status' => 'AKAN DATANG',
                    'job_id' => 1,
                ],
                [
                    'name' => 'Wawancara',
                    'status' => 'AKAN DATANG',
                    'job_id' => 1,
                ],
            ]
        );
    }
}
