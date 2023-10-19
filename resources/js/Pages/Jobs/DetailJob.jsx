import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";

export default function DetailJob({ auth }) {
    const data = usePage().props;
    const detailSelection = (e, id) => {
        e.preventDefault();
        router.visit(`/selection/detail/${id}`, {
            method: "get",
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Detail Pekerjaan - {data.job.job_name}
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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12 gap-4 mb-10">
                    {data.job.selections.map((selection) => {
                        return (
                            <div
                                onClick={(e) => {
                                    detailSelection(e, selection.id);
                                }}
                                key={selection.id}
                                className={`rounded-lg col-span-3 card ${
                                    selection.status === "BERLANGSUNG"
                                        ? "bg-emerald-100"
                                        : "bg-white"
                                } border border-slate-200`}
                            >
                                <div className="p-6">
                                    <div className="flex flex-col gap-1">
                                        <p
                                            className={`text-sm ${
                                                selection.status ===
                                                    "BERLANGSUNG" &&
                                                "text-emerald-500"
                                            }`}
                                        >
                                            Seleksi {selection.name}
                                        </p>
                                        <div className="flex flex-row justify-between items-center">
                                            <p
                                                className={`font-semibold text-xl ${
                                                    selection.status ===
                                                        "BERLANGSUNG" &&
                                                    "text-emerald-500"
                                                } leading-tight`}
                                            >
                                                {selection.participants.length}
                                            </p>
                                            <i
                                                className={`bx bx-fw bx-right-arrow-circle ${
                                                    selection.status ===
                                                        "BERLANGSUNG" &&
                                                    "text-emerald-500"
                                                }`}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
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
            </div>
        </AuthenticatedLayout>
    );
}
