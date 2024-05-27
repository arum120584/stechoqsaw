import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function AddCriteria({ auth }) {
    const data = usePage().props;

    const [name, setName] = useState("");
    const [type, setType] = useState("BENEFIT");
    const [weight, setWeight] = useState("");

    const [modalCrisp, setModalCrisp] = useState(false);
    const [detailCrisp, setDetailCrisp] = useState(null);
    const [dataCrisps, setDataCrisps] = useState([]);

    const [title, setTitle] = useState("");
    const [weightCrisp, setWeightCrisp] = useState(0);
    // const [description, setDescription] = useState("");

    const addCriteria = (e) => {
        e.preventDefault();
        router.visit(`/selectioncriteria/add`, {
            method: "post",
            data: {
                name: name,
                type: type,
                weight: weight,
                // description: description,
                selection_id: data.selection_id,
                crisp: dataCrisps,
            },
        });
    };

    const addCrisp = (title, weight) => {
        const newCrisp = {
            title: title,
            weight: weight,
        };
        setDataCrisps([...dataCrisps, newCrisp]);
        setModalCrisp(false);
        setTitle("");
        setWeightCrisp(0);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Kriteria Baru
                </h2>
            }
        >
            <Head title={"Tambah Kriteria Baru"} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12 gap-4">
                    <div className="col-span-8 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-xl font-bold mb-3">
                                Tambah Data Baru
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
                                        placeholder="Masukan "
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
                                        defaultValue={"BENEFIT"}
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
                                        defaultValue={0}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih bobot
                                        </option>
                                        <option value={5}>
                                            {type === "BENEFIT"
                                                ? "SANGAT PENTING"
                                                : "TIDAK PENTING"}{" "}
                                            (5)
                                        </option>
                                        <option value={4}>
                                            {type === "BENEFIT"
                                                ? "PENTING"
                                                : "KURANG PENTING"}{" "}
                                            (4)
                                        </option>
                                        <option value={3}>
                                            {type === "BENEFIT"
                                                ? "CUKUP PENTING"
                                                : "CUKUP PENTING"}{" "}
                                            (3)
                                        </option>
                                        <option value={2}>
                                            {type === "BENEFIT"
                                                ? "KURANG PENTING"
                                                : "PENTING"}{" "}
                                            (2)
                                        </option>
                                        <option value={1}>
                                            {type === "BENEFIT"
                                                ? "SANGAT TIDAK PENTING"
                                                : " SANGAT PENTING"}{" "}
                                            (1)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="w-1/2 mt-3">
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
                            </div> */}

                            <div className="flex flex-row mt-5 gap-2">
                                <button
                                    onClick={() => window.history.back()}
                                    className="bg-slate-300 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-sm">Batal</p>
                                </button>
                                <button
                                    onClick={(e) => addCriteria(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">Simpan</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <p className="text-xl font-bold">
                                    Sub Kriteria
                                </p>
                                <PrimaryButton
                                    onClick={() => setModalCrisp(true)}
                                >
                                    Tambah
                                </PrimaryButton>
                            </div>
                            <hr />
                            {dataCrisps.length > 0
                                ? dataCrisps.map((crisp, idx) => {
                                      return (
                                          <div
                                              key={idx}
                                              className="mt-3 border border-1 rounded-md p-4"
                                          >
                                              <div className="flex flex-row justify-between items-center ">
                                                  <p className="text-md">
                                                      {crisp.title} (
                                                      {crisp.weight})
                                                  </p>
                                                  <div className="flex flex-row items-center gap-0">
                                                      <i
                                                          className="bx bx-fw bx-trash text-rose-500"
                                                          onClick={(e) =>
                                                              setDataCrisps(
                                                                  dataCrisps.filter(
                                                                      (
                                                                          item,
                                                                          dx
                                                                      ) =>
                                                                          dx !==
                                                                          idx
                                                                  )
                                                              )
                                                          }
                                                      ></i>
                                                  </div>
                                              </div>
                                          </div>
                                      );
                                  })
                                : "Tidak ada crisps"}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={modalCrisp}
                maxWidth="md"
                onClose={() => setModalCrisp(false)}
            >
                <div className="p-5">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg font-bold">
                            Tambah Sub Kriteria Baru
                        </p>
                        <i
                            className="bx bx-fw bx-x"
                            onClick={() => setModalCrisp(false)}
                        ></i>
                    </div>
                    <hr className="my-3" />
                    <div className="flex flex-col gap-3">
                        <div className=" mt-3">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm">Judul</label>
                                <input
                                    className="rounded-lg border border-gray-300"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    placeholder="Contoh: Sangat lengkap"
                                />
                            </div>
                        </div>
                        <div className=" mt-3">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm">Nilai</label>
                                <select
                                    defaultValue={0}
                                    value={weightCrisp}
                                    onChange={(e) =>
                                        setWeightCrisp(e.target.value)
                                    }
                                    className="rounded-lg border border-gray-300"
                                >
                                    <option disabled value={0}>
                                        Pilih bobot
                                    </option>
                                    <option value={5}>5</option>
                                    <option value={4}>4</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                    <option value={1}>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <PrimaryButton
                                onClick={() => setModalCrisp(false)}
                                className=" bg-slate-500 hover:bg-slate-400"
                            >
                                Batal
                            </PrimaryButton>
                            <PrimaryButton
                                onClick={() => addCrisp(title, weightCrisp)}
                            >
                                Simpan
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
