import { useState } from "react";
import PropTypes from "prop-types";

function ClienteForm({ setDatosCliente }) {
    const initialFormState = {
        Proveedor: "",
        Cliente: "",
        vin: "",
        Fecha: "",
        Telefono: "",
        Direccion: "",
        Correo: "",
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setDatosCliente((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">
                INFORMACION PERSONAL
            </h2>
            {Object.keys(initialFormState).map((field) => (
                <div key={field}>
                    <label className="block text-sm font-medium">
                        {field === "cliente" ? "Cliente" : field}
                    </label>
                    {field === "Fecha" ? (
                        <input
                            type="date"
                            name={field}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData[field]}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <input
                            type={field === "Telefono" ? "number" : "text"}
                            name={field}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData[field]}
                            onChange={handleInputChange}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

ClienteForm.propTypes = {
    setDatosCliente: PropTypes.func.isRequired,
};

export default ClienteForm;
