import { useState } from "react";
import Input from "./components/Input";
import Amount from "./components/Amount";
import Table from "./components/Table";
import PieChart from "./components/PieChart";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      <h1 className="text-blue-500 text-5xl font-bold mb-8 col-span-1 place-content-center">
        Gestione <span className="text-white">Risparmi</span>
      </h1>
      <Amount />
      <Input addExpense={addExpense} />
      <PieChart />
      <Table expenses={expenses} />
    </div>
  );
}

export default App;
