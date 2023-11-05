import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function BiodataParticipant({ auth }) {
    const data = usePage().props;

    const [secondId, setSecondId] = useState(data.participant.second_id);
    const [nim, setNim] = useState(data.participant.nim);
    const [applied, setApplied] = useState(data.participant.applied);
    const [name, setName] = useState(data.participant.name);
    const [position, setPosition] = useState(data.participant.position);
    const [university, setUniversity] = useState(data.participant.university);
    const [major, setMajor] = useState(data.participant.major);
    const [status, setStatus] = useState(data.participant.status);
    const [ipk, setIpk] = useState(data.participant.ipk);
    const [semester, setSemester] = useState(data.participant.semester);
    const [entryYear, setEntryYear] = useState(data.participant.entry_year);
    const [statusOfEntry, setStatusOfEntry] = useState(
        data.participant.status_of_entry
    );
    const [universityType, setUniversityType] = useState(
        data.participant.university_type
    );
    const [email, setEmail] = useState(data.participant.email);
    const [phone, setPhone] = useState(data.participant.phone);
    const [linkWhatsapp, setlinkWhatsapp] = useState(
        data.participant.link_whatsapp
    );
    const [registrationEligibilityStatus, setRegistrationEligibility] =
        useState(data.participant.registration_eligibility_status);
    const [surveyKebhinekaanStatus, setSurveyKebhinekaanStatus] = useState(
        data.participant.survey_kebhinekaan_status
    );
    const [letterOfRecommendation, setLetterOfRecommendation] = useState(
        data.participant.letter_of_recommendadtion
    );
    const [spjtm, setSpjtm] = useState(data.participant.spjtm);
    const [cv, setCv] = useState(data.participant.cv);
    const [transcripts, setTranscripts] = useState(
        data.participant.transcripts
    );
    const [certificateOrganizationOne, setCertificationOrganizationOne] =
        useState(data.participant.certificate_organization_one);
    const [certificateOrganizationTwo, setCertificationOrganizationTwo] =
        useState(data.participant.certificate_organization_Two);
    const [certificateOrganizationThree, setCertificationOrganizationThree] =
        useState(data.participant.certificate_organization_three);
    const [certificateOrganizationFour, setCertificationOrganizationFour] =
        useState(data.participant.certificate_organization_four);
    const [certificateOrganizationFive, setCertificationOrganizationFive] =
        useState(data.participant.certificate_organization_five);

    const updateParticipant = (e) => {
        e.preventDefault();
        router.visit(`/participant/update/${data.participant.id}`, {
            method: "put",
            data: {
                second_id: secondId,
                nim: nim,
                applied: applied,
                name: name,
                position: position,
                university: university,
                major: major,
                status: status,
                ipk: ipk,
                semester: semester,
                entry_year: entryYear,
                status_of_entry: statusOfEntry,
                university_type: universityType,
                email: email,
                phone: phone,
                link_whatsapp: linkWhatsapp,
                registration_eligibility_status: registrationEligibilityStatus,
                survey_kebhinekaan_status: surveyKebhinekaanStatus,
                letter_of_recommendadtion: letterOfRecommendation,
                spjtm: spjtm,
                cv: cv,
                transcripts: transcripts,
                certificate_organization_one: certificateOrganizationOne,
                certificate_organization_two: certificateOrganizationTwo,
                certificate_organization_three: certificateOrganizationThree,
                certificate_organization_four: certificateOrganizationFour,
                certificate_organization_five: certificateOrganizationFive,
            },
            preserveState: true,
            onSuccess: () => {
                toast.success(`Berhasil edit ${data.participant.name}`);
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {data.participant.name}
                </h2>
            }
        >
            <Head title={data.participant.name} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-xl font-bold mb-3">
                                Biodata Kandidat
                            </p>
                            <hr />
                            <div className="w-1/2 mt-3 flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">ID</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={secondId}
                                        onChange={(e) =>
                                            setSecondId(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">NIM</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={nim}
                                        onChange={(e) => setNim(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Tanggal Apply
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="date"
                                        placeholder="Placeholder"
                                        value={applied}
                                        onChange={(e) =>
                                            setApplied(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Nama</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Posisi</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={position}
                                        onChange={(e) =>
                                            setPosition(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Universitas
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={university}
                                        onChange={(e) =>
                                            setUniversity(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Jurusan</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={major}
                                        onChange={(e) =>
                                            setMajor(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">status</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Nilai IPK</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="number"
                                        placeholder="Placeholder"
                                        value={ipk}
                                        onChange={(e) => setIpk(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Semester</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="number"
                                        placeholder="Placeholder"
                                        value={semester}
                                        onChange={(e) =>
                                            setSemester(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Tahun Angkatan
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="number"
                                        placeholder="Placeholder"
                                        value={entryYear}
                                        onChange={(e) =>
                                            setEntryYear(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Status Pendaftar
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={statusOfEntry}
                                        onChange={(e) =>
                                            setStatusOfEntry(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Tipe Universitas
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={universityType}
                                        onChange={(e) =>
                                            setUniversityType(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Email</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Link Whatsapp
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={linkWhatsapp}
                                        onChange={(e) =>
                                            setlinkWhatsapp(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Registration Eligibility Status
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={registrationEligibilityStatus}
                                        onChange={(e) =>
                                            setRegistrationEligibility(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Survey Kebhinekaan Status
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={surveyKebhinekaanStatus}
                                        onChange={(e) =>
                                            setSurveyKebhinekaanStatus(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Surat Rekomendasi
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={letterOfRecommendation}
                                        onChange={(e) =>
                                            setLetterOfRecommendation(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">SPJTM</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={spjtm}
                                        onChange={(e) =>
                                            setSpjtm(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Curiculum Vitae (CV)
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={cv}
                                        onChange={(e) => setCv(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Transkip Nilai
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={transcripts}
                                        onChange={(e) =>
                                            setTranscripts(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Sertifikat Organisasi 1
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={certificateOrganizationOne}
                                        onChange={(e) =>
                                            setCertificationOrganizationOne(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Sertifikat Organisasi 2
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={certificateOrganizationTwo}
                                        onChange={(e) =>
                                            setCertificationOrganizationTwo(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Sertifikat Organisasi 3
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={certificateOrganizationThree}
                                        onChange={(e) =>
                                            setCertificationOrganizationThree(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Sertifikat Organisasi 4
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={certificateOrganizationFour}
                                        onChange={(e) =>
                                            setCertificationOrganizationFour(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Sertifikat Organisasi 5
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Placeholder"
                                        value={certificateOrganizationFive}
                                        onChange={(e) =>
                                            setCertificationOrganizationFive(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 gap-2">
                                <button
                                    onClick={() => window.history.back()}
                                    className="bg-slate-300 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-sm">Batal</p>
                                </button>
                                <button
                                    onClick={(e) => updateParticipant(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">
                                        Simpan Perubahan
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
