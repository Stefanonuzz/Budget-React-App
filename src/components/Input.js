import { useState } from "react";
import Card from "./Card";

function Input({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("uscita");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const categories = {
    entrata: ["Stipendio", "Regalo", "Vendita", "Altro"],
    uscita: ["Spese personali", "Alimentari", "Salute", "Trasporti", "Altro"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      amount,
      type,
      category,
      date,
      description,
    };

    addExpense(newExpense);

    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <>
      <Card>
        <div className="max-w-md col-start-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-white">
                Aggiungi un importo:
              </label>
              <input
                className="bg-gray-700 text-white rounded p-2 w-full"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Tipo:</label>
              <div className="flex space-x-4 text-white">
                <div>
                  <input
                    type="radio"
                    id="uscita"
                    name="type"
                    value="uscita"
                    checked={type === "uscita"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor="uscita" className="ml-2">
                    Uscita
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="entrata"
                    name="type"
                    value="entrata"
                    checked={type === "entrata"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor="entrata" className="ml-2">
                    Entrata
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Categoria:</label>
              <select
                className="bg-gray-700 text-white rounded p-2 w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Seleziona una categoria</option>
                {categories[type].map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Data:</label>
              <input
                className="bg-gray-700 text-white rounded p-2 w-full"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Descrizione:</label>
              <input
                className="bg-gray-700 text-white rounded p-2 w-full"
                type="text"
                placeholder="Descrivi l'entrata o uscita"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600"
              >
                Aggiungi
              </button>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
}

export default Input;
