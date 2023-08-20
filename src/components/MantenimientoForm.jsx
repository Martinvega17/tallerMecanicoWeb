import { useState } from 'react';
import PropTypes from 'prop-types';

function MantenimientoForm({ setDatosMantenimiento }) {
    const [nombre, setNombre] = useState('');


    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        setDatosMantenimiento((prevData) => ({ ...prevData, nombre: event.target.value }));
    };



    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <h2 className="text-lg font-semibold mb-2 col-span-2 text-center">Datos Mantenimiento</h2>
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

                </form>
            </div>
        </div>

    );
}

MantenimientoForm.propTypes = {
    setDatosMantenimiento: PropTypes.func.isRequired
};

export default MantenimientoForm;
