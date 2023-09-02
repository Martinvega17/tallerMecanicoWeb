import { useState } from "react";
import PropTypes from "prop-types";
import "../semaforo.css";
import battery from "../assets/images/battery.png";

function MantenimientoForm({ setDatosMantenimiento, onGuardarMantenimiento }) {
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [conductor, setConductor] = useState("");

    const handleTipoMantenimientoChange = (event) => {
        setTipo(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
        setDatosMantenimiento((prevData) => ({
            ...prevData,
            descripcion: event.target.value,
        }));
    };


    const handleConductorChange = (event) => {
        setConductor(event.target.value);
        setDatosMantenimiento((prevData) => ({
            ...prevData,
            conductor: event.target.value,
        }));
    };



    const handleGuardarMantenimiento = () => {
        setDatosMantenimiento((prevData) => ({ ...prevData, tipo: tipo }));
        onGuardarMantenimiento(); // Call the passed function
    };

    return (
        <div className="grid grid-cols-2 gap-4 mx-4">
            <h2 className="text-xl font-semibold mb-2 col-span-2 text-center">
                DATOS DEL MANTENIMIENTO
            </h2>
            <h3 className="text-center font-semibold col-span-2 text-lg">
                CHECKLIST
            </h3>
            <div className="col-span-2 grid grid-cols-3 gap-4 text-center">
                <div className="col-span-1">
                    <span className="semaforo verde"></span>
                    CHECKED AND OKEY
                </div>
                <div className="col-span-1">
                    <span className="semaforo amarillo"></span>
                    MAY NEED FUTURE ATTENTION
                </div>
                <div className="col-span-1">
                    <span className="semaforo rojo"></span>
                    REQUIRES INMEDIATE ATTENTION
                </div>
            </div>
            <div className="mb-4 margin">
                <form>
                    <legend className="text-center bg-[#333] text-white font-bold p-2">
                        INTERIOR/EXTERIOR
                    </legend>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Head Lights / Tail Lights / Turn Signals / Hazard Warning Lights /
                            Brake Lights / Exterior Lights
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Windshield Washer Spray / Wiper Operation / Wiper Blades
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Windshield Condition (Inspect for cracks, chips, or Pitting, etc.)
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Mirrors / Glass
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Emergency Brake Adjustment
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Horn Operation
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Fuel Tank Cap Gasket
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Air Conditioning Filter (if equipped)
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Clutch Operation (if equipped)
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Back-up Lights Left / Right
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Dash Warning Lights
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Carpet / Upholstery / Floor Mats
                        </label>
                    </div>
                    <legend className="text-center bg-[#333] text-white font-bold p-2">
                        UNDER VEHICLE
                    </legend>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Shock Absorbers / Suspension / Struts
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Steering Gear Box / Linkage and Boots / Ball Joints / Dust Covers
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Muffler / Exhaust System / Mounting / Catalytic Converter
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Engine Oil and / or Fluid Leaks
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Brake lines / Hoses / Parking Brake Cable
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Drive Shaft Boots / Constant Velocity Boots / U-Joints /
                            Transmission Linkage (if equipped)
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Transmission / Differential / Transfer Case (Check Fluid Level,
                            Fluid Condition and Fluid Leaks)
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Fuel Lines and Connections / Fuel Tank Band / Fuel Tank Vapor Vent
                            System Hoses
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Inspect Nuts and Bolts on Body Chassis
                        </label>
                    </div>

                    <legend className="text-center bg-[#333] text-white font-bold p-2">
                        UNDER HOOD
                    </legend>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Fluid Levels: Engine Oil / Coolant / Battery / Brake / Power
                            Steering / Fluid Washer / Automatic Transmission
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Engine Air Filter
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Drive Belts (Condition and Adjustment)
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Cooling System Hoses / Heater Hoses / Air Conditioning Hoses and
                            Connections
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Radiator Core / Air Conditioning Condenser (if equipped)
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Coolant Recovery Reservoir Fluid Level / Condition (if equipped)
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Clutch Resservoir Fluid Level / Condition (as equipped)
                        </label>
                    </div>
                </form>
            </div>

            <div>
                <form>
                    <legend className="text-center bg-[#333] text-white font-bold p-2">
                        INTERIOR/EXTERIOR
                    </legend>
                    
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Battery Charge
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Battery Condition
                        </label>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo verde"
                            id="verde"
                            name="verde"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo amarillo"
                            id="amarillo"
                            name="amarillo"
                        />
                        <input
                            type="checkbox"
                            className="mt-1 p-2 semaforo rojo"
                            id="rojo"
                            name="rojo"
                        />
                        <label className="text-sm font-medium ml-2" htmlFor="verde">
                            Cables and Connections
                        </label>
                    </div>
                    <div className="items-end">
                        <img src={battery} alt="" height={320} width={140} />
                    </div>

                    
                </form>
            </div>

            <div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">
                            Tipo de Mantenimiento
                        </label>
                        <select
                            value={tipo}
                            onChange={handleTipoMantenimientoChange}
                            className="mt-1 p-2 block w-full rounded-md border border-slate-300 text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        >
                            <option value="">Seleccionar</option> {/* Opción en blanco */}
                            <option value="Preventivo">Preventivo</option>
                            <option value="Correctivo">Correctivo</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">
                            Conductor que confirma el mantenimiento realizado:
                        </label>
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
                <button
                    className="h-10 w-24 border rounded-lg bg-blue-500 text-white text-sm top-full "
                    onClick={handleGuardarMantenimiento}
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

MantenimientoForm.propTypes = {
    setDatosMantenimiento: PropTypes.func.isRequired,
    onGuardarMantenimiento: PropTypes.func.isRequired, // Add this line
};

export default MantenimientoForm;
