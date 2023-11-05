<?php

namespace App\Imports;

use App\Models\Participant;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportParticipants implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        if($row[0] != "ID") {

            return new Participant([
                //
                'second_id' => $row[0],
                'nim' => $row[1],
                'applied' => $row[2],
                'name' => $row[3],
                'position' => $row[4],
                'university' => $row[5],
                'major' => $row[6],
                'status' => $row[7],
                'ipk' => $row[8],
                'semester' => $row[9],
                'entry_year' => $row[10],
                'status_of_entry' => $row[11],
                'university_type' => $row[12],
                'email' => $row[13],
                'phone' => $row[14],
                'link_whatsapp' => $row[15],
                'registration_eligibility_status' => $row[16],
                'survey_kebhinekaan_status' => $row[17],
                'letter_of_recommendadtion' => $row[18],
                'spjtm' => $row[19],
                'cv' => $row[20],
                'transcripts' => $row[21],
                'certificate_organization_one' => $row[22],
                'certificate_organization_two' => $row[23],
                'certificate_organization_three' => $row[24],
                'certificate_organization_four' => $row[25],
                'certificate_organization_five' => $row[26],
            ]);
                
        }
        // dd($row);
    }
}




