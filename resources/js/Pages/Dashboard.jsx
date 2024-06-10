import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Utils/Data";
import { BarChart } from "@/Components/BarChart";

Chart.register(CategoryScale);

export default function Dashboard({ auth }) {
    const propsData = usePage().props.statistics;
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.batch),
        datasets: [
            {
                label: "Participant ",
                data: Data.map((data) => data.participant),
                backgroundColor: [
                    "#2f96d0",
                    "#2f96d0",
                    "#2f96d0",
                    "#2f96d0",
                    "#2f96d0",
                ],
                // borderColor: "black",
                // borderWidth: 2
            },
        ],
    });
    console.log(chartData);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-row align-items-center gap-3 mb-5">
                        <div className="p-4 bg-white border rounded-md w-full">
                            <h1 className="text-sm mb-1">
                                <i className="bx bx-fw bx-user"></i>Total
                                Pengguna
                            </h1>
                            <p className="text-2xl font-bold">{propsData[0]}</p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <BarChart chartData={chartData} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
