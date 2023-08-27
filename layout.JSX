import { useState } from 'react'
import { Document, Page, Text, View, StyleSheet, Font, pdf, Image } from '@react-pdf/renderer';
import ClienteForm from './components/ClienteForm';
import VehiculoForm from './components/VehiculoForm';
import MantenimietoForm from './components/MantenimientoForm';
import ElaboradoForm from './components/ElaboradoForm';
import LatoBold from './fonts/Lato-Bold.ttf';
import vehicle from './assets/images/vehicle1.png';

// Registra la fuente en React PDF Renderer
Font.register({ family: 'Lato-Bold', src: LatoBold });

const styles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        backgroundColor: '#F3F4F6', // Color de fondo similar al de la página web
        border: '1pt solid #E5E7EB', // Color del borde similar al de la página web
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center', // Centrar el texto
        fontWeight: 'bold', // Agrega negritas
        fontFamily: 'Lato-Bold', // Usa la fuente registrada
    },
    title: {
        fontSize: 14,
        marginBottom: 5,
        border: '1px solid #E5E7EB', // Color del borde similar al de la página web
        padding: 4,
        flexDirection: 'row', // Cambio a flex-direction: row
        justifyContent: 'space-between', // Alineación entre elementos
        columnGap: 10,
        fontFamily: 'Lato-Bold', // Usa la fuente registrada
    },
    greenBackground: {
        backgroundColor: '#01AE51', // Color de fondo azul similar al de la página web
        color: 'black',
        padding: 5,
        marginBottom: 5,
        textAlign: 'center', // Centrar el texto
        fontSize: 16,
        fontWeight: 'bold',
    },
    column: {
        width: '50%', // Divide en dos columnas
        display: 'inline-block', // Muestra las columnas una al lado de la otra
        verticalAlign: 'top', // Alinea el contenido en la parte superior de la columna
        padding: '0 10px', // Añade un poco de espacio entre las columnas
        boxSizing: 'border-box', // Considera el relleno en el ancho total de la columna
        marginBottom: 10, // Aumentamos el margen inferior entre las columnas
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
        border: '1px solid #E5E7EB', // Color del borde similar al de la página web
        padding: 4,
        flexDirection: 'row', // Cambio a flex-direction: row
        justifyContent: 'space-between', // Alineación entre elementos
        columnGap: 10,
    },
    image: {
        marginBottom: 10,
    },
});


