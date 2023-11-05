import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function AddSelection({ auth }) {
    const data = usePage().props;

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [jobId, setJobId] = useState("");

    const addSelection = (e) => {
        e.preventDefault();
        router.visit(`/selection/add`, {
            method: "post",
            data: {
                name: name,
                status: status,
                job_id: jobId,
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Pengguna
                </h2>
            }
        >
            <Head title="Tambah Baru" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-xl font-bold mb-3">
                                Tambah Baru
                            </p>
                            <hr />
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Nama Tahap Seleksi
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Contoh: Pemberkasan"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Status</label>
                                    <select
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                        defaultValue={0}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih status
                                        </option>
                                        <option value={"BERLANGSUNG"}>
                                            BERLANGSUNG
                                        </option>
                                        <option value={"AKAN DATANG"}>
                                            AKAN DATANG
                                        </option>
                                        <option value={"BERAKHIR"}>
                                            BERAKHIR
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Pekerjaan</label>
                                    <select
                                        onChange={(e) =>
                                            setJobId(e.target.value)
                                        }
                                        defaultValue={0}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih pekerjaan
                                        </option>
                                        {data.jobs.length > 0 &&
                                            data.jobs.map((job) => {
                                                return (
                                                    <option
                                                        key={job.id}
                                                        value={job.id}
                                                    >
                                                        {job.job_name}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 gap-2">
                                <button className="bg-slate-300 px-4 py-1 rounded-lg">
                                    <p className="text-sm">Batal</p>
                                </button>
                                <button
                                    onClick={(e) => addSelection(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">Simpan</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
