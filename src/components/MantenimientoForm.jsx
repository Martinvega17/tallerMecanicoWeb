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
            <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">Datos Mantenimiento</h2>
            <div>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Fecha de Mantenimiento:</label>
                        <input
                            type="datetime-local"
                            className="block text-sm font-medium w-full border rounded-md p-2"
                            value={fecha}
                            onChange={handleFechaChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Kilometraje del ultimo mantenimiento:</label>
                        <input
                            type="text"
                            className="block text-sm font-medium w-full border rounded-md p-2"
                            value={kilometraje}
                            onChange={handleKilometrajeChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Proveedor que realiza el mantenimiento:</label>
                        <input
                            type="text"
                            className="block text-sm font-medium w-full border rounded-md p-2"
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
                        <select value={tipo} onChange={handleTipoMantenimientoChange} className='block text-sm font-medium w-full border rounded-md p-2'>
                            <option value="Preventivo">Preventivo</option>
                            <option value="Correctivo">Correctivo</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Descripcion del mantenimiento:</label>
                        <textarea
                            name=""
                            id=""
                            className='block text-sm font-medium w-full border rounded-md p-2'
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
                            className="block text-sm font-medium w-full border rounded-md p-2"
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
