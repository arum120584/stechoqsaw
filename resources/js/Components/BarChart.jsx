import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container p-10">
            <h2 className="font-semibold text-lg text-center">
                STATISTIK MSIB
            </h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Data dari Batch 1-5",
                        },
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
};
