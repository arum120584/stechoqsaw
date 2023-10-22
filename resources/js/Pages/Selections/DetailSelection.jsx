import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function DetailSelection({ auth }) {
    const data = usePage().props;
    const [tab, setTab] = useState("kriteria");
    const [excel, setExcel] = useState({});
    // const [results, setResults] = useState(
    //     data.participants.data.sort((a, b) => b.score - a.score)
    // );
    const [results, setResults] = useState([]);

    const total_weight =
        data.selection.selection_criterias.length > 0 &&
        data.selection.selection_criterias.reduce(
            (prev, criteria) => prev + criteria.weight,
            0
        );

    const setNormalization = (e, id, weight) => {
        e.preventDefault();
        router.visit(`/selectioncriteria/normalization/${id}`, {
            method: "put",
            data: {
                weight_normalization: weight / total_weight,
            },
        });
    };

    const importExcel = (e) => {
        e.preventDefault();
        // return console.log(excel);
        router.visit("/participant/import", {
            method: "post",
            data: {
                file: excel,
            },
            forceFormData: true,
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getPage = (e) => {
        e.preventDefault();
        router.visit(`${data.participants.next_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
        setTab("kandidat");
    };

    const DetailParticipant = (e, id) => {
        e.preventDefault();
        router.visit(`/participant/detail/${id}`, {
            method: "get",
        });
    };

    const startSaw = (e, idselection) => {
        e.preventDefault();
        router.visit(`/startsaw/${idselection}`, {
            method: "get",
        });
        setTimeout(() => {
            router.visit(`/startsaw/${idselection}`, {
                method: "get",
            });
        }, 3500);
        // console.log(data.participants);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Tahap Seleksi - {data.selection.name}
                    </h2>
                    <p className="text-sm text-slate-400">
                        <Link className="text-indigo-500" href="/jobs">
                            Pekerjaan
                        </Link>
                        /
                        <Link className="text-indigo-500" href="/jobs">
                            {data.selection.job.job_name}
                        </Link>
                        /
                        <Link className="text-indigo-500" href="/jobs">
                            Tahap Seleksi
                        </Link>
                        /{data.selection.name}
                    </p>
                </div>
            }
        >
            <Head title="Tahap Seleksi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full flex items-center gap-24">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Tahapan Seleksi</p>
                                <p>Seleksi {data.selection.name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Pekerjaan</p>
                                <p>{data.selection.job.job_name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Tipe</p>
                                <p>{data.selection.job.type}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">
                                    Batas Akhir Pendaftaran
                                </p>
                                <p>{data.selection.job.due_date}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Status</p>
                                <p>{data.selection.status}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TAB ACTION */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div className="flex flex-row items-center gap-2">
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
                        <button
                            onClick={() => setTab("kandidat")}
                            className={`${
                                tab === "kandidat"
                                    ? "bg-indigo-500"
                                    : "border border-indigo-500"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "kandidat"
                                        ? "text-white"
                                        : "text-indigo-500"
                                } text-sm`}
                            >
                                Kandidat
                            </p>
                        </button>
                        <button
                            onClick={() => setTab("seleksi")}
                            className={`${
                                tab === "seleksi"
                                    ? "bg-indigo-500"
                                    : "border border-indigo-500"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "seleksi"
                                        ? "text-white"
                                        : "text-indigo-500"
                                } text-sm`}
                            >
                                Hasil Seleksi
                            </p>
                        </button>
                    </div>
                </div>
                {/* END TAB ACTION */}

                {tab === "kriteria" && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                <table className="w-full">
                                    <thead className="bg-gray-100 text-left">
                                        <tr>
                                            <th className="py-3 px-4 w-4 text-sm">
                                                No
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Kriteria Penyeleksian
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Bobot
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Normalisasi
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Tipe
                                            </th>
                                            <th className="py-3 px-4 w-10 text-sm">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.selection.selection_criterias
                                            .length > 0 &&
                                            data.selection.selection_criterias.map(
                                                (criteria, idx) => {
                                                    return (
                                                        <tr key={criteria.id}>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {idx + 1}
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {criteria.name}
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    criteria.weight
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {criteria.weight_normalization !==
                                                                null
                                                                    ? criteria.weight_normalization
                                                                    : "Belum Normalisasi"}
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {criteria.type}
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50">
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            setNormalization(
                                                                                e,
                                                                                criteria.id,
                                                                                criteria.weight
                                                                            )
                                                                        }
                                                                        className="bg-slate-500 px-2 py-1 rounded-lg"
                                                                    >
                                                                        <i className="bx bx-fw bx-transfer-alt text-white"></i>
                                                                    </button>
                                                                    <button className="bg-orange-500 px-2 py-1 rounded-lg">
                                                                        <i className="bx bx-fw bx-edit text-white"></i>
                                                                    </button>
                                                                    <button className="bg-red-500 px-2 py-1 rounded-lg">
                                                                        <i className="bx bx-fw bx-trash text-white"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "kandidat" && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={(e) => {
                                        importExcel(e);
                                    }}
                                    className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                                >
                                    <i className="bx bx-fw bx-upload text-slate-400"></i>
                                </button>

                                <input
                                    onChange={(e) =>
                                        setExcel(e.target.files[0])
                                    }
                                    className="rounded-lg border border-gray-300"
                                    type="file"
                                    value={excel.File}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() =>
                                        window.open(
                                            window.location.origin +
                                                "/participant/export",
                                            "_blank"
                                        )
                                    }
                                    className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                                >
                                    <p className="text-sm">Download Kandidat</p>
                                </button>
                                <button
                                    onClick={(e) =>
                                        startSaw(e, data.selection.id)
                                    }
                                    className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                                >
                                    <p className="text-sm">Mulai Seleksi</p>
                                </button>
                            </div>
                        </div>
                        <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                <table className="w-full">
                                    <thead className="bg-gray-100 text-left">
                                        <tr>
                                            <th className="py-3 px-4 w-4 text-sm">
                                                No
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Nama Lengkap
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                NIM
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Universitas
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Semester
                                            </th>
                                            <th className="py-3 px-4 w-10 text-sm">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.participants.data.length > 0 &&
                                            data.participants.data
                                                .sort((a, b) => a.id - b.id)
                                                .map((participant, idx) => {
                                                    return (
                                                        <tr
                                                            key={participant.id}
                                                        >
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {idx + 1}
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    participant.name
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    participant.nim
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    participant.university
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    participant.semester
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50">
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            DetailParticipant(
                                                                                e,
                                                                                participant.id
                                                                            )
                                                                        }
                                                                        className="bg-indigo-500 px-2 py-1 rounded-lg"
                                                                    >
                                                                        <i className="bx bx-fw bx-cog text-white"></i>
                                                                    </button>
                                                                    <button className="bg-red-500 px-2 py-1 rounded-lg">
                                                                        <i className="bx bx-fw bx-trash text-white"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-1 mt-3">
                            <button className="bg-white border border-slate-200 px-2 py-1 rounded-lg">
                                <i className="bx bx-fw bx-chevrons-left"></i>
                            </button>
                            <button className="bg-white border border-slate-200 px-2 py-1 rounded-lg">
                                <i className="bx bx-fw bx-chevron-left"></i>
                            </button>
                            <button
                                onClick={(e) => {
                                    getPage(e);
                                }}
                                className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                            >
                                <i className="bx bx-fw bx-chevron-right"></i>
                            </button>
                            <button className="bg-white border border-slate-200 px-2 py-1 rounded-lg">
                                <i className="bx bx-fw bx-chevrons-right"></i>
                            </button>
                        </div>
                    </div>
                )}
                {tab === "seleksi" && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                <table className="w-full">
                                    <thead className="bg-gray-100 text-left">
                                        <tr>
                                            <th className="py-3 px-4 text-sm">
                                                Nama Lengkap
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Skor Akhir
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Peringkat
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.participants.data.length > 0 &&
                                            data.participants.data
                                                .sort(
                                                    (a, b) => b.score - a.score
                                                )
                                                .map((participant, idx) => {
                                                    return (
                                                        <tr
                                                            key={participant.id}
                                                        >
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    participant.name
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {
                                                                    participant.score
                                                                }
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                                {idx + 1}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
