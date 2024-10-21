function Table({ expenses, removeAtIndex }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg col-span-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-200">
        <thead className="text-xs text-white uppercase bg-gray-800 shadow-lg">
          <tr>
            <th scope="col" className="px-6 py-3">
              Data
            </th>
            <th scope="col" className="px-6 py-3">
              Descrizione
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Importo
            </th>
            <th scope="col" className="px-6 py-3">
              Azioni
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={index}
              className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap"
              >
                {expense.date}
              </th>
              <td className="px-6 py-4">{expense.description}</td>
              <td className="px-6 py-4">{expense.category}</td>
              <td className="px-6 py-4">{expense.amount}€</td>
              <td className="px-6 py-4">
                <a
                  onClick={() => removeAtIndex(index)}
                  href="#"
                  className="font-medium text-blue-500 hover:underline"
                >
                  Elimina
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
