import Chart from "react-apexcharts";
import Card from "./Card";

export default function BarChart({ expenses }) {
  // Filtra le spese per tipo 'uscita' e raggruppa per categoria
  const filteredExpenses = expenses.filter(
    (expense) => expense.type === "uscita"
  );

  const groupedExpenses = filteredExpenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  const categories = Object.keys(groupedExpenses);
  const series = Object.values(groupedExpenses);

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: "#FFF",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

  const barSeries = [
    {
      name: "Spese",
      data: series,
    },
  ];

  return (
    <Card>
      <div className="text-white flex flex-col items-center font-bold text-center">
        <h3 className="mb-12">Grafico a Colonne</h3>
        {series.length === 0 ? (
          <p className="text-white text-2xl">Nessun dato disponibile</p>
        ) : (
          <Chart options={options} series={barSeries} type="bar" width={450} />
        )}
      </div>
    </Card>
  );
}
