import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Selections({ auth }) {
    const data = usePage().props;

    const detail = (e, id) => {
        e.preventDefault();
        router.visit(`/selectioncriteria/detail/${id}`, {
            method: "get",
        });
    };

    const deleteCriteria = (e, id) => {
        e.preventDefault();
        router.visit(`/selectioncriteria/delete/${id}`, {
            method: "delete",
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kriteria Seleksi
                </h2>
            }
        >
            <Head title="Kriteria Seleksi" />

            <div className="py-12">
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
                                            Nama Kriteria
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Tipe
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Bobot
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Seleksi
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Pekerjaan
                                        </th>
                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.criterias.length > 0 &&
                                        data.criterias.map((criteria, idx) => {
                                            return (
                                                <tr key={criteria.id}>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {idx + 1}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {criteria.name}
                                                    </td>

                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {criteria.type}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {criteria.weight === 5
                                                            ? "SANGAT PENTING (5)"
                                                            : criteria.weight ===
                                                              4
                                                            ? "CUKUP PENTING (4)"
                                                            : criteria.weight ===
                                                              3
                                                            ? "PENTING (3)"
                                                            : criteria.weight ===
                                                              2
                                                            ? "TIDAK PENTING (2)"
                                                            : "SANGAT TIDAK PENTING (1)"}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {
                                                            criteria.selection
                                                                .name
                                                        }
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {
                                                            criteria.selection
                                                                .job.job_name
                                                        }
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50">
                                                        <div className="flex items-center gap-2">
                                                            <i
                                                                onClick={(e) =>
                                                                    detail(
                                                                        e,
                                                                        criteria.id
                                                                    )
                                                                }
                                                                className="bx bx-fw bx-info-circle text-blue-900"
                                                            ></i>
                                                            <i
                                                                onClick={(e) =>
                                                                    confirm(
                                                                        "Apakah yakin ingin menghapus?"
                                                                    ) &&
                                                                    deleteCriteria(
                                                                        e,
                                                                        criteria.id
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
