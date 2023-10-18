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
                    'name' => 'Ringkasan',
                    'type' => 'BENEFIT',
                    'weight' => 3,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Pengalaman',
                    'type' => 'BENEFIT',
                    'weight' => 5,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Portfolio',
                    'type' => 'BENEFIT',
                    'weight' => 4,
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Pendidikan',
                    'type' => 'BENEFIT',
                    'weight' => 2,
                    'selection_id' => 1,
                ],
            ]
        );
    }
}
