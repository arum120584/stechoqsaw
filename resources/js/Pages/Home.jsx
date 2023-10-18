import { Head, usePage } from "@inertiajs/react";
import React from "react";

export default function Home() {
    const data = usePage().props;
    return (
        <div className="bg-slate-100 min-h-screen">
            <Head title="Lowongan Pekerjaan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 gap-3">
                    <div className="p-8 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit w-full">
                        <p className="text-xl font-bold mb-4">
                            Lowongan Pekerjaan
                        </p>
                        <div className="grid grid-cols-12 gap-4">
                            {data.jobs.map((job) => {
                                return (
                                    <div
                                        key={job.id}
                                        className="rounded-lg col-span-3 card bg-white border border-slate-200"
                                    >
                                        <img
                                            width={"100%"}
                                            src={`/storage/uploads/jobs/1695865336_acb55fb00d7c5c58fce4612811fa670e.jpeg`}
                                            alt=""
                                        />
                                        <div className="px-6 py-2">
                                            <div className="flex flex-row items-center gap-2 mb-3">
                                                <h2 className="font-semibold text-lg text-gray-800 leading-tight">
                                                    {job.job_name}
                                                </h2>
                                                <span className="text-xs bg-slate-100 px-2 py-1 rounded-md">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <p>{job.created_at}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
