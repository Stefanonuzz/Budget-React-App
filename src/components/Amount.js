function Amount({ expenses }) {
  const totalIncome = expenses
    .filter((expense) => {
      return expense.type === "entrata";
    })
    .reduce((acc, income) => {
      return acc + parseInt(income.amount);
    }, 0);

  const totalExpense = expenses
    .filter((expense) => {
      return expense.type === "uscita";
    })
    .reduce((acc, ex) => {
      return acc + parseInt(ex.amount);
    }, 0);

  const total = totalIncome - totalExpense;

  return (
    <div className="font-bold text-xl flex justify-between col-start-3 p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
      <div>
        <h1>Entrate</h1>
        <p className="text-green-500">{totalIncome}€</p>
      </div>
      <div>
        <h1>Uscite</h1>
        <p className="text-red-500">{!totalExpense ? 0 : -totalExpense}€</p>
      </div>
      <div>
        <h1>Totale</h1>
        <p className="text-blue-300">{total}€</p>
      </div>
    </div>
  );
}

export default Amount;
