import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function AddSelection({ auth }) {
    const data = usePage().props;

    const [name, setName] = useState(data.criteria.name);
    const [type, setType] = useState(data.criteria.type);
    const [weight, setWeight] = useState(data.criteria.weight);
    const [description, setDescription] = useState(data.criteria.description);
    const [selectionId, setSelectionId] = useState(data.criteria.selection_id);

    const updateCriteria = (e) => {
        e.preventDefault();
        router.visit(`/selectioncriteria/update/${data.criteria.id}`, {
            method: "put",
            data: {
                name: name,
                type: type,
                weight: weight,
                description: description,
                selection_id: selectionId,
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {data.criteria.name}
                </h2>
            }
        >
            <Head title={data.criteria.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-xl font-bold mb-3">
                                Detail {data.criteria.name}
                            </p>
                            <hr />
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Nama Kriteria
                                    </label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Contoh: Pemberkasan"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Tipe</label>
                                    <select
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                        value={type}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih tipe
                                        </option>
                                        <option value={"COST"}>COST</option>
                                        <option value={"BENEFIT"}>
                                            BENEFIT
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Bobot</label>
                                    <select
                                        onChange={(e) =>
                                            setWeight(e.target.value)
                                        }
                                        value={weight}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih bobot
                                        </option>
                                        <option value={5}>
                                            SANGAT PENTING (5)
                                        </option>
                                        <option value={4}>
                                            CUKUP PENTING (4)
                                        </option>
                                        <option value={3}>PENTING (3)</option>
                                        <option value={2}>
                                            TIDAK PENTING (2)
                                        </option>
                                        <option value={1}>
                                            SANGAT TIDAK PENTING (1)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Deskripsi</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className="rounded-lg border border-gray-300"
                                        placeholder="Tuliskan deskripsi mengenai kriteria ini"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">
                                        Tahapan Seleksi
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setSelectionId(e.target.value)
                                        }
                                        value={selectionId}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih Seleksi
                                        </option>
                                        {data.criteria.selection.job.selections
                                            .length > 0 &&
                                            data.criteria.selection.job.selections.map(
                                                (selection) => {
                                                    return (
                                                        <option
                                                            key={selection.id}
                                                            value={selection.id}
                                                        >
                                                            {selection.name}
                                                        </option>
                                                    );
                                                }
                                            )}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 gap-2">
                                <button
                                    onClick={() => window.history.back()}
                                    className="bg-slate-300 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-sm">Batal</p>
                                </button>
                                <button
                                    onClick={(e) => updateCriteria(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
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
