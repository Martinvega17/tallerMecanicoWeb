import { useState } from 'react';
import { Document, Page, Text, View, PDFViewer, StyleSheet, Font } from '@react-pdf/renderer';
import ClienteForm from './components/ClienteForm';
import VehiculoForm from './components/VehiculoForm';
import MantenimietoForm from './components/MantenimientoForm';
import ElaboradoForm from './components/ElaboradoForm';
import LatoBold from './fonts/Lato-Bold.ttf';

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
  text: {
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
  text1: {
    fontSize: 14,
    marginBottom: 5,
    border: '1px solid #E5E7EB', // Color del borde similar al de la página web
    padding: 4,
    flexDirection: 'row', // Cambio a flex-direction: row
    justifyContent: 'space-between', // Alineación entre elementos
    columnGap: 10,
  },
});


function App() {
  const [datosCliente, setDatosCliente] = useState({});
  const [datosVehiculo, setDatosVehiculo] = useState({});
  const [datosMantenimiento, setDatosMantenimiento] = useState({});
  const [datosElaborado, setDatosElaborado] = useState({});
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const generarReportePDF = () => {
    setMostrarResumen(true);
  };

  return (
    <div>
      <h1 className='text-center text-2xl mt-2 font-bold mb-4'>REPORTE DE INSPECCION DEL VEHICULO</h1>

      <ClienteForm setDatosCliente={setDatosCliente} />
      <VehiculoForm setDatosVehiculo={setDatosVehiculo} />
      <MantenimietoForm setDatosMantenimiento={setDatosMantenimiento} />
      <ElaboradoForm setDatosElaborado={setDatosElaborado} />

      <button className='ml-4 mb-2 h-12 w-40 border rounded-lg py-2 bg-red-600 text-white text-md' onClick={generarReportePDF} >Generar Reporte PDF</button>

      {mostrarResumen && (
        <PDFViewer width="100%" height={600}>
          <Document>
            <Page>
              <View style={styles.section}>
                <Text style={styles.heading}>PROCESO DE INFRAESTRUCTURA:</Text>
                <Text style={styles.heading}>INFORME MENSUAL DE MANTENIMIENTO VEHICULAR:</Text>
                <Text style={styles.greenBackground}>INFORMACION DEL CLIENTE</Text>
                <View style={styles.text}>
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
                <Text style={styles.greenBackground}>INFORMACION DEL VEHICULO</Text>
                <Text style={styles.text1}>
                  <Text style={styles.text}>Vehiculo: </Text>
                  <Text style={styles.text1}>{datosVehiculo.vehiculo}</Text>
                </Text>
                <Text style={styles.text}>Marca: {datosVehiculo.marca}</Text>
                <Text style={styles.text}>Modelo: {datosVehiculo.modelo} </Text>
                <Text style={styles.text}>Placas: {datosVehiculo.placas}</Text>
                <Text style={styles.text}>Capacidad en Toneladas: {datosVehiculo.capacidadton}</Text>
                <Text style={styles.text}>Capacidad de Pasajeros: {datosVehiculo.pasajeros}</Text>
                <Text style={styles.text}>No. Motor: {datosVehiculo.motor}</Text>
                <Text style={styles.text}>CVU: {datosVehiculo.cvu}</Text>
                <Text style={styles.greenBackground}>DATOS DEL MANTENIMIENTO</Text>
                <Text style={styles.text}>Fecha de Mantenimiento: {datosMantenimiento.fecha}</Text>
                <Text style={styles.text}>Tipo de Mantenimiento: {datosMantenimiento.tipo}</Text>
                <Text style={styles.text}>Descripcion del Mantenimiento: {datosMantenimiento.descripcion}</Text>
                <Text style={styles.text}>Kilometraje del ultimo mantenimiento Mantenimiento: {datosMantenimiento.kilometraje}</Text>
                <Text style={styles.text}>Conductor que confirma el mantenimiento realizado: {datosMantenimiento.conductor}</Text>
                <Text style={styles.text}>Proveedor que realiza el mantenimiento: {datosMantenimiento.proveedor}</Text>
                <Text style={styles.greenBackground}>ELABORADO POR</Text>
                <Text style={styles.text}>Nombre: {datosElaborado.elaboradonombre}</Text>
                <Text style={styles.text}>Cargo: {datosElaborado.elaboradocargo}</Text>
                <Text style={styles.text}>Firma: {datosElaborado.elaboradofirma}</Text>
                <Text style={styles.greenBackground}>REVISADO POR</Text>
                <Text style={styles.text}>Nombre: {datosElaborado.revisadonombre}</Text>
                <Text style={styles.text}>Cargo: {datosElaborado.revisadocargo}</Text>
                <Text style={styles.text}>Firma: {datosElaborado.revisadofirma}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
}

export default App;
