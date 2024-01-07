<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SelectionCriteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('selection_criterias')->insert(
            [
                [
                    'name' => 'Curiculum Vitae (CV)',
                    'type' => 'BENEFIT',
                    'weight' => 5,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Pengetahuan Stechoq',
                    'type' => 'BENEFIT',
                    'weight' => 2,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Motivasi Kuat',
                    'type' => 'BENEFIT',
                    'weight' => 3,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Pengalaman Proyek',
                    'type' => 'BENEFIT',
                    'weight' => 4,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Mobilisasi',
                    'type' => 'COST',
                    'weight' => 3,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Perizinan',
                    'type' => 'BENEFIT',
                    'weight' => 4,
                    'selection_id' => 1,
                ],
            ]
        );
    }
}
