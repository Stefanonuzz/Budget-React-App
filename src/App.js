import { useState } from "react";
import Input from "./components/Input";
import Amount from "./components/Amount";
import Table from "./components/Table";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const removeAtIndex = (indexToRemove) => {
    const updatedExpenses = expenses.filter((expense, index) => {
      return index !== indexToRemove;
    });

    setExpenses(updatedExpenses);
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      <h1 className="text-blue-500 text-5xl font-bold mb-8 col-span-1 place-content-center">
        Gestione <span className="text-white">Risparmi</span>
      </h1>
      <Amount expenses={expenses} />
      <Input addExpense={addExpense} />
      <BarChart expenses={expenses} />
      <PieChart expenses={expenses} />
      <Table expenses={expenses} removeAtIndex={removeAtIndex} />
    </div>
  );
}

export default App;
