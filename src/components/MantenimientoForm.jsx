import { useState } from "react";
import PropTypes from "prop-types";
import "../semaforo.css";

function MantenimientoForm({ setDatosMantenimiento }) {
    const [checklist, setChecklist] = useState({
        lucesDelanteras: "null",
        lucesTraseras: "null",
        lucesDireccionales: "null",
        lucesDeFrenos: "null",
        lucesDeReversa: "null",
        limpiaparabrisas: "null",
        condicionesParabrisas: "null",
        funcionamientoClaxon: "null",
        testigosTablero: "null",
        taponCombustible: "null",
        frenoEmergencia: "null",
        funcionamientoAire: "null",
        funcionamientoEmbrague: "null",
        esteticaExterior: "null",
        amostiguadoresDelanteros: "null",
        amortiguadoresTraseros: "null",
        horquillasSuspension: "null",
        barrasTorsion: "null",
        rotulas: "null",
        terminales: "null",
        barraEstabilizadora: "null",
        barraDireccion: "null",
        soportesMotor: "null",
        soporteTransmision: "null",
        sistemaEscape: "null",
        fugasAceite: "null",
        nivelAceite: "null",
        nivelAnticongelante: "null",
        nivelAceiteTransmision: "null",
        liquidoFrenos: "null",
        liquidoDireccion: "null",
        liquidoLimpiaparabrisas: "null",
        filtroAire: "null",
        bandaAccesorios: "null",
        radiador: "null",
        sistemaEnfriamiento: "null",
        fugasSistemaEnfriamiento: "null",
        cargaBateria: "null",
        condicionesBateria: "null",
        cables: "null",
        balatasDelanteras: "null",
        balatasTraseras: "null",
        llantaDelanteraDer: "null",
        llantaDelanteraIz: "null",
        llantaTraseraDer: "null",
        llantaTraseraIz: "null",
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
        <div className="flex items-center mb-2 ">
            <label className="text-sm font-medium ml-2" htmlFor={name}>
                {label}
            </label>
            <div className="flex items-center mt-0 ml-4">
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
        <div className="sm:grid grid-cols-2 sm:grid-cols-2 gap-4 mx-4 pt-12">
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
            <div className="col-span-1">
                <legend className="text-center bg-[#333] text-white font-bold p-2">
                    INTERIOR/EXTERIOR
                </legend>
                {createCheckField("luces Delanteras", "Luces delanteras alta / baja")}
                {createCheckField("lucesTraseras", "Luces traseras")}
                {createCheckField("lucesDireccionales", "Luces direccionales e intermitentes")}
                {createCheckField("lucesDeFrenos", "Luces de frenos")}
                {createCheckField("lucesDeReversa", "Luces de reversa")}
                {createCheckField("limpiaparabrisas", "Funcionamiento del limpiaparabrisas / estados de las escobillas")}
                {createCheckField("condicionesParabrisas", "Estados de los espejos y cristales")}
                {createCheckField("funcionamientoClaxon", "Funcionamiento del claxon ")}
                {createCheckField("testigosTablero", "Testigos en el tablero")}
                {createCheckField("taponCombustible", "Tapón de combustible ")}
                {createCheckField("frenoEmergencia", "Ajuste del freno de emergencia  ")}
                {createCheckField("funcionamientoAire", "Funcionamiento del aire acondicionado (si aplica)")}
                {createCheckField("funcionamientoEmbrague", "Funcionamiento del embrague (si aplica)")}
                {createCheckField("esteticaExterior", "Estética exterior ")}
            </div>
            <div className="col-span-1">
                <legend className="text-center bg-[#333] text-white font-bold p-2">
                    DEBAJO DEL VEHÍCULO
                </legend>
                {createCheckField("amostiguadoresDelanteros", "Amortiguadores delanteros")}
                {createCheckField("amortiguadoresTraseros", "Amortiguadores traseros")}
                {createCheckField("horquillasSuspension", "Horquillas de suspensión ")}
                {createCheckField("barrasTorsion", "Barras de torsión ")}
                {createCheckField("rotulas", "Rotulas ")}
                {createCheckField("terminales", "Terminales")}
                {createCheckField("barraEstabilizadora", "Bujes de la barra estabilizadora ")}
                {createCheckField("barraDireccion", "Barra de dirección o cremallera")}
                {createCheckField("soportesMotor", "Soportes de motor")}
                {createCheckField("soporteTransmision", "Soporte de transmisión ")}
                {createCheckField("sistemaEscape", "Sistema de escape")}
                {createCheckField("fugasAceite", "Fugas de aceite de motor")}
            </div>
            <div className="col-span-1">
                <legend className="text-center bg-[#333] text-white font-bold p-2">
                    DEBAJO DEL CAPÓ
                </legend>
                {createCheckField("nivelAceite", "Nivel del aceite de motor")}
                {createCheckField("nivelAnticongelante", "Nivel del anticongelante ")}
                {createCheckField("nivelAceiteTransmision", "Nivel del aceite de transmisión ")}
                {createCheckField("liquidoFrenos", "Nivel del líquido de frenos ")}
                {createCheckField("liquidoDireccion", "Nivel del liquido de dirección ")}
                {createCheckField("liquidoLimpiaparabrisas", "Nivel del líquido del limpiaparabrisas")}
                {createCheckField("filtroAire", "Filtro de aire")}
                {createCheckField("bandaAccesorios", "Banda de accesorios ")}
                {createCheckField("radiador", "Radiador ")}
                {createCheckField("sistemaEnfriamiento", "Mangueras del sistema de enfriamiento ")}
                {createCheckField("fugasSistemaEnfriamiento", "Fugas en el sistema de enfriamiento ")}
                {createCheckField("cargaBateria", "Carga de la batería ")}
                {createCheckField("condicionesBateria", "Condiciones de la batería ")}
                {createCheckField("cables", "Cables y terminales de la batería ")}
            </div>
            <div className="col-span-1">
                <legend className="text-center bg-[#333] text-white font-bold p-2">
                    FRENOS Y LLANTAS
                </legend>
                {createCheckField("balatasDelanteras", "Balatas delanteras ")}
                {createCheckField("balatasTraseras", "Balatas traseras")}
                {createCheckField("llantaDelanteraDer", "Llanta delantera derecha")}
                {createCheckField("llantaDelanteraIz", "Llanta delantera izquierda ")}
                {createCheckField("llantaTraseraDer", "Llanta trasera derecha")}
                {createCheckField("llantaTraseraIz", "Llanta trasera izquierda")}
            </div>
            <div className="col-span-2">
                <legend className="text-center bg-[#333] text-white font-bold p-2">
                    COMENTARIOS O RECOMENDACIONES
                </legend>

                <textarea
                    type="text"
                    rows="6"
                    name="revisadocargo"
                    className="imt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />

            </div>
        </div>
    );
}

MantenimientoForm.propTypes = {
    setDatosMantenimiento: PropTypes.func.isRequired,
    onGuardarMantenimiento: PropTypes.func.isRequired,
};

export default MantenimientoForm;
