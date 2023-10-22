import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function DetailParticipant({ auth }) {
    const data = usePage().props;
    const [tab, setTab] = useState("biodata");
    const [name, setName] = useState(data.participant.name);

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
            },
        });
    };

    const updateParticipantCriteria = (e) => {
        e.preventDefault();
        return router.visit(`/participant/update/criteria`, {
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
                        <Link className="text-indigo-500" href="/jobs">
                            Kandidat
                        </Link>
                        /{data.participant.name}
                    </p>
                </div>
            }
        >
            <Head title={data.participant.name} />

            <div className="py-12">
                {/* TAB ACTION */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div className="flex flex-row items-center gap-2">
                        <button
                            onClick={() => setTab("biodata")}
                            className={`${
                                tab === "biodata"
                                    ? "bg-indigo-500"
                                    : "border border-indigo-500"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "biodata"
                                        ? "text-white"
                                        : "text-indigo-500"
                                } text-sm`}
                            >
                                Biodata
                            </p>
                        </button>
                        <button
                            onClick={() => setTab("kriteria")}
                            className={`${
                                tab === "kriteria"
                                    ? "bg-indigo-500"
                                    : "border border-indigo-500"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "kriteria"
                                        ? "text-white"
                                        : "text-indigo-500"
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
                                <div className="w-1/2 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">Nama</label>
                                        <input
                                            className="rounded-lg border border-gray-300"
                                            type="text"
                                            placeholder="Placeholder"
                                            // value={name}
                                        />
                                    </div>
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
                                                            <input
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
                                                            />
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
                                                            <input
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
                                                            />
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
                                    className="bg-indigo-500 px-4 py-1 rounded-lg"
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
                                    className="bg-indigo-500 px-4 py-1 rounded-lg"
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
