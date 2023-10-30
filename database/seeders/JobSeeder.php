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
                    'description' => 'Ke Jogja mampir ke tugu
                    Ke angkringan beli air
                    Ini yang stemies tunggu
                    Finally udah hadir
                    
                    Yang dari kemarin sempet bombardir stemin ini nih, Magang Merdeka Stechoq batch 5 udah dibuka
                    
                    Di batch 5 kami menerima 120 mahasiswa magang yang tentunya dari seluruh Perguruan Tinggi di Indonesia, dengan posisi :
                    
                    Software Engineer 30 Peserta
                    Hardware Engineer 20 Peserta
                    Mechanical Engineer 16 Peserta
                    3D Designer 10 Peserta
                    Lean Manufacturing Engineer 8 Peserta
                    Education Engineer 6 Peserta
                    Startup Business Development 10 Peserta
                    Creative Video & Content Creation 20 Peserta
                    
                    Ngga hanya itu, ada juga extrakulikuler Pelatihan Teknologi, Bahasa Inggris, Softskill, Startup Incubation, Olahraga dan aktivitas menarik lainnya yang bisa tingkatin skill kalian biar makin outstanding
                    
                    Mari Berkarya Untuk Bangsa
                    Daftar sekarang di bit.ly/StechoqMSIB',
                    'type' => 'MAGANG MSIB',
                    'image' => 'cc.jpg',
                    'due_date' => '2023-10-31'
                ],
            ]
        );
    }
}
