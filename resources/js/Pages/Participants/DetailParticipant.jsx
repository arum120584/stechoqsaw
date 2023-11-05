import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function DetailParticipant({ auth }) {
    const data = usePage().props;
    const [tab, setTab] = useState("biodata");

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

    const [criteriaId, setCriteriaId] = useState([]);
    const [weight, setWeight] = useState([]);
    const [candValue, setCandValue] = useState([]);
    const [note, setNote] = useState([]);

    const [valueWeight, setValueWeight] = useState(
        data.participant.participant_criteria.length > 0
            ? data.participant.participant_criteria.map((criteria) => {
                  return criteria.weight;
              })
            : []
    );

    const [valueCandValue, setValueCandValue] = useState(
        data.participant.participant_criteria.length > 0
            ? data.participant.participant_criteria.map((criteria) => {
                  return criteria.value;
              })
            : []
    );

    const [valueNote, setValueNote] = useState(
        data.participant.participant_criteria.length > 0
            ? data.participant.participant_criteria.map((criteria) => {
                  return criteria.note;
              })
            : []
    );

    const [valueNormalization, setValueNormalization] = useState(
        data.participant.participant_criteria.length > 0
            ? data.participant.participant_criteria.map((criteria) => {
                  return criteria.weight_normalization;
              })
            : []
    );

    const handleWeight = (index, value) => {
        const newWeights = [...weight];
        newWeights[index] = value;
        setWeight(newWeights);
    };

    const handleValue = (index, value) => {
        const newValue = [...candValue];
        newValue[index] = value;
        setCandValue(newValue);
    };

    const handleNote = (index, value) => {
        const newNote = [...note];
        newNote[index] = value;
        setNote(newNote);
    };

    const handleValueCandValue = (index, value, id) => {
        const newValueCandValues = [...valueCandValue];
        newValueCandValues[index] = value;
        const newIds = [...criteriaId];
        newIds[index] = id;
        setCriteriaId(newIds);
        setValueCandValue(newValueCandValues);
    };

    const handleValueWeight = (index, value, id) => {
        const newValueWeights = [...valueWeight];
        newValueWeights[index] = value;
        const newIds = [...criteriaId];
        newIds[index] = id;
        setCriteriaId(newIds);
        setValueWeight(newValueWeights);
    };

    const handleValueNote = (index, value, id) => {
        const newValueNotes = [...valueNote];
        newValueNotes[index] = value;
        const newIds = [...criteriaId];
        newIds[index] = id;
        setCriteriaId(newIds);
        setValueNote(newValueNotes);
    };

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
                toast.success(`Berhasil edit kandidat`);
            },
        });
    };

    const addParticipantCriteria = (e) => {
        e.preventDefault();
        router.visit("/participant/add/criteria", {
            method: "post",
            data: {
                participant_id: data.participant.id,
                selection_criteria_id:
                    data.participant.selection.selection_criterias,
                weight: weight,
                value: candValue,
                note: note,
                selection_id: data.participant.selection_id,
            },
            // preserveState: true,
        });
        // return to_route("selections.detail", 2);
    };

    const updateParticipantCriteria = (e) => {
        e.preventDefault();
        return router.visit(`/participant/updatecriteria`, {
            method: "put",
            data: {
                participant_id: data.participant.id,
                selection_criteria_id:
                    data.participant.selection.selection_criterias,
                participant_criteria_id: criteriaId,
                value: valueCandValue,
                weight: valueWeight,
                note: valueNote,
            },
        });
        // console.log(criteriaId);
        // console.log(data.participant);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Kandidat - {data.participant.name}
                    </h2>
                    <p className="text-sm text-slate-400">
                        <Link className="text-blue-900" href="/jobs">
                            Kandidat
                        </Link>
                        /{data.participant.name}
                    </p>
                </div>
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

            <div className="py-12">
                {/* TAB ACTION */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div className="flex flex-row items-center gap-2">
                        <button
                            onClick={() => setTab("biodata")}
                            className={`${
                                tab === "biodata"
                                    ? "bg-blue-900"
                                    : "border border-blue-900"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "biodata"
                                        ? "text-white"
                                        : "text-blue-900"
                                } text-sm`}
                            >
                                Biodata
                            </p>
                        </button>
                        <button
                            onClick={() => setTab("kriteria")}
                            className={`${
                                tab === "kriteria"
                                    ? "bg-blue-900"
                                    : "border border-blue-900"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "kriteria"
                                        ? "text-white"
                                        : "text-blue-900"
                                } text-sm`}
                            >
                                Kriteria
                            </p>
                        </button>
                    </div>
                </div>
                {/* END TAB ACTION */}
                {tab === "biodata" && (
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
                                            onChange={(e) =>
                                                setNim(e.target.value)
                                            }
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
                                        <label className="text-sm">
                                            Posisi
                                        </label>
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
                                        <label className="text-sm">
                                            Jurusan
                                        </label>
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
                                        <label className="text-sm">
                                            status
                                        </label>
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
                                        <label className="text-sm">
                                            Nilai IPK
                                        </label>
                                        <input
                                            className="rounded-lg border border-gray-300"
                                            type="number"
                                            placeholder="Placeholder"
                                            value={ipk}
                                            onChange={(e) =>
                                                setIpk(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">
                                            Semester
                                        </label>
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
                                                setUniversityType(
                                                    e.target.value
                                                )
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
                                            value={
                                                registrationEligibilityStatus
                                            }
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
                                            onChange={(e) =>
                                                setCv(e.target.value)
                                            }
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
                )}

                {tab === "kriteria" && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            {/* cek apakah participant sudah ada nilai kriteria atau belum */}
                            {data.participant.participant_criteria.length >
                            0 ? (
                                <div className="p-6 w-full flex flex-col gap-8">
                                    {data.participant.participant_criteria.map(
                                        (criteria, idx) => {
                                            return (
                                                <div
                                                    key={criteria.id}
                                                    className="flex flex-col"
                                                >
                                                    <p className="text-lg font-semibold mb-3">
                                                        {
                                                            criteria
                                                                .selection_criteria
                                                                .name
                                                        }
                                                    </p>

                                                    <div className="flex items-center gap-3 mt-3">
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Nilai
                                                            </label>
                                                            <input
                                                                className="rounded-lg border border-gray-300"
                                                                type="text"
                                                                placeholder="Contoh: 85"
                                                                value={
                                                                    valueCandValue[
                                                                        idx
                                                                    ]
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleValueCandValue(
                                                                        idx,
                                                                        e.target
                                                                            .value,
                                                                        criteria.id
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Bobot
                                                            </label>
                                                            {/* <input
                                                                className="rounded-lg border border-gray-300"
                                                                type="text"
                                                                placeholder="Contoh: 5"
                                                                value={
                                                                    valueWeight[
                                                                        idx
                                                                    ]
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleValueWeight(
                                                                        idx,
                                                                        e.target
                                                                            .value,
                                                                        criteria.id
                                                                    );
                                                                }}
                                                            /> */}
                                                            {criteria
                                                                .selection_criteria
                                                                .type ===
                                                            "BENEFIT" ? (
                                                                <select
                                                                    value={
                                                                        valueWeight[
                                                                            idx
                                                                        ]
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        handleValueWeight(
                                                                            idx,
                                                                            e
                                                                                .target
                                                                                .value,
                                                                            criteria.id
                                                                        );
                                                                    }}
                                                                    className="rounded-lg border border-gray-300"
                                                                >
                                                                    <option
                                                                        disabled
                                                                        value={
                                                                            0
                                                                        }
                                                                    >
                                                                        Pilih
                                                                        bobot
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            5
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        SESUAI
                                                                        (5)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            4
                                                                        }
                                                                    >
                                                                        CUKUP
                                                                        SESUAI
                                                                        (4)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            3
                                                                        }
                                                                    >
                                                                        SESUAI
                                                                        (3)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }
                                                                    >
                                                                        TIDAK
                                                                        SESUAI
                                                                        (2)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        TIDAK
                                                                        SESUAI
                                                                        (1)
                                                                    </option>
                                                                </select>
                                                            ) : (
                                                                <select
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        handleValueWeight(
                                                                            idx,
                                                                            e
                                                                                .target
                                                                                .value,
                                                                            criteria.id
                                                                        );
                                                                    }}
                                                                    value={
                                                                        valueWeight[
                                                                            idx
                                                                        ]
                                                                    }
                                                                    className="rounded-lg border border-gray-300"
                                                                >
                                                                    <option
                                                                        disabled
                                                                        value={
                                                                            0
                                                                        }
                                                                    >
                                                                        Pilih
                                                                        bobot
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        SESUAI
                                                                        (1)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }
                                                                    >
                                                                        CUKUP
                                                                        SESUAI
                                                                        (2)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            3
                                                                        }
                                                                    >
                                                                        SESUAI
                                                                        (3)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            4
                                                                        }
                                                                    >
                                                                        TIDAK
                                                                        SESUAI
                                                                        (4)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            5
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        TIDAK
                                                                        SESUAI
                                                                        (5)
                                                                    </option>
                                                                </select>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Catatan
                                                            </label>
                                                            <input
                                                                className="rounded-lg border border-gray-300"
                                                                type="text"
                                                                placeholder="Masukkan catatan"
                                                                value={
                                                                    valueNote[
                                                                        idx
                                                                    ]
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleValueNote(
                                                                        idx,
                                                                        e.target
                                                                            .value,
                                                                        criteria.id
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Normalisasi
                                                            </label>
                                                            <input
                                                                disabled
                                                                className="rounded-lg border border-gray-300 bg-slate-100"
                                                                type="text"
                                                                value={
                                                                    valueNormalization[
                                                                        idx
                                                                    ]
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setValueNormalization(
                                                                        idx,
                                                                        e.target
                                                                            .value,
                                                                        criteria.id
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            ) : (
                                <div className="p-6 w-full flex flex-col gap-8">
                                    {data.participant.selection.selection_criterias.map(
                                        (criteria, idx) => {
                                            return (
                                                <div
                                                    key={criteria.id}
                                                    className="flex flex-col"
                                                >
                                                    <p className="text-lg font-semibold mb-3">
                                                        {criteria.name}
                                                    </p>

                                                    <div className="flex items-center gap-3 mt-3">
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Nilai
                                                            </label>
                                                            <input
                                                                className="rounded-lg border border-gray-300"
                                                                type="text"
                                                                placeholder="Contoh: 85"
                                                                value={
                                                                    candValue[
                                                                        idx
                                                                    ] || ""
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleValue(
                                                                        idx,
                                                                        e.target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Bobot
                                                            </label>
                                                            {/* <input
                                                                className="rounded-lg border border-gray-300"
                                                                type="text"
                                                                placeholder="Contoh: 5"
                                                                value={
                                                                    weight[
                                                                        idx
                                                                    ] || ""
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleWeight(
                                                                        idx,
                                                                        e.target
                                                                            .value
                                                                    );
                                                                }}
                                                            /> */}
                                                            {criteria.type ===
                                                            "BENEFIT" ? (
                                                                <select
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        handleWeight(
                                                                            idx,
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                    value={
                                                                        weight[
                                                                            idx
                                                                        ] || 0
                                                                    }
                                                                    className="rounded-lg border border-gray-300"
                                                                >
                                                                    <option
                                                                        disabled
                                                                        value={
                                                                            0
                                                                        }
                                                                    >
                                                                        Pilih
                                                                        bobot
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            5
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        SESUAI
                                                                        (5)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            4
                                                                        }
                                                                    >
                                                                        CUKUP
                                                                        SESUAI
                                                                        (4)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            3
                                                                        }
                                                                    >
                                                                        SESUAI
                                                                        (3)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }
                                                                    >
                                                                        TIDAK
                                                                        SESUAI
                                                                        (2)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        TIDAK
                                                                        SESUAI
                                                                        (1)
                                                                    </option>
                                                                </select>
                                                            ) : (
                                                                <select
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        handleWeight(
                                                                            idx,
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                    value={
                                                                        weight[
                                                                            idx
                                                                        ] || 0
                                                                    }
                                                                    className="rounded-lg border border-gray-300"
                                                                >
                                                                    <option
                                                                        disabled
                                                                        value={
                                                                            0
                                                                        }
                                                                    >
                                                                        Pilih
                                                                        bobot
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        SESUAI
                                                                        (1)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }
                                                                    >
                                                                        CUKUP
                                                                        SESUAI
                                                                        (2)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            3
                                                                        }
                                                                    >
                                                                        SESUAI
                                                                        (3)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            4
                                                                        }
                                                                    >
                                                                        TIDAK
                                                                        SESUAI
                                                                        (4)
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            5
                                                                        }
                                                                    >
                                                                        SANGAT
                                                                        TIDAK
                                                                        SESUAI
                                                                        (5)
                                                                    </option>
                                                                </select>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-sm">
                                                                Catatan
                                                            </label>
                                                            <input
                                                                className="rounded-lg border border-gray-300"
                                                                type="text"
                                                                placeholder="Masukkan catatan"
                                                                value={
                                                                    note[idx] ||
                                                                    ""
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleNote(
                                                                        idx,
                                                                        e.target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-row justify-end mt-5">
                            {valueWeight.length > 0 ? (
                                <button
                                    onClick={(e) =>
                                        updateParticipantCriteria(e)
                                    }
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">
                                        Simpan Perubahan
                                    </p>
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        addParticipantCriteria(e);
                                    }}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">Simpan</p>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
