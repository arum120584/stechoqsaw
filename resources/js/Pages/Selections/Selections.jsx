import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Selections({ auth }) {
    const data = usePage().props;

    const detailSelection = (e, id) => {
        e.preventDefault();
        router.visit(`/selection/detail/${id}`, {
            method: "get",
        });
    };

    const formAdd = (e) => {
        e.preventDefault();
        router.visit(`/selection/form/add`, {
            method: "get",
        });
    };

    const formEdit = (e, id) => {
        e.preventDefault();
        router.visit(`/selection/form/edit/${id}`, {
            method: "get",
        });
    };

    const deleteSelection = (e, id) => {
        e.preventDefault();
        router.visit(`/selection/delete/${id}`, {
            method: "delete",
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tahap Penyeleksian
                </h2>
            }
        >
            <Head title="Tahap Seleksi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <div className="flex flex-row justify-end mb-5">
                                <button
                                    onClick={(e) => formAdd(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
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
                                            Nama Tahapan
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Pekerjaan
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Status
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Kriteria
                                        </th>
                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.selections.length > 0 &&
                                        data.selections.map(
                                            (selection, idx) => {
                                                return (
                                                    <tr key={selection.id}>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {idx + 1}
                                                        </td>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {selection.name}
                                                        </td>

                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {
                                                                selection.job
                                                                    .job_name
                                                            }
                                                        </td>
                                                        <td
                                                            className={`py-3 px-4 border-b-2 border-gray-50 text-sm font-bold ${
                                                                selection.status !==
                                                                    null &&
                                                                selection.status ===
                                                                    "BERLANGSUNG"
                                                                    ? "text-emerald-500"
                                                                    : selection.status ===
                                                                      "BERAKHIR"
                                                                    ? "text-rose-500"
                                                                    : "text-slate-400"
                                                            }`}
                                                        >
                                                            {selection.status}
                                                        </td>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {
                                                                selection
                                                                    .selection_criterias
                                                                    .length
                                                            }
                                                        </td>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <i
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        detailSelection(
                                                                            e,
                                                                            selection.id
                                                                        )
                                                                    }
                                                                    className="bx bx-fw bx-info-circle text-blue-900"
                                                                ></i>
                                                                <i
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        formEdit(
                                                                            e,
                                                                            selection.id
                                                                        )
                                                                    }
                                                                    className="bx bx-fw bx-edit-alt text-amber-500"
                                                                ></i>
                                                                <i
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        confirm(
                                                                            "Apakah yakin ingin menghapus?"
                                                                        ) &&
                                                                        deleteSelection(
                                                                            e,
                                                                            selection.id
                                                                        )
                                                                    }
                                                                    className="bx bx-fw bx-trash text-rose-500"
                                                                ></i>
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
            </div>
        </AuthenticatedLayout>
    );
}
