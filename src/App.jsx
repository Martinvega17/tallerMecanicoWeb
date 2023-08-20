import { useState } from 'react';
import { Document, Page, Text, View, PDFViewer, StyleSheet  } from '@react-pdf/renderer';
import ClienteForm from './components/ClienteForm';
import VehiculoForm from './components/VehiculoForm';
import MantenimietoForm from './components/MantenimientoForm';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    backgroundColor: '#F3F4F6', // Color de fondo similar al de la página web
    border: '1pt solid #E5E7EB', // Color del borde similar al de la página web
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center', // Centrar el texto
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  greenBackground: {
    backgroundColor: '#01AE51', // Color de fondo azul similar al de la página web
    color: 'black',
    padding: 5,
    marginBottom: 5,
    textAlign: 'center', // Centrar el texto
  },
});


function App() {
  const [datosCliente, setDatosCliente] = useState({});
  const [datosVehiculo, setDatosVehiculo] = useState({});
  const [datosMantenimiento, setDatosMantenimiento] = useState({});
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const generarReportePDF = () => {
    setMostrarResumen(true);
  };

  return (
    <div>
      <h1 className='text-center text-2xl mt-2 font-bold'>VEHICLE INSPECTION REPORT</h1>
      <ClienteForm setDatosCliente={setDatosCliente} />
      <VehiculoForm setDatosVehiculo={setDatosVehiculo} />
      <MantenimietoForm setDatosMantenimiento={setDatosMantenimiento} />

      <button className='ml-4 mb-2 h-12 w-40 border rounded-lg py-2 bg-red-600 text-white text-md' onClick={generarReportePDF} >Generar Reporte PDF</button>

      {mostrarResumen && (
        <PDFViewer width="100%" height={600}>
          <Document>
            <Page>
              <View style={styles.section}>
              <Text style={styles.heading}>Resumen de Datos:</Text>
                <Text style={styles.greenBackground}>Información del Cliente</Text>
                <Text style={styles.text}>Nombre: {datosCliente.nombre}</Text>
                <Text style={styles.text}>Telefono: {datosCliente.telefono}</Text>
                <Text style={styles.text}>Licencia de Conducir: {datosCliente.licencia}</Text>
                <Text style={styles.text}>Direccion: {datosCliente.direccion}</Text>
                <Text style={styles.text}>Correo Electronico: {datosCliente.correo}</Text>
                <Text style={styles.greenBackground}>Información del Vehículo</Text>
                <Text style={styles.text}>Vehiculo: {datosVehiculo.vehiculo}</Text>
                <Text style={styles.text}>Marca: {datosVehiculo.marca}</Text>
                <Text style={styles.text}>Modelo: {datosVehiculo.modelo}</Text>
                <Text style={styles.text}>Placas: {datosVehiculo.placas}</Text>
                <Text style={styles.text}>Capacidad en Toneladas: {datosVehiculo.capacidadton}</Text>
                <Text style={styles.text}>Capacidad de Pasajeros: {datosVehiculo.pasajeros}</Text>
                <Text style={styles.text}>No. Motor: {datosVehiculo.motor}</Text>
                <Text style={styles.text}>CVU: {datosVehiculo.cvu}</Text>
                <Text style={styles.greenBackground}>Datos del Mantenimiento</Text>
                <Text style={styles.text}>Fecha de Mantenimiento: {datosMantenimiento.fecha}</Text>
                <Text style={styles.text}>Tipo de Mantenimiento: {datosMantenimiento.tipo}</Text>
                <Text style={styles.text}>Descripcion del Mantenimiento: {datosMantenimiento.descripcion}</Text>
                <Text style={styles.text}>Kilometraje del ultimo mantenimiento Mantenimiento: {datosMantenimiento.kilometraje}</Text>
                <Text style={styles.text}>Conductor que confirma el mantenimiento realizado: {datosMantenimiento.conductor}</Text>
                <Text style={styles.text}>Proveedor que realiza el mantenimiento: {datosMantenimiento.proveedor}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
}

export default App;
