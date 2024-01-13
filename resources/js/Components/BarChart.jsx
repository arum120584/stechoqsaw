import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
    return (
      <div className="chart-container p-10">
        <h2 className="font-semibold text-lg text-center">Judul Bar-chart</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    );
  };