function Amount() {
  return (
    <div className="font-bold text-xl flex justify-between col-start-3 p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
      <div>
        <h1>Entrate</h1>
        <p className="text-green-500">1000€</p>
      </div>
      <div>
        <h1>Uscite</h1>
        <p className="text-red-500">350€</p>
      </div>
      <div>
        <h1>Totale</h1>
        <p className="text-blue-300">650€</p>
      </div>
    </div>
  );
}

// todo: rendere i dati effettivi, non fittizi

export default Amount;
