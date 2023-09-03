import { useState } from "react";
import PropTypes from "prop-types";

function ClienteForm({ setDatosCliente }) {
    const [proveedor, setProveedor] = useState("");
    const [cliente, setCliente] = useState("");
    const [kilometraje, setKilometraje] = useState("");
    const [vin, setVIN] = useState("");
    const [fecha, setFecha] = useState("");
    const [tecnico, setTecnico] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [correo, setCorreoElectronico] = useState("");

    const handleProveedorChange = (event) => {
        setProveedor(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            proveedor: event.target.value,
        }));
    };

    const handleClienteChange = (event) => {
        setCliente(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            cliente: event.target.value,
        }));
    };

    const handleKilometrajeChange = (event) => {
        setKilometraje(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            kilometraje: event.target.value,
        }));
    };

    const handleVINChange = (event) => {
        setVIN(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, vin: event.target.value }));
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
        setDatosCliente((prevData) => ({ ...prevData, fecha: event.target.value }));
    };

    const handleTecnicoChange = (event) => {
        setTecnico(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            tecnico: event.target.value,
        }));
    };

    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            telefono: event.target.value,
        }));
    };

    const handleDireccionChange = (event) => {
        setDireccion(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            direccion: event.target.value,
        }));
    };

    const handleCorreoElectronicoChange = (event) => {
        setCorreoElectronico(event.target.value);
        setDatosCliente((prevData) => ({
            ...prevData,
            correo: event.target.value,
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">
                PERSONAL INFORMATION
            </h2>
            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Dealer Name:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={proveedor}
                            onChange={handleProveedorChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Customer:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={cliente}
                            onChange={handleClienteChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Mileage:</label>
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
                        <label className="block text-sm font-medium">VIN:</label>
                        <input
                            type="number"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={vin}
                            onChange={handleVINChange}
                        />
                    </div>
                </form>
            </div>
            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Date:</label>
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
                        <label className="block text-sm font-medium">Technical:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={tecnico}
                            onChange={handleTecnicoChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Telephone:</label>
                        <input
                            type="number" /* Cambiado a 'tel' */
                            maxLength={5}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={telefono}
                            onChange={handleTelefonoChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Address:</label>
                        <input
                            type="text"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={direccion}
                            onChange={handleDireccionChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">E-mail address:</label>
                        <input
                            type="email"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={correo}
                            onChange={handleCorreoElectronicoChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

ClienteForm.propTypes = {
    setDatosCliente: PropTypes.func.isRequired,
};

export default ClienteForm;
