import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import detailCandidate from "../DetailCandidate";

export default function Participants({ auth }) {
    const data = usePage().props;

    const biodata = (e, id) => {
        e.preventDefault();
        router.visit(`/participant/biodata/${id}`, {
            method: "get",
        });
    };

    const deleteParticipant = (e, id) => {
        e.preventDefault();
        router.visit(`/participant/delete/${id}`, {
            method: "delete",
        });
    };

    const firstPage = (e) => {
        e.preventDefault();
        router.visit(`${data.participants.first_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };

    const prevPage = (e) => {
        e.preventDefault();
        router.visit(`${data.participants.prev_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };

    const nextPage = (e) => {
        e.preventDefault();
        router.visit(`${data.participants.next_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };

    const lastPage = (e) => {
        e.preventDefault();
        router.visit(`${data.participants.last_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kandidat
                </h2>
            }
        >
            <Head title="Kandidat" />

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
                                            Nama Lengkap
                                        </th>

                                        <th className="py-3 px-4 text-sm">
                                            Universitas
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Posisi
                                        </th>

                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.participants.data.length > 0 &&
                                        data.participants.data.map(
                                            (participant, idx) => {
                                                return (
                                                    <tr key={participant.id}>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {idx + 1}
                                                        </td>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {participant.name}
                                                        </td>

                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {
                                                                participant.university
                                                            }
                                                        </td>
                                                        <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                            {
                                                                participant
                                                                    .selection
                                                                    .job
                                                                    .job_name
                                                            }
                                                        </td>

                                                        <td className="py-3 px-4 border-b-2 border-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <i
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        biodata(
                                                                            e,
                                                                            participant.id
                                                                        )
                                                                    }
                                                                    className="bx bx-fw bx-info-circle text-blue-900"
                                                                ></i>

                                                                <i
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        confirm(
                                                                            "Apakah yakin ingin menghapus?"
                                                                        ) &&
                                                                        deleteParticipant(
                                                                            e,
                                                                            participant.id
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
                    <div className="flex justify-end items-center gap-1 mt-3">
                        {data.participants.first_page_url !== null && (
                            <button
                                onClick={(e) => firstPage(e)}
                                className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                            >
                                <i className="bx bx-fw bx-chevrons-left"></i>
                            </button>
                        )}
                        {data.participants.prev_page_url !== null && (
                            <button
                                onClick={(e) => prevPage(e)}
                                className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                            >
                                <i className="bx bx-fw bx-chevron-left"></i>
                            </button>
                        )}
                        {data.participants.next_page_url !== null && (
                            <button
                                onClick={(e) => {
                                    nextPage(e);
                                }}
                                className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                            >
                                <i className="bx bx-fw bx-chevron-right"></i>
                            </button>
                        )}
                        {data.participants.last_page_url !== null && (
                            <button
                                onClick={(e) => lastPage(e)}
                                className="bg-white border border-slate-200 px-2 py-1 rounded-lg"
                            >
                                <i className="bx bx-fw bx-chevrons-right"></i>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
