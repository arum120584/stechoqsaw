<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ParticipantCriteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('participant_criterias')->insert(
            [
                [
                    'participant_id' => 1,
                    'selection_criteria_id' => 1,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 1,
                    'selection_criteria_id' => 2,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 1,
                    'selection_criteria_id' => 3,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 1,
                    'selection_criteria_id' => 4,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 2,
                    'selection_criteria_id' => 1,
                    'value' => 50,
                    'weight' => 2,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 2,
                    'selection_criteria_id' => 2,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 2,
                    'selection_criteria_id' => 3,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 2,
                    'selection_criteria_id' => 4,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 3,
                    'selection_criteria_id' => 1,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 3,
                    'selection_criteria_id' => 2,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 3,
                    'selection_criteria_id' => 3,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 3,
                    'selection_criteria_id' => 4,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 4,
                    'selection_criteria_id' => 1,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 4,
                    'selection_criteria_id' => 2,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 4,
                    'selection_criteria_id' => 3,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 4,
                    'selection_criteria_id' => 4,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 5,
                    'selection_criteria_id' => 1,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 5,
                    'selection_criteria_id' => 2,
                    'value' => 50,
                    'weight' => 3,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 5,
                    'selection_criteria_id' => 3,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
                [
                    'participant_id' => 5,
                    'selection_criteria_id' => 4,
                    'value' => 50,
                    'weight' => 4,
                    'note' => "Any",
                ],
            ]
        );
    }
}
