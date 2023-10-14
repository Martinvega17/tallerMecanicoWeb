import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,

} from "@react-pdf/renderer";
import ClienteForm from "./components/ClienteForm";
import VehiculoForm from "./components/VehiculoForm";
import MantenimietoForm from "./components/MantenimientoForm";
import ElaboradoForm from "./components/ElaboradoForm";
import LatoBold from "./fonts/Lato-Bold.ttf";
import vehicle from "./assets/images/vehicle1.png";

// Registra la fuente en React PDF Renderer
Font.register({ family: "Lato-Bold", src: LatoBold });
const styles = StyleSheet.create({
  section: {
    margin: 20, // Aumentar el margen
    padding: 20, // Aumentar el relleno
    backgroundColor: "#FFFFFF", // Fondo blanco
    border: "1pt solid #000000", // Borde negro
    fontFamily: "Lato-Bold", // Fuente negrita
  },
  heading: {
    fontSize: 24, // Aumentar el tamaño del encabezado
    marginBottom: 20, // Aumentar el margen inferior
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 12, // Aumentar el tamaño del texto
    marginBottom: 10, // Aumentar el margen inferior
    border: "1pt solid #000000", // Borde negro
    padding: 6, // Aumentar el relleno
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 20, // Aumentar el espacio entre columnas
  },
  blueBackground: {
    backgroundColor: "#0150FE",
    color: "white",
    padding: 10, // Aumentar el relleno
    fontFamily: "Lato-Bold",
    marginBottom: 10, // Aumentar el margen inferior
    textAlign: "center",
    fontSize: 20, // Aumentar el tamaño del fondo azul
    fontWeight: "bold",
  },
  column: {
    display: "flex",
    marginTop: 20, // Aumentar el margen superior
  },
  textContainer: {
    columnCount: 2,
    columnGap: "30px", // Aumentar el espacio entre columnas
    fontSize: 16, // Aumentar el tamaño del texto dentro del contenedor
    marginBottom: "15px",
    display: "flex",
  },
  text1: {
    fontSize: 16,
    flexDirection: "row",
    marginRight: "20px", // Aumentar el margen derecho
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  title: {
    fontSize: 16,
    flexDirection: "row",
    fontFamily: "Lato-Bold",
    padding: "none",
    border: "none",
    marginRight: "20px",
  },
  semaforo: {
    width: 16, // Aumentar el tamaño del círculo
    height: 16,
    borderRadius: 8, // Hacer el círculo más redondo
    marginRight: "8px", // Aumentar el espacio entre el círculo y el texto
  },
  semaforoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});


function App() {
  const [datosCliente, setDatosCliente] = useState({});
  const [datosVehiculo, setDatosVehiculo] = useState({});
  const [datosMantenimiento, setDatosMantenimiento] = useState({
    // Inicializa los valores de los checkboxes en false
    verdeChecked: false,
    amarilloChecked: false,
    rojoChecked: false,
  });
  const [datosElaborado, setDatosElaborado] = useState({});

  const generarReportePDF = async () => {


    const pdfBlob = await pdf(
      <Document>
        <Page>
          <View style={styles.section}>
            <Text style={styles.heading}>REPORTE DE INSPECCION VEHICULAR:</Text>
            {generateSection("INFORMACION DEL CLIENTE", datosCliente)}
            {generateSection("INFORMACION DEL VEHICULO", datosVehiculo)}
            {generateSection("DATOS DEL MANTENIMIENTO", datosMantenimiento)}
            {generateSection("ELABORADO POR", datosElaborado)}
            {generateSection("REVISADO POR", datosElaborado)}
          </View>
        </Page>
      </Document>
    ).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "reporte.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(pdfUrl);
  };

  const generateSection = (title, data) => (
    <React.Fragment>
      <Text style={styles.blueBackground}>{title}</Text>
      {Object.entries(data).map(([key, value]) => (
        <Text style={styles.text1} key={key}>
          <Text style={styles.title}>{key}: </Text>
          <Text style={styles.text1}>{value}</Text>
        </Text>
      ))}
    </React.Fragment>
  );
  


  return (
    <div>
      <h1 className="text-center text-2xl mt-2 font-bold mb-4">
        VEHICLE INSPECTION REPORT
      </h1>

      <ClienteForm setDatosCliente={setDatosCliente} />
      <div className=" justify-center justify-items-center flex">
        <img src={vehicle} style={styles.image} />
      </div>
      <VehiculoForm setDatosVehiculo={setDatosVehiculo} />
      <MantenimietoForm
        setDatosMantenimiento={setDatosMantenimiento}
      />
      <ElaboradoForm setDatosElaborado={setDatosElaborado} />

      <button
        className="ml-4 mb-2 h-12 w-40 border rounded-lg py-2 bg-red-600 text-white text-md"
        onClick={generarReportePDF}
      >
        Generate PDF Report
      </button>
    </div>
  );
}
export default App;
