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
                'university_type' => $row[11],
                'email' => $row[12],
                'phone' => $row[13],
                'link_whatsapp' => $row[14],
                'registration_eligibility_status' => $row[15],
                'survey_kebhinekaan_status' => $row[16],
                'letter_of_recommendadtion' => $row[17],
                'spjtm' => $row[18],
                'cv' => $row[19],
                'transcripts' => $row[20],
                'certificate_organization_one' => $row[21],
                'certificate_organization_two' => $row[22],
                'certificate_organization_three' => $row[23],
                'certificate_organization_four' => $row[24],
                'certificate_organization_five' => $row[25],
            ]);
                
        }
        // dd($row);
    }
}




