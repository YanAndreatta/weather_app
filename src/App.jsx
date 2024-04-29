import React from "react";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">

      <form>
        <input 
        type="text" 
        placeholder="cidade" 
        className="p-3 rounded-lg outline-none"
        />
        <button 
        type="submit"
        className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card />

    </div>
  );
}

export default App;
