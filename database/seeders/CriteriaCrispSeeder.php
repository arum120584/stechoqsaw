<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CriteriaCrispSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('criteria_crisps')->insert(
            [
                [
                    'title' => 'Sangat Lengkap',
                    'weight' => 5,
                    'selection_criteria_id' => 1,
                ],
                [
                    'title' => 'Lengkap',
                    'weight' => 4,
                    'selection_criteria_id' => 1,
                ],
                [
                    'title' => 'Cukup Lengkap',
                    'weight' => 3,
                    'selection_criteria_id' => 1,
                ],
                [
                    'title' => 'Tidak Lengkap',
                    'weight' => 2,
                    'selection_criteria_id' => 1,
                ],
                [
                    'title' => 'Sangat Tidak Lengkap',
                    'weight' => 1,
                    'selection_criteria_id' => 1,
                ],

                [
                    'title' => 'Sangat Mengetahui',
                    'weight' => 5,
                    'selection_criteria_id' => 2,
                ],
                [
                    'title' => 'Mengetahui',
                    'weight' => 4,
                    'selection_criteria_id' => 2,
                ],
                [
                    'title' => 'Cukup Mengetahui',
                    'weight' => 3,
                    'selection_criteria_id' => 2,
                ],
                [
                    'title' => 'Tidak Mengetahui',
                    'weight' => 2,
                    'selection_criteria_id' => 2,
                ],
                [
                    'title' => 'Sangat Tidak Mengetahui',
                    'weight' => 1,
                    'selection_criteria_id' => 2,
                ],

                [
                    'title' => 'Sangat Kuat',
                    'weight' => 5,
                    'selection_criteria_id' => 3,
                ],
                [
                    'title' => 'Kuat',
                    'weight' => 4,
                    'selection_criteria_id' => 3,
                ],
                [
                    'title' => 'Cukup Kuat',
                    'weight' => 3,
                    'selection_criteria_id' => 3,
                ],
                [
                    'title' => 'Tidak Kuat',
                    'weight' => 2,
                    'selection_criteria_id' => 3,
                ],
                [
                    'title' => 'Sangat Tidak Kuat',
                    'weight' => 1,
                    'selection_criteria_id' => 3,
                ],

                [
                    'title' => 'Sangat Berpengalaman',
                    'weight' => 5,
                    'selection_criteria_id' => 4,
                ],
                [
                    'title' => 'Berpengalaman',
                    'weight' => 4,
                    'selection_criteria_id' => 4,
                ],
                [
                    'title' => 'Cukup Berpengalaman',
                    'weight' => 3,
                    'selection_criteria_id' => 4,
                ],
                [
                    'title' => 'Tidak Berpengalaman',
                    'weight' => 2,
                    'selection_criteria_id' => 4,
                ],
                [
                    'title' => 'Sangat Tidak Berpengalaman',
                    'weight' => 1,
                    'selection_criteria_id' => 4,
                ],

                [
                    'title' => '<= 45km - 100km',
                    'weight' => 5,
                    'selection_criteria_id' => 5,
                ],
                [
                    'title' => '> 100km - 150km',
                    'weight' => 4,
                    'selection_criteria_id' => 5,
                ],
                [
                    'title' => '> 150km - 200km',
                    'weight' => 3,
                    'selection_criteria_id' => 5,
                ],
                [
                    'title' => '> 200km - 500km',
                    'weight' => 2,
                    'selection_criteria_id' => 5,
                ],
                [
                    'title' => '> 500km',
                    'weight' => 1,
                    'selection_criteria_id' => 5,
                ],

                [
                    'title' => 'Diizinkan',
                    'weight' => 5,
                    'selection_criteria_id' => 6,
                ],
                [
                    'title' => 'Tidak Diizinkan',
                    'weight' => 1,
                    'selection_criteria_id' => 6,
                ],
            ]
        );
    }
}
