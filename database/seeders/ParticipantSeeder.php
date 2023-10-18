<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('participants')->insert(
            [
                [
                    'name' => 'Akbar',
                    'email' => 'akbar'.'@gmail.com',
                    'phone' => '0812345556',
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Reza',
                    'email' => 'reza'.'@gmail.com',
                    'phone' => '0812345556',
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Arum',
                    'email' => 'arum'.'@gmail.com',
                    'phone' => '0812345556',
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Elvara',
                    'email' => 'elvara'.'@gmail.com',
                    'phone' => '0812345556',
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' =>'Ridwan',
                    'email' =>'ridwan'.'@gmail.com',
                    'phone' => '0812345556',
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
            ]
        );
    }
}
