import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Users({ auth }) {
    const data = usePage().props;

    const formAdd = (e) => {
        e.preventDefault();
        router.visit(`/user/form/add`, {
            method: "get",
        });
    };

    const detailUser = (e, id) => {
        e.preventDefault();
        router.visit(`/user/form/detail/${id}`, {
            method: "get",
        });
    };

    const deleteUser = (e, id) => {
        e.preventDefault();
        router.visit(`/user/delete/${id}`, {
            method: "delete",
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pengguna
                </h2>
            }
        >
            <Head title="Pengguna" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <div className="flex flex-row justify-end mb-5">
                                <button
                                    onClick={(e) => formAdd(e)}
                                    className="bg-blue-900 px-4 py-1 rounded-lg"
                                >
                                    <p className="text-white text-sm">
                                        Tambah Pengguna
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
                                            Nama Pengguna
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Email
                                        </th>

                                        <th className="py-3 px-4 text-sm">
                                            Role
                                        </th>
                                        <th className="py-3 px-4 w-10 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.users.length > 0 &&
                                        data.users.map((user, idx) => {
                                            return (
                                                <tr key={user.id}>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {idx + 1}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {user.name}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {user.email}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                        {user.role}
                                                    </td>
                                                    <td className="py-3 px-4 border-b-2 border-gray-50">
                                                        <div className="flex items-center gap-2">
                                                            <i
                                                                onClick={(e) =>
                                                                    detailUser(
                                                                        e,
                                                                        user.id
                                                                    )
                                                                }
                                                                className="bx bx-fw bx-info-circle text-blue-900"
                                                            ></i>

                                                            <i
                                                                onClick={(e) =>
                                                                    deleteUser(
                                                                        e,
                                                                        user.id
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
