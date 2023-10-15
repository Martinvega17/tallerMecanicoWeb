import { useState } from "react";
import PropTypes from "prop-types";
import "../semaforo.css";

function MantenimientoForm({ setDatosMantenimiento }) {
    const [checklist, setChecklist] = useState({
        lucesDelanteras: "verde",
        lucesTraseras: "verde",
        lucesDireccionales: "verde",
        lucesDeFrenos: "verde",
        lucesDeReversa: "verde",
        limpiaparabrisas: "verde",
        condicionesParabrisas: "verde",
    });

    const handleCheckChange = (event) => {
        const { name, value } = event.target;
        setChecklist((prevChecklist) => ({
            ...prevChecklist,
            [name]: value,
        }));
        setDatosMantenimiento((prevData) => ({
            ...prevData,
            [`${name}Checked`]: value,
        }));
    };

    const createCheckField = (name, label) => (
        <div className="flex items-center mb-2">
            <label className="text-sm font-medium ml-2 mt-4" htmlFor={name}>
                {label}
            </label>
            <div className="flex items-center mt-2 ml-4">
                <input
                    type="checkbox"
                    className="mt-1 p-2 semaforo verde"
                    id={`${name}_verde`}
                    name={name}
                    value="verde"
                    checked={checklist[name] === "verde"}
                    onChange={handleCheckChange}
                />
                <label htmlFor={`${name}_verde`} ></label>

                <input
                    type="checkbox"
                    className="mt-1 p-2 semaforo amarillo"
                    id={`${name}_amarillo`}
                    name={name}
                    value="amarillo"
                    checked={checklist[name] === "amarillo"}
                    onChange={handleCheckChange}
                />
                <label htmlFor={`${name}_amarillo`} ></label>

                <input
                    type="checkbox"
                    className="mt-1 p-2 semaforo rojo"
                    id={`${name}_rojo`}
                    name={name}
                    value="rojo"
                    checked={checklist[name] === "rojo"}
                    onChange={handleCheckChange}
                />
                <label htmlFor={`${name}_rojo`} ></label>
            </div>
        </div>
    );

    return (
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4">
            <h2 className="text-xl font-semibold mb-2 col-span-2 text-center">
                DATOS DEL MANTENIMIENTO
            </h2>
            <h3 className="text-center font-semibold col-span-2 text-lg mb-6">
                LISTA DE COMPROBACION
            </h3>
            <div className="col-span-2 grid grid-cols-3 gap-4  text-center">
                <div className="col-span-1">
                    <span className="semaforo verde"></span>
                    SE ENCUENTRA EN BUENAS CONDICIONES
                </div>
                <div className="col-span-1">
                    <span className="semaforo amarillo"></span>
                    PUEDE NECESITAR ATENCIÓN EN UN FUTURO                </div>
                <div className="col-span-1">
                    <span className="semaforo rojo"></span>
                    REQUIERE ATENCIÓN INMEDIATA                </div>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-4 text-center">
                <legend className="text-center bg-[#333] text-white font-bold p-2">
                    INTERIOR/EXTERIOR
                </legend>
                {createCheckField("luces Delanteras", "Luces delanteras alta / baja")}
                {createCheckField("lucesTraseras", "Luces traseras")}
                {createCheckField("lucesDireccionales", "Luces direccionales e intermitentes")}
                {createCheckField("lucesDeFrenos", "Luces de frenos")}
                {createCheckField("lucesDeReversa", "Luces de reversa")}
                {createCheckField("limpiaparabrisas", "Funcionamiento del limpiaparabrisas / estados de las escobillas")}
                {createCheckField("condicionesParabrisas", "Condiciones del parabrisas")}
            </div>
        </div>
    );
}

MantenimientoForm.propTypes = {
    setDatosMantenimiento: PropTypes.func.isRequired,
    onGuardarMantenimiento: PropTypes.func.isRequired,
};

export default MantenimientoForm;
