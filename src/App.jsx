import { useState } from "react";
import ClienteForm from "./components/ClienteForm";
import VehiculoForm from "./components/VehiculoForm";
import MantenimientoForm from "./components/MantenimientoForm";
import ElaboradoForm from "./components/ElaboradoForm";

function App() {
  const [setDatosCliente] = useState({});
  const [setDatosVehiculo] = useState({});
  const [setDatosMantenimiento] = useState({
    verdeChecked: false,
    amarilloChecked: false,
    rojoChecked: false,
  });
  const [setDatosElaborado] = useState({});

  const generatePDF = () => {
    window.print("reporte.pdf");
  };

  return (
    <div className="text-center">
    <h1 className="text-2xl mt-2 font-bold mb-4">REPORTE DE INSPECCIÓN VEHICULAR</h1>
  
    <ClienteForm setDatosCliente={setDatosCliente} />
    <VehiculoForm setDatosVehiculo={setDatosVehiculo} />
    <MantenimientoForm setDatosMantenimiento={setDatosMantenimiento} />
    <ElaboradoForm setDatosElaborado={setDatosElaborado} />
  
    <button
      className="mx-auto ml-4 mb-2 h-12 w-40 border rounded-lg py-2 bg-red-600 text-white text-md items-center justify-center hover:bg-red-700"
      onClick={generatePDF}
    >
      Generate PDF Report
    </button>
  </div>
  
  );
}

export default App;
