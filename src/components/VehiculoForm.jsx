import { useState } from 'react';
import PropTypes from 'prop-types';

function VehiculoForm({ setDatosVehiculo }) {
    const [placas, setPlacas] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [capacidadton, setCapacidadTon] = useState('');


    const handlePlacasChange = (event) => {
        setPlacas(event.target.value);
        setDatosVehiculo((prevData) => ({ ...prevData, placas: event.target.value }));
    };

    const handleModeloChange = (event) => {
        setModelo(event.target.value);
        setDatosVehiculo((prevData) => ({ ...prevData, modelo: event.target.value }));
    };

    const handleMarcaChange = (event) => {
        setMarca(event.target.value);
        setDatosVehiculo((prevData) => ({ ...prevData, marca: event.target.value }));
    };

    const handleCapacidadTonChange = (event) => {
        setCapacidadTon(event.target.value);
        setDatosVehiculo((prevData) => ({ ...prevData, capacidadton: event.target.value }));
    };




    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">INFORMACION DEL VEHICULO</h2>

            <div>
                <form>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Marca:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={marca}
                            onChange={handleMarcaChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Placa:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={placas}
                            onChange={handlePlacasChange}
                        />
                    </div>
                    
                </form>
            </div>
            <div>
                <form>

                    

                <div className="mb-4">
                        <label className="block text-sm font-medium">Modelo:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={modelo}
                            onChange={handleModeloChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Capacidad en Toneladas:</label>
                        <input
                            type="number"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={capacidadton}
                            onChange={handleCapacidadTonChange}
                        />
                    </div>

                </form>
            </div>
        </div>

    );
}

VehiculoForm.propTypes = {
    setDatosVehiculo: PropTypes.func.isRequired
};

export default VehiculoForm;
