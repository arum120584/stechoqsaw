import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function detailCandidate({ auth }) {
    const data = usePage().props;
    const goToAddCandidateCriteria = (e, candidateid) => {
        e.preventDefault();
        router.visit(`/candidate/addcriteria/${candidateid}`, {
            method: "get",
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {data.candidate.name}
                </h2>
            }
        >
            <Head title="Kriteria Kandidat" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-5 gap-5 mb-3">
                    <div className="col-span-1 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit w-fit">
                        <div className="p-6 w-full">
                            {data.candidate.image !== null ? (
                                <img
                                    src={`/storage/uploads/candidates/${data.candidate.image}`}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="rounded-md"
                                    src={`https://placehold.co/200x300?text=Foto Kandidat`}
                                    alt=""
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-span-4 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <div className="flex flex-row items-center gap-2 mb-3">
                                <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                                    {data.candidate.name}
                                </h2>
                                <span
                                    className="text-xs bg-slate-100 px-2 py-1 rounded-md"
                                    onClick={(e) =>
                                        goToAddCandidateCriteria(
                                            e,
                                            data.candidate.id
                                        )
                                    }
                                >
                                    {data.candidate.job.job_name}
                                </span>
                            </div>
                            <hr />
                            <div className="flex flex-col gap-1 mt-3 mb-3">
                                <p className="text-sm text-slate-400">Email</p>
                                <p>{data.candidate.email}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col gap-1 mt-3 mb-3">
                                <p className="text-sm text-slate-400">
                                    Nomor Telepon / Whatsapp
                                </p>
                                <p>{data.candidate.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
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
                                            Nilai Bobot
                                        </th>
                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.candidate.candidate_criterias.map(
                                        (criteria, idx) => {
                                            return (
                                                <tr key={criteria.id}>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {idx + 1}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {
                                                            criteria
                                                                .job_criteria
                                                                .name
                                                        }
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {criteria.weight}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50">
                                                        <div className="flex items-center gap-2">
                                                            <button className="bg-indigo-500 px-2 py-1 rounded-lg">
                                                                <i className="bx bx-fw bx-info-circle text-white"></i>
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
            </div>
        </AuthenticatedLayout>
    );
}
