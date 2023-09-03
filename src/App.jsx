import { useState } from 'react';
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
  text: {
    fontSize: 10,
    marginBottom: 5,
    border: '1px solid #E5E7EB', // Color del borde similar al de la página web
    padding: 4,
    flexDirection: 'row', // Cambio a flex-direction: row
    justifyContent: 'space-between', // Alineación entre elementos
    columnGap: 10,
    fontFamily: 'Lato-Bold', // Usa la fuente registrada
    marginTop: 10,
  },
  blueBackground: {
    backgroundColor: '#0150FE', // Color de fondo azul similar al de la página web
    color: 'white',
    padding: 5,
    fontFamily: 'Lato-Bold', // Usa la fuente registrada
    marginBottom: 5,
    textAlign: 'center', // Centrar el texto
    fontSize: 16,
    fontWeight: 'bold',
  },
  column: {
    display: 'flex', // Muestra las columnas una al lado de la otra
    marginTop: 10,
  },
  textContainer: {
    columnCount: 2, // Establecer el número de columnas
    columnGap: '20px', // Espacio entre las columnas
    fontSize: 14,
    marginBottom: '10px', // Agrega un margen inferior para separar del siguiente contenido
    display: 'flex', // Muestra las columnas una al lado de la otra
  },
  text1: {
    fontSize: 14,
    flexDirection: 'row', // Cambio a flex-direction: row
    marginRight: '10px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  title: {
    fontSize: 14,
    flexDirection: 'row', // Cambio a flex-direction: row
    fontFamily: 'Lato-Bold', // Usa la fuente registrada
    padding: 'none',
    border: 'none',
    marginRight: '10px',
  },
  semaforo: {
    width: 14,  // Ancho del círculo
    height: 14, // Altura del círculo
    borderRadius: 0, // Hace que sea un círculo con la mitad del ancho/alto
    marginRight: '6px', // Espacio entre el círculo y el texto
    position: 'block', // Permite posicionar el texto sobre el círculo
  },
  semaforoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


function App() {
  const [datosCliente, setDatosCliente] = useState({});
  const [datosVehiculo, setDatosVehiculo] = useState({});
  const [datosMantenimiento, setDatosMantenimiento] = useState({});
  const [datosElaborado, setDatosElaborado] = useState({});




  const generarReportePDF = async () => {
    /*  // Realiza la validación de los campos requeridos aquí
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
     } */
    const pdfBlob = await pdf(<Document>
      <Page>
        <View style={styles.section}>
          <Text style={styles.heading}>REPORTE DE INSPECCION VEHICULAR:</Text>
          <Text style={styles.blueBackground}>INFORMACION DEL CLIENTE</Text>
          <View style={styles.text1}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>
                <Text style={styles.title}>Proveedor: </Text>
                <Text style={styles.text1}>{datosCliente.proveedor}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Cliente: </Text>
                <Text style={styles.text1}>{datosCliente.cliente}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Kilometraje: </Text>
                <Text style={styles.text1}>{datosCliente.kilometraje}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Marca: </Text>
                <Text style={styles.text1}>{datosCliente.marca}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Modelo: </Text>
                <Text style={styles.text1}>{datosCliente.modelo}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>VIN: </Text>
                <Text style={styles.text1}>{datosCliente.vin}</Text>
              </Text>

            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>
                <Text style={styles.title}>Fecha: </Text>
                <Text style={styles.text1}>{datosCliente.fecha}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Tecnico: </Text>
                <Text style={styles.text1}>{datosCliente.tecnico}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Telefono: </Text>
                <Text style={styles.text1}>{datosCliente.telefono}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Direccion: </Text>
                <Text style={styles.text1}>{datosCliente.direccion}</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.title}>Correo Electronico: </Text>
                <Text style={styles.text1}>{datosCliente.correo}</Text>
              </Text>
            </View>
          </View>
          <View style={styles.text1}>
            <View style={styles.column}>
              <View style={styles.semaforoContainer}>
                <View style={[styles.semaforo, { backgroundColor: '#3A9A4A' }]} />
                <Text style={styles.text}>CHECKED AND OKEY</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.semaforoContainer}>
                <View style={[styles.semaforo, { backgroundColor: '#FACB02' }]} />
                <Text style={styles.text}>MAY NEED FUTURE ATTENTION</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.semaforoContainer}>
                <View style={[styles.semaforo, { backgroundColor: '#DC0C14' }]} />
                <Text style={styles.text}>REQUIRES INMEDIATE ATTENTION</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image src={vehicle} style={styles.image} />
          </View>

          <Text style={styles.blueBackground}>INFORMACION DEL VEHICULO</Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Marca: </Text>
            <Text style={styles.text1}>{datosVehiculo.marca}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Modelo: </Text>
            <Text style={styles.text1}>{datosVehiculo.modelo}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Placas: </Text>
            <Text style={styles.text1}>{datosVehiculo.placas}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Capacidad en Toneladas: </Text>
            <Text style={styles.text1}>{datosVehiculo.capacidadton}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Capacidad de Pasajeros: </Text>
            <Text style={styles.text1}>{datosVehiculo.pasajeros}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>No. de Motor: </Text>
            <Text style={styles.text1}>{datosVehiculo.motor}</Text>
          </Text>
          <Text style={styles.blueBackground}>DATOS DEL MANTENIMIENTO</Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Fecha de Mantenimiento: </Text>
            <Text style={styles.text1}>{datosMantenimiento.descripcion}</Text>
          </Text>
          <Text style={styles.blueBackground}>ELABORADO POR</Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Nombre: </Text>
            <Text style={styles.text1}>{datosElaborado.elaboradonombre}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Cargo: </Text>
            <Text style={styles.text1}>{datosElaborado.elaboradocargo}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Firma: </Text>
            <Text style={styles.text1}>{datosElaborado.elaboradofirma}</Text>
          </Text>
          <Text style={styles.blueBackground}>REVISADO POR</Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Nombre: </Text>
            <Text style={styles.text1}>{datosElaborado.elaboradonombre}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Cargo: </Text>
            <Text style={styles.text1}>{datosElaborado.elaboradocargo}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.title}>Firma: </Text>
            <Text style={styles.text1}>{datosElaborado.elaboradofirma}</Text>
          </Text>
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
        setDatosMantenimiento={setDatosMantenimiento} // Pass the function here
      />
      <ElaboradoForm setDatosElaborado={setDatosElaborado} />



      <button className='ml-4 mb-2 h-12 w-40 border rounded-lg py-2 bg-red-600 text-white text-md' onClick={generarReportePDF}>Generar Reporte PDF</button>

    </div>
  );
}
export default App;