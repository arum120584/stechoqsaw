import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Jobs({ auth }) {
    const data = usePage().props;
    const [jobs, setJobs] = useState(data.jobs);
    const [jobName, setJobName] = useState("");
    const [description, setDescription] = useState("");
    const [jobType, setJobType] = useState("");
    const [photoJob, setPhotoJob] = useState({});
    const [division, setDivision] = useState("");
    const [dueDate, setDueDate] = useState("");

    const addJob = (e) => {
        e.preventDefault();
        router.visit("/job/add", {
            method: "post",
            data: {
                job_name: jobName,
                description: description,
                type: jobType,
                image: photoJob,
                division: division,
                due_date: dueDate,
            },
            forceFormData: true,
        });
    };

    const getJob = (id) => {
        router.visit(`/job/detail/${id}`, {
            method: "get",
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pekerjaan
                </h2>
            }
        >
            <Head title="Jobs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 gap-3 grid grid-cols-3">
                    <div className="col-span-2 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <table className="w-full">
                                <thead className="bg-gray-100 text-left">
                                    <tr>
                                        <th className="py-3 px-4 w-4 text-sm">
                                            No
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Nama Pekerjaan
                                        </th>
                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, idx) => {
                                        return (
                                            <tr key={job.id}>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {idx + 1}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.job_name}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() =>
                                                                getJob(job.id)
                                                            }
                                                            className="bg-indigo-500 px-4 py-1 rounded-lg"
                                                        >
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
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-span-1 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-md font-bold mb-5">
                                👋🏻 Kita bisa tambah pekerjaan baru disini
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
                                    <label className="text-sm">Deskripsi</label>
                                    <textarea
                                        required
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className="rounded-lg border border-gray-300"
                                        placeholder="Tuliskan deskripsi mengenai pekerjaan ini"
                                    ></textarea>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Tipe Pekerjaan
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setJobType(e.target.value)
                                        }
                                        defaultValue={0}
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
                                        Foto/Poster Lowongan
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setPhotoJob(e.target.files[0])
                                        }
                                        className="rounded-lg border border-gray-300"
                                        type="file"
                                        value={photoJob.File}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Divisi Terkait
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setDivision(e.target.value)
                                        }
                                        defaultValue={0}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih divisi
                                        </option>
                                        <option value={"MARKETING"}>
                                            MARKETING
                                        </option>
                                        <option value={"FINANCE"}>
                                            FINANCE
                                        </option>
                                        <option value={"PROGRAMMER"}>
                                            PROGRAMMER
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
                            </div>
                            <div className="flex flex-row justify-end">
                                <button
                                    className="bg-indigo-500 px-4 py-1 rounded-lg"
                                    onClick={(e) => addJob(e)}
                                >
                                    <p className="text-white text-sm">Submit</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
