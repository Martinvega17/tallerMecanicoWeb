import { useState } from 'react';
import PropTypes from 'prop-types';

function ClienteForm({ setDatosCliente }) {
    const [nombre, setNombre] = useState('');
    const [licencia, setLicencia] = useState('');
    const [correo, setCorreoElectronico] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, nombre: event.target.value }));
    };

    const handleLicenciaChange = (event) => {
        setLicencia(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, licencia: event.target.value }));
    };

    const handleCorreoChange = (event) => {
        setCorreoElectronico(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, correo: event.target.value }));
    };

    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, telefono: event.target.value }));
    };

    const handleDireccionChange = (event) => {
        setDireccion(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, direccion: event.target.value }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
             <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">Datos Personales</h2>
            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full border rounded-md"
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Licencia de Conducir:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full border rounded-md"
                            value={licencia}
                            onChange={handleLicenciaChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Correo Electrónico:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full border rounded-md"
                            value={correo}
                            onChange={handleCorreoChange}
                        />
                    </div>
                </form>
            </div>
            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Teléfono:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full border rounded-md"
                            value={telefono}
                            onChange={handleTelefonoChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Dirección:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full border rounded-md"
                            value={direccion}
                            onChange={handleDireccionChange}
                        />
                    </div>
                </form>
            </div>
        </div>

    );
}

ClienteForm.propTypes = {
    setDatosCliente: PropTypes.func.isRequired
};

export default ClienteForm;
