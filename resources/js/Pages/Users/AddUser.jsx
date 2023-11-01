import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function AddUser({ auth }) {
    const data = usePage().props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const addUser = (e) => {
        e.preventDefault();
        router.visit(`/user/add`, {
            method: "post",
            data: {
                name: name,
                email: email,
                password: password,
                role: role,
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Pengguna
                </h2>
            }
        >
            <Head title="Tambah Baru" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <p className="text-xl font-bold mb-3">
                                Tambah Baru
                            </p>
                            <hr />
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Nama</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="text"
                                        placeholder="Masukkan nama lengkap"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Email</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="email"
                                        placeholder="Contoh: john@gmail.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Password</label>
                                    <input
                                        className="rounded-lg border border-gray-300"
                                        type="password"
                                        placeholder="Placeholder"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Role</label>
                                    <select
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                        defaultValue={0}
                                        className="rounded-lg border border-gray-300"
                                    >
                                        <option disabled value={0}>
                                            Pilih role
                                        </option>
                                        <option value={"ADMIN"}>ADMIN</option>
                                        <option value={"STAFF"}>STAFF</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 gap-2">
                                <button className="bg-slate-300 px-4 py-1 rounded-lg">
                                    <p className="text-sm">Batal</p>
                                </button>
                                <button
                                    onClick={(e) => addUser(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">Simpan</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
