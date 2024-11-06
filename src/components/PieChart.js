import Chart from "react-apexcharts";
import Card from "./Card";

export default function PieChart({ expenses }) {
  // Filtra le spese per tipo 'uscita' e raggruppa per categoria
  const filteredExpenses = expenses.filter(
    (expense) => expense.type === "uscita"
  );

  const groupedExpenses = filteredExpenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  // Prepara le categorie e gli importi per il grafico
  const categories = Object.keys(groupedExpenses);
  const series = Object.values(groupedExpenses);

  const options = {
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
    },
    labels: categories,
  };

  return (
    <Card>
      <div className="text-white flex flex-col items-center font-bold text-center">
        <h2 className="mb-12">Grafico a Torta</h2>

        {series.length === 0 ? (
          <p className="text-white text-2xl">Nessun dato disponibile</p>
        ) : (
          <Chart options={options} series={series} type="donut" width={500} />
        )}
      </div>
    </Card>
  );
}
