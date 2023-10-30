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
                    'name' => 'Ahmad Hizbullah Akbar',
                    'email' => 'akbar'.'@gmail.com',
                    'phone' => '0812345556',
                    'nim' => '183200021',
                    'university' => 'Universitas Nahdatul Ulama Yogyakarta',
                    'semester' => 5,
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Reza Febriansyah',
                    'email' => 'reza'.'@gmail.com',
                    'phone' => '0812345556',
                    'nim' => '183200031',
                    'university' => 'Universitas Atma Jaya Yogyakarta',
                    'semester' => 7,
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Arum Lestiyorini Hudaya',
                    'email' => 'arum'.'@gmail.com',
                    'phone' => '0812345556',
                    'nim' => '201200021',
                    'university' => 'Universitas Alma Ata Yogyakarta',
                    'semester' => 7,
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' => 'Elvara Purwati',
                    'email' => 'elvara'.'@gmail.com',
                    'phone' => '0812345556',
                    'nim' => '193200015',
                    'university' => 'Universitas Ahmad Dahlan Yogyakarta',
                    'semester' => 5,
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
                [
                    'name' =>'Nuridwan Eka Saputra',
                    'email' =>'ridwan'.'@gmail.com',
                    'phone' => '0812345556',
                    'nim' => '183200020',
                    'university' => 'Universitas Negeri Yogyakarta',
                    'semester' => 7,
                    'status' => 'IN PROGRESS',
                    'selection_id' => 1,
                ],
            ]
        );
    }
}
