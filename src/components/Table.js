function Table() {
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
          <tr className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap"
            >
              Spesa Eurospin
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Elimina
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Elimina
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Elimina
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap"
            >
              Google Pixel Phone
            </th>
            <td className="px-6 py-4">Gray</td>
            <td className="px-6 py-4">Phone</td>
            <td className="px-6 py-4">$799</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Elimina
              </a>
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap"
            >
              Apple Watch 5
            </th>
            <td className="px-6 py-4">Red</td>
            <td className="px-6 py-4">Wearables</td>
            <td className="px-6 py-4">$999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Elimina
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
