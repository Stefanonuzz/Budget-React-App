import Chart from "react-apexcharts";
import Card from "./Card";

const series = [44, 55, 41, 17, 15];
const options = {
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
};

export default function PieChart() {
  return (
    <Card>
      <div className="text-white font-bold text-center">
        <h2 className="mb-4">Grafico a torta</h2>
        <Chart options={options} series={series} type="donut" />
      </div>
    </Card>
  );
}
