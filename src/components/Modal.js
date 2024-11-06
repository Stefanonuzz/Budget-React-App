import React from "react";
import Card from "./Card";

function Modal() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-md bg-black/30">
      <div className="w-1/3">
        <Card>
          <div className="mb-4">
            <label className="block mb-2 text-white">Data</label>
            <input
              className="bg-gray-700 text-white rounded p-2 w-full"
              type="date"
              value=""
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Descrizione</label>
            <input
              className="bg-gray-700 text-white rounded p-2 w-full"
              type="text"
              value=""
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Categoria</label>
            <input
              className="bg-gray-700 text-white rounded p-2 w-full"
              type="text"
              value=""
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-white">Importo</label>
            <input
              className="bg-gray-700 text-white rounded p-2 w-full"
              type="number"
              value=""
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 rounded p-2 w-full hover:bg-green-600"
            >
              Applica modifiche
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
