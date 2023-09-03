import { useState } from 'react';
import PropTypes from 'prop-types';

function ElaboradoForm({ setDatosElaborado }) {
    const [elaboradonombre, setElaboradoNombre] = useState('');
    const [elaboradocargo, setElaboradoCargo] = useState('');
    const [elaboradofirma, setElaboradoFirma] = useState('');
    const [revisadonombre, setRevisadoNombre] = useState('');
    const [revisadocargo, setRevisadoCargo] = useState('');
    const [revisadofirma, setRevisadoFirma] = useState('');

    const handleElaboradoNombreChange = (event) => {
        setElaboradoNombre(event.target.value);
        setDatosElaborado((prevData) => ({ ...prevData, elaboradonombre: event.target.value }));
    };

    const handleElaboradoCargoChange = (event) => {
        setElaboradoCargo(event.target.value);
        setDatosElaborado((prevData) => ({ ...prevData, elaboradocargo: event.target.value }));
    };

    const handleElaboradoFirmaChange = (event) => {
        setElaboradoFirma(event.target.value);
        setDatosElaborado((prevData) => ({ ...prevData, elaboradofirma: event.target.value }));
    };

    const handleRevisadorNombreChange = (event) => {
        setRevisadoNombre(event.target.value);
        setDatosElaborado((prevData) => ({ ...prevData, revisadonombre: event.target.value }));
    };

    const handleRevisadoCargoChange = (event) => {
        setRevisadoCargo(event.target.value);
        setDatosElaborado((prevData) => ({ ...prevData, revisadocargo: event.target.value }));
    };

    const handleRevisadorFirmaChange = (event) => {
        setRevisadoFirma(event.target.value);
        setDatosElaborado((prevData) => ({ ...prevData, revisadofirma: event.target.value }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
    <div>
    <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">ELABORADO POR</h2>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium">Name:</label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    value={elaboradonombre}
                    onChange={handleElaboradoNombreChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Charge:</label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    value={elaboradocargo}
                    onChange={handleElaboradoCargoChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Signature:</label>
                <input
                    type="text" 
                    disabled className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    value={elaboradofirma}
                    onChange={handleElaboradoFirmaChange}
                />
            </div>
        </form>
    </div>
    <div>
        <form>
        <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">REVISADO POR</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium">Name:</label>
                <input
                    type="text" /* Cambiado a 'tel' */
                    maxLength={5}
                    className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    value={revisadonombre}
                    onChange={handleRevisadorNombreChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Charge:</label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    value={revisadocargo}
                    onChange={handleRevisadoCargoChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Signature:</label>
                <input
                    type="text" 
                    disabled className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    value={revisadofirma}
                    onChange={handleRevisadorFirmaChange}
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
