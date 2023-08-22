import { useState } from 'react';
import PropTypes from 'prop-types';

function MantenimientoForm({ setDatosMantenimiento }) {
    const [fecha, setFecha] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [kilometraje, setKilometraje] = useState('');
    const [conductor, setConductor] = useState('');
    const [proveedor, setProveedor] = useState('');

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
        setDatosMantenimiento((prevData) => ({ ...prevData, fecha: event.target.value }));
    };

    const handleTipoMantenimientoChange = (event) => {
        setTipo(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
        setDatosMantenimiento((prevData) => ({ ...prevData, descripcion: event.target.value }));
    };

    const handleKilometrajeChange = (event) => {
        setKilometraje(event.target.value);
        setDatosMantenimiento((prevData) => ({ ...prevData, kilometraje: event.target.value }));
    };

    const handleConductorChange = (event) => {
        setConductor(event.target.value);
        setDatosMantenimiento((prevData) => ({ ...prevData, conductor: event.target.value }));
    };

    const handleProveedorChange = (event) => {
        setProveedor(event.target.value);
        setDatosMantenimiento((prevData) => ({ ...prevData, proveedor: event.target.value }));
    };

    const handleGuardarMantenimiento = () => {
        setDatosMantenimiento((prevData) => ({ ...prevData, tipo: tipo }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">DATOS DEL MANTENIMIENTO</h2>
            <div>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Fecha de Mantenimiento:</label>
                        <input
                            type="date"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={fecha}
                            onChange={handleFechaChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Kilometraje del ultimo mantenimiento:</label>
                        <input
                            type="number"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={kilometraje}
                            onChange={handleKilometrajeChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Proveedor que realiza el mantenimiento:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={proveedor}
                            onChange={handleProveedorChange}
                        />
                    </div>
                </form>
            </div>

            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tipo de Mantenimiento</label>
                        <select value={tipo} onChange={handleTipoMantenimientoChange} className='mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500'>
                            <option value="Preventivo">Preventivo</option>
                            <option value="Correctivo">Correctivo</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Descripcion del mantenimiento:</label>
                        <textarea
                            name=""
                            id=""
                            className='mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                            cols="30"
                            rows="3"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Conductor que confirma el mantenimiento realizado:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={conductor}
                            onChange={handleConductorChange}
                        />
                    </div>
                </form>
            </div>

            <div>
                <button className='h-10 w-24 border rounded-lg bg-blue-500 text-white text-sm top-full ' onClick={handleGuardarMantenimiento}>Guardar</button>
            </div>
        </div>
    );
}

MantenimientoForm.propTypes = {
    setDatosMantenimiento: PropTypes.func.isRequired
};

export default MantenimientoForm;
