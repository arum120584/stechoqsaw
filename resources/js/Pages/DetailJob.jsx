import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function DetailJob({ auth }) {
    const data = usePage().props;
    const [tab, setTab] = useState("ringkasan");
    const [criteriaName, setCriteriaName] = useState("");
    const [criteriaType, setCriteriaType] = useState("");
    const [criteriaWeight, setCriteriaWeight] = useState("");
    const [criteriaDescription, setCriteriaDescription] = useState("");

    const addCriteria = (e) => {
        e.preventDefault();
        router.visit("/criteria/add", {
            method: "post",
            data: {
                name: criteriaName,
                type: criteriaType,
                weight: criteriaWeight,
                description: criteriaDescription,
                job_id: data.job.id,
            },
        });
        setTab("kriteria");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Detail hahaha - {data.job.job_name}
                    </h2>
                    <p className="text-sm text-slate-400">
                        <Link className="text-indigo-500" href="/jobs">
                            Pekerjaan
                        </Link>{" "}
                        / Detail
                    </p>
                </div>
            }
        >
            <Head title="Jobs" />

            <div className="py-12">
                {/* TAB ACTION */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div className="flex flex-row items-center gap-2">
                        <button
                            onClick={() => setTab("ringkasan")}
                            className={`${
                                tab === "ringkasan"
                                    ? "bg-indigo-500"
                                    : "border border-indigo-500"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "ringkasan"
                                        ? "text-white"
                                        : "text-indigo-500"
                                } text-sm`}
                            >
                                Ringkasan
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
                        <button
                            className={`${
                                tab === "pelamar"
                                    ? "bg-indigo-500"
                                    : "border border-indigo-500"
                            } px-4 py-1 rounded-lg`}
                        >
                            <p
                                className={`${
                                    tab === "pelamar"
                                        ? "text-white"
                                        : "text-indigo-500"
                                } text-sm`}
                            >
                                Pelamar
                            </p>
                        </button>
                    </div>
                </div>
                {/* END TAB ACTION */}

                {tab === "ringkasan" && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 gap-3 grid grid-cols-3">
                        <div className="col-span-1 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                {data.job.image !== null && (
                                    <img
                                        src={`/storage/uploads/jobs/${data.job.image}`}
                                        alt=""
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-span-2 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                <div className="flex flex-row items-center gap-2 mb-3">
                                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                                        {data.job.job_name}
                                    </h2>
                                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-md">
                                        {data.job.type}
                                    </span>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-1 mt-3 mb-3">
                                    <p className="text-sm text-slate-400">
                                        Deskripsi Pekerjaan
                                    </p>
                                    <p>{data.job.description}</p>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-1 mt-3 mb-3">
                                    <p className="text-sm text-slate-400">
                                        Batas Akhir Pelamaran
                                    </p>
                                    <p>{data.job.due_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "kriteria" && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 gap-3 grid grid-cols-4">
                        <div className="col-span-3 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                <table className="w-full">
                                    <thead className="bg-gray-100 text-left">
                                        <tr>
                                            <th className="py-3 px-4 w-4 text-sm">
                                                No
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Nama Kriteria
                                            </th>
                                            <th className="py-3 px-4 text-sm">
                                                Bobot
                                            </th>
                                            <th className="py-3 px-4 w-10 text-sm">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.job.job_criterias.length > 0 &&
                                            data.job.job_criterias.map(
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
                                                                {criteria.weight ===
                                                                5
                                                                    ? `SANGAT WAJIB (${criteria.weight})`
                                                                    : criteria.weight ===
                                                                      4
                                                                    ? `CUKUP WAJIB (${criteria.weight})`
                                                                    : criteria.weight ===
                                                                      3
                                                                    ? `WAJIB (${criteria.weight})`
                                                                    : criteria.weight ===
                                                                      2
                                                                    ? `TIDAK WAJIB (${criteria.weight})`
                                                                    : `SANGAT TIDAK WAJIB (${criteria.weight})`}
                                                            </td>
                                                            <td className="py-3 px-4 border-b-2 border-gray-50">
                                                                <div className="flex items-center gap-2">
                                                                    <button className="bg-indigo-500 px-4 py-1 rounded-lg">
                                                                        <p className="text-white text-sm">
                                                                            Detail
                                                                        </p>
                                                                    </button>
                                                                    <button className="bg-orange-500 px-4 py-1 rounded-lg">
                                                                        <p className="text-white text-sm">
                                                                            Edit
                                                                        </p>
                                                                    </button>
                                                                    <button className="bg-red-500 px-4 py-1 rounded-lg">
                                                                        <p className="text-white text-sm">
                                                                            Hapus
                                                                        </p>
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
                        <div className="col-span-1 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                            <div className="p-6 w-full">
                                <p className="text-md font-bold mb-5">
                                    Tambah Kriteria Baru
                                </p>
                                <div className="flex flex-col mb-4 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">
                                            Nama Kriteria
                                        </label>
                                        <input
                                            required
                                            onChange={(e) =>
                                                setCriteriaName(e.target.value)
                                            }
                                            value={criteriaName}
                                            className="rounded-lg border border-gray-300"
                                            type="text"
                                            placeholder="Contoh: Skill Desain"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">Tipe</label>
                                        <select
                                            onChange={(e) =>
                                                setCriteriaType(e.target.value)
                                            }
                                            defaultValue={0}
                                            className="rounded-lg border border-gray-300"
                                        >
                                            <option disabled value={0}>
                                                Pilih tipe
                                            </option>
                                            <option value={"COST"}>COST</option>
                                            <option value={"BENEFIT"}>
                                                BENEFIT
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">
                                            Nilai Bobot
                                        </label>
                                        <select
                                            onChange={(e) =>
                                                setCriteriaWeight(
                                                    e.target.value
                                                )
                                            }
                                            defaultValue={0}
                                            className="rounded-lg border border-gray-300"
                                        >
                                            <option disabled value={0}>
                                                Pilih bobot
                                            </option>
                                            <option value={5}>
                                                SANGAT WAJIB
                                            </option>
                                            <option value={4}>
                                                CUKUP WAJIB
                                            </option>
                                            <option value={3}>WAJIB</option>
                                            <option value={2}>
                                                TIDAK WAJIB
                                            </option>
                                            <option value={1}>
                                                SANGAT TIDAK WAJIB
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">
                                            Deskripsi
                                        </label>
                                        <textarea
                                            onChange={(e) =>
                                                setCriteriaDescription(
                                                    e.target.value
                                                )
                                            }
                                            value={criteriaDescription}
                                            className="rounded-lg border border-gray-300"
                                            placeholder="Tuliskan deskripsi mengenai kriteria ini"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-end">
                                    <button
                                        onClick={(e) => addCriteria(e)}
                                        className="bg-indigo-500 px-4 py-1 rounded-lg"
                                    >
                                        <p className="text-white text-sm">
                                            Submit
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
