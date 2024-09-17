import Input from "./components/Input";
import Amount from "./components/Amount";
import Table from "./components/Table";

function App() {
  return (
    <div className="p-6 grid grid-cols-3">
      <h1 className="text-blue-500 text-5xl font-bold mb-8 col-span-1 place-content-center">
        Gestione <span className="text-white">Risparmi</span>
      </h1>
      <Amount />
      <Input />
      <Table />
    </div>
  );
}

export default App;