function App() {
    const [datosCliente, setDatosCliente] = useState({});
    const [datosVehiculo, setDatosVehiculo] = useState({});
    const [datosMantenimiento, setDatosMantenimiento] = useState({});
    const [datosElaborado, setDatosElaborado] = useState({});
    const [mostrarGenerarPDF, setMostrarGenerarPDF] = useState(false);

    const handleGuardarMantenimiento = () => {
        setMostrarGenerarPDF(true); // Mostrar el botón Generar Reporte PDF después de guardar
    };

    const generarReportePDF = async () => {
        // Realiza la validación de los campos requeridos aquí
        const camposFaltantes = [];

        if (!datosCliente.nombre) camposFaltantes.push("Nombre");
        if (!datosCliente.licencia) camposFaltantes.push("Licencia de Conducir");
        if (!datosCliente.correo) camposFaltantes.push("Correo Electrónico");
        if (!datosCliente.telefono) camposFaltantes.push("Teléfono");
        if (!datosCliente.direccion) camposFaltantes.push("Dirección");

        // Validación adicional para el campo de correo electrónico
        if (datosCliente.correo && !/\S+@\S+\.\S+/.test(datosCliente.correo)) {
            camposFaltantes.push("Formato de Correo Electrónico invalido");
        }

        if (camposFaltantes.length > 0) {
            const mensaje = `Por favor, completa los siguientes campos requeridos:\n ${camposFaltantes.join(", ")}`;
            alert(mensaje);
            return; // Evita la generación del PDF si hay campos faltantes
        }
        const pdfBlob = await pdf(<Document>
            <Page>
                <View style={styles.section}>
                    <Text style={styles.heading}>PROCESO DE INFRAESTRUCTURA:</Text>
                    <Text style={styles.heading}>INFORME MENSUAL DE MANTENIMIENTO VEHICULAR:</Text>
                    <Text style={styles.greenBackground}>INFORMACION DEL CLIENTE</Text>
                    <View style={styles.title}>
                        <View style={styles.column}>
                            <Text>Nombre: {datosCliente.nombre} </Text>
                            <Text>Licencia de Conducir: {datosCliente.licencia}</Text>
                            <Text>Correo Electronico: {datosCliente.correo}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text>Telefono: {datosCliente.telefono}</Text>
                            <Text>Direccion: {datosCliente.direccion}</Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image src={vehicle} style={styles.image} />
                    </View>

                    <Text style={styles.greenBackground}>INFORMACION DEL VEHICULO</Text>
                    <Text style={styles.text}>
                        <Text style={styles.title}>Vehiculo: </Text>
                        <Text style={styles.text}>{datosVehiculo.vehiculo}</Text>
                    </Text>
                    <Text style={styles.title}>Marca: {datosVehiculo.marca}</Text>
                    <Text style={styles.title}>Modelo: {datosVehiculo.modelo} </Text>
                    <Text style={styles.title}>Placas: {datosVehiculo.placas}</Text>
                    <Text style={styles.title}>Capacidad en Toneladas: {datosVehiculo.capacidadton}</Text>
                    <Text style={styles.title}>Capacidad de Pasajeros: {datosVehiculo.pasajeros}</Text>
                    <Text style={styles.title}>No. Motor: {datosVehiculo.motor}</Text>
                    <Text style={styles.title}>CVU: {datosVehiculo.cvu}</Text>
                    <Text style={styles.greenBackground}>DATOS DEL MANTENIMIENTO</Text>
                    <Text style={styles.title}>Fecha de Mantenimiento: {datosMantenimiento.fecha}</Text>
                    <Text style={styles.title}>Tipo de Mantenimiento: {datosMantenimiento.tipo}</Text>
                    <Text style={styles.title}>Descripcion del Mantenimiento: {datosMantenimiento.descripcion}</Text>
                    <Text style={styles.title}>Kilometraje del ultimo mantenimiento Mantenimiento: {datosMantenimiento.kilometraje}</Text>
                    <Text style={styles.title}>Conductor que confirma el mantenimiento realizado: {datosMantenimiento.conductor}</Text>
                    <Text style={styles.title}>Proveedor que realiza el mantenimiento: {datosMantenimiento.proveedor}</Text>
                    <Text style={styles.greenBackground}>ELABORADO POR</Text>
                    <Text style={styles.title}>Nombre: {datosElaborado.elaboradonombre}</Text>
                    <Text style={styles.title}>Cargo: {datosElaborado.elaboradocargo}</Text>
                    <Text style={styles.title}>Firma: {datosElaborado.elaboradofirma}</Text>
                    <Text style={styles.greenBackground}>REVISADO POR</Text>
                    <Text style={styles.title}>Nombre: {datosElaborado.revisadonombre}</Text>
                    <Text style={styles.title}>Cargo: {datosElaborado.revisadocargo}</Text>
                    <Text style={styles.title}>Firma: {datosElaborado.revisadofirma}</Text>
                </View>
            </Page>
        </Document>).toBlob();
        const pdfUrl = URL.createObjectURL(pdfBlob);

        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'reporte.pdf'; // Cambia el nombre del archivo si lo deseas
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(pdfUrl);
    };

    return (
        <div>

            <h1 className='text-center text-2xl mt-2 font-bold mb-4'>REPORTE DE INSPECCION DEL VEHICULO</h1>

            <ClienteForm setDatosCliente={setDatosCliente} />
            <div className=" justify-center justify-items-center flex">
                <img
                    src={vehicle}
                    style={styles.image}
                />
            </div>
            <VehiculoForm setDatosVehiculo={setDatosVehiculo} />
            <MantenimietoForm
                setDatosMantenimiento={setDatosMantenimiento}
                onGuardarMantenimiento={handleGuardarMantenimiento} // Pass the function here
            />
            <ElaboradoForm setDatosElaborado={setDatosElaborado} />


            {mostrarGenerarPDF && (
                <button className='ml-4 mb-2 h-12 w-40 border rounded-lg py-2 bg-red-600 text-white text-md' onClick={generarReportePDF}>Generar Reporte PDF</button>
            )}
        </div>
    );
}

export default App;
