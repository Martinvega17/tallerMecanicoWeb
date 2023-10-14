import { useState } from 'react';
import PropTypes from 'prop-types';

function ElaboradoForm({ setDatosElaborado }) {
    const [formData, setFormData] = useState({
        elaboradonombre: '',
        elaboradocargo: '',
        elaboradofirma: '',
        revisadonombre: '',
        revisadocargo: '',
        revisadofirma: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setDatosElaborado((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <div>
                <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">ELABORADO POR</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre:</label>
                        <input
                            type="text"
                            name="elaboradonombre"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData.elaboradonombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Cargo:</label>
                        <input
                            type="text"
                            name="elaboradocargo"
                            className="imt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData.elaboradocargo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Signature:</label>
                        <input
                            type="text"
                            name="elaboradofirma"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData.elaboradofirma}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            <div>
                <form>
                    <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">REVISADO POR</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre:</label>
                        <input
                            type="text"
                            name="revisadonombre"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData.revisadonombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Cargo:</label>
                        <input
                            type="text"
                            name="revisadocargo"
                            className="imt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData.revisadocargo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Signature:</label>
                        <input
                            type="text"
                            name="revisadofirma"
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            value={formData.revisadofirma}
                            onChange={handleChange}
                        />
                    </div>


                </form>
            </div>
        </div>
    );
}

ElaboradoForm.propTypes = {
    setDatosElaborado: PropTypes.func.isRequired
};

export default ElaboradoForm;
