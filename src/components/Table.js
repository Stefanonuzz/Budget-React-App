import { useState } from "react";
import Modal from "./Modal";

function Table({ expenses, removeAtIndex, setExpenses }) {
  const [editableIndex, setEditableIndex] = useState(null); // indice della riga da modificare
  const [editableExpense, setEditableExpense] = useState(null); // oggetto che contiene i dati della spesa da modificare
  const [isOpened, setIsOpened] = useState(false);

  // la chiami quando clicchi modifica
  const handleEditClick = (index) => {
    setEditableIndex(index);
    setEditableExpense(expenses[index]); // setto lo stato con i dati della riga cliccata
    setIsOpened(true); // apro la Modal
  };

  // la chiama il pulsante "Salva"
  const handleSaveClick = () => {
    const updatedExpenses = [...expenses];
    updatedExpenses[editableIndex] = editableExpense; // aggiorna direttamente l'elemento all'indice corretto
    setExpenses(updatedExpenses);
    setIsOpened(false);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  // la chiamo ogni volta che digito nei campi di input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableExpense((prev) => ({ ...prev, [name]: value }));
  };

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
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                {expense.date}
              </td>
              <td className="px-6 py-4">{expense.description}</td>
              <td className="px-6 py-4">{expense.category}</td>
              <td className="px-6 py-4">{expense.amount}</td>
              <td className="px-6 py-4">
                <>
                  <a
                    href="#"
                    onClick={() => handleEditClick(index)}
                    className="font-medium text-blue-500 hover:underline ml-5"
                  >
                    Modifica
                  </a>
                  <a
                    href="#"
                    onClick={() => removeAtIndex(index)}
                    className="font-medium text-red-500 hover:underline ml-5"
                  >
                    Elimina
                  </a>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        editableExpense={editableExpense}
        onChange={handleChange}
        onSave={handleSaveClick}
        isOpened={isOpened}
        setEditableExpense={setEditableExpense}
      ></Modal>
    </div>
  );
}

export default Table;
