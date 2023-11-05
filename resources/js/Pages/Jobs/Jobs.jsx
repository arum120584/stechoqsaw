import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Jobs({ auth }) {
    const data = usePage().props;

    const getJob = (id) => {
        router.visit(`/job/detail/${id}`, {
            method: "get",
        });
    };

    const formAddJob = (e) => {
        e.preventDefault();
        router.visit(`/job/form/add`, {
            method: "get",
        });
    };

    const formEditJob = (e, id) => {
        e.preventDefault();
        router.visit(`/job/form/edit/${id}`, {
            method: "get",
        });
    };

    const deleteJob = (e, id) => {
        e.preventDefault();
        router.visit(`/job/delete/${id}`, {
            method: "delete",
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
            <Head title="Pekerjaan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <div className="flex flex-row justify-end mb-5">
                                <button
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                    onClick={(e) => formAddJob(e)}
                                >
                                    <p className="text-white text-sm">
                                        Tambah Baru
                                    </p>
                                </button>
                            </div>
                            <table className="w-full">
                                <thead className="bg-gray-100 text-left">
                                    <tr>
                                        <th className="py-3 px-4 w-4 text-sm">
                                            No
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Nama Pekerjaan
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Tipe
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Gambar
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Batas Pendaftaran
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Status
                                        </th>
                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.jobs.map((job, idx) => {
                                        return (
                                            <tr key={job.id}>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {idx + 1}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.job_name}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.type}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.image !== null ? (
                                                        <img
                                                            className="rounded-lg"
                                                            width={"50px"}
                                                            src={`/storage/uploads/jobs/${job.image}`}
                                                            alt=""
                                                        />
                                                    ) : (
                                                        <img
                                                            className="rounded-lg"
                                                            width={"50px"}
                                                            src={`https://placehold.co/600x700?text=GAMBAR`}
                                                            alt=""
                                                        />
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.due_date}
                                                </td>
                                                <td
                                                    className={`py-3 px-4 border-b-2 border-gray-50 text-sm font-bold ${
                                                        job.status !== null &&
                                                        job.status === "BUKA"
                                                            ? "text-emerald-500"
                                                            : job.status ===
                                                              "TUTUP"
                                                            ? "text-rose-500"
                                                            : "text-slate-400"
                                                    }`}
                                                >
                                                    {job.status}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50">
                                                    <div className="flex items-center gap-2">
                                                        <i
                                                            onClick={() =>
                                                                getJob(job.id)
                                                            }
                                                            className="bx bx-fw bx-info-circle text-blue-900"
                                                        ></i>
                                                        <i
                                                            onClick={(e) =>
                                                                formEditJob(
                                                                    e,
                                                                    job.id
                                                                )
                                                            }
                                                            className="bx bx-fw bx-edit-alt text-amber-500"
                                                        ></i>
                                                        <i
                                                            onClick={(e) =>
                                                                confirm(
                                                                    "Apakah yakin ingin menghapus?"
                                                                ) &&
                                                                deleteJob(
                                                                    e,
                                                                    job.id
                                                                )
                                                            }
                                                            className="bx bx-fw bx-trash text-rose-500"
                                                        ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
