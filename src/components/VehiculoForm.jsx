import { useState } from 'react';
import PropTypes from 'prop-types';

function VehiculoForm({ setDatosVehiculo }) {
    const [vehiculoData, setVehiculoData] = useState({
        placas: '',
        modelo: '',
        marca: '',
        capacidadton: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVehiculoData((prevData) => ({ ...prevData, [name]: value }));
        setDatosVehiculo((prevData) => ({ ...prevData, [name]: value }));
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
                            name="marca"
                            value={vehiculoData.marca}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Placas:</label>
                        <input
                            type="text"
                            name="placas"
                            value={vehiculoData.placas}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
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
                            name="modelo"
                            value={vehiculoData.modelo}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Capacity in Tons:</label>
                        <input
                            type="number"
                            name="capacidadton"
                            value={vehiculoData.capacidadton}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
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
