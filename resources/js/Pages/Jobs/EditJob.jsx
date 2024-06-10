import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function EditJob({ auth }) {
    const data = usePage().props;
    const [jobName, setJobName] = useState(data.job.job_name);
    const [jobType, setJobType] = useState(data.job.type);
    const [dueDate, setDueDate] = useState(data.job.due_date);
    const [status, setStatus] = useState(data.job.status);

    const updateJob = (e) => {
        e.preventDefault();
        router.visit(`/job/update/${data.job.id}`, {
            method: "post",
            data: {
                job_name: jobName,
                type: jobType,
                due_date: dueDate,
                status: status,
            },
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit {data.job.name}
                </h2>
            }
        >
            <Head title="Edit Pekerjaan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-md font-bold mb-5">
                                Edit Pekerjaan
                            </p>

                            <div className="flex flex-col mb-4 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Nama Pekerjaan
                                    </label>
                                    <input
                                        required
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        value={jobName}
                                        onChange={(e) =>
                                            setJobName(e.target.value)
                                        }
                                        placeholder="Contoh: Frontend Developer"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Tipe Pekerjaan
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setJobType(e.target.value)
                                        }
                                        value={jobType}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih tipe pekerjaan
                                        </option>
                                        <option value={"FULLTIME"}>
                                            PENUH WAKTU (FULLTIME)
                                        </option>
                                        <option value={"MAGANG MSIB"}>
                                            MAGANG (MSIB)
                                        </option>
                                        <option value={"STUDI INDEPENDEN MSIB"}>
                                            STUDI INDEPENDEN (MSIB)
                                        </option>
                                        <option value={"MAGANG REGULAR"}>
                                            MAGANG (REGULAR)
                                        </option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Batas Akhir
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setDueDate(e.target.value)
                                        }
                                        className="rounded-lg border border-gray-300"
                                        type="date"
                                        value={dueDate}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Status</label>
                                    <select
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                        value={status !== null ? status : 0}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih status
                                        </option>
                                        <option value={"BUKA"}>BUKA</option>
                                        <option value={"TUTUP"}>TUTUP</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end">
                                <button
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                    onClick={(e) => updateJob(e)}
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
