import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function AddCandidateCriteria({ auth }) {
    const data = usePage().props;
    const [weight, setWeight] = useState([]);
    const [candValue, setCandValue] = useState([]);

    const handleWeight = (index, value) => {
        const newWeights = [...weight];
        newWeights[index] = value;
        setWeight(newWeights);
    };

    const handleValue = (index, value) => {
        const newValue = [...candValue];
        newValue[index] = value;
        setCandValue(newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.visit("/candidate/newcriteria", {
            method: "post",
            data: {
                candidate_id: 1,
                job_criteria_id: data.jobcriterias,
                weight: weight,
                value: candValue,
            },
        });
    };

    console.log(data.user_id);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Kriteria Kandidat
                </h2>
            }
        >
            <Head title="Kriteria Kandidat" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="flex flex-col gap-2 p-10">
                            {data.jobcriterias.map((jobcriteria, idx) => {
                                return (
                                    <div
                                        key={jobcriteria}
                                        className="flex flex-col gap-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="inputweight">
                                                <label className="text-sm">
                                                    Bobot
                                                </label>
                                                <input
                                                    className="rounded-lg border border-gray-300"
                                                    type="text"
                                                    placeholder="Contoh: Skill Desain"
                                                    value={weight[idx] || ""}
                                                    onChange={(e) =>
                                                        handleWeight(
                                                            idx,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="inputvalue">
                                                <label className="text-sm">
                                                    Nilai
                                                </label>
                                                <input
                                                    className="rounded-lg border border-gray-300"
                                                    type="text"
                                                    placeholder="Contoh: Skill Desain"
                                                    value={candValue[idx] || ""}
                                                    onChange={(e) =>
                                                        handleValue(
                                                            idx,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="flex flex-row justify-end">
                                <button
                                    onClick={(e) => {
                                        handleSubmit(e);
                                    }}
                                    className="bg-indigo-500 px-4 py-1 rounded-lg"
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
