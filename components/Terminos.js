import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function Terminos({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.texto}>
          Este acuerdo describe los términos y condiciones generales (en
          adelante, “TÉRMINOS Y CONDICIONES") aplicables a la adquisición de los
          productos y servicios ofrecidos a través de esta aplicación.
        </Text>
        <Text style={styles.texto}>
          healthforms ofrecerá intercambio de información a través de esta
          aplicación bajo algunas condiciones detalladas más adelante. Por lo
          que te recomendamos que leas a detalle cada punto explicado ya que al
          adquirir alguno de nuestros servicios asumiremos que estás de acuerdo
          con nuestros términos y condiciones.Los Términos y Condiciones
          establecidos pueden estar sujetos a cambios, ajustes y modificaciones.
          Dado a que éstos podrán ser actualizados y una vez reflejados los
          cambios en la aplicación, aceptarás estar de acuerdo a ello. Una vez
          realizadas estas actualizaciones serán publicadas dentro de nuestro
          sitio web.
        </Text>
        <Text style={styles.titulo2}>DEL USUARIO</Text>
        <Text style={styles.texto}>
          El acceso o utilización de la aplicación así como los recursos
          habilitados para interactuar entre los USUARIOS, o entre el USUARIO y
          el TITULAR tales como medios para realizar publicaciones o
          comentarios, confiere la condición de USUARIO de la aplicación, por lo
          que quedará sujeto a los presentes TÉRMINOS Y CONDICIONES, así como a
          sus ulteriores modificaciones, sin perjuicio de la aplicación de la
          legislación aplicable, por tanto, se tendrán por aceptados desde el
          momento en el que se accede al SITIO WEB. Dada la importancia de lo
          anterior, se recomienda al USUARIO revisar las actualizaciones que se
          realicen a los presentes TÉRMINOS Y CONDICIONES, la moral o el orden
          público, y se abstendrá de realizar cualquier acto que pueda suponer
          una afectación a los derechos de terceros, o perjudique de algún modo
          el funcionamiento de la aplicación.Así mismo, el USUARIO se compromete
          a proporcionar información lícita y veraz en los formularios
          habilitados en la aplicación, en los cuales el USUARIO tenga que
          proporcionar ciertos datos o información para el acceso a algún
          contenido, producto o servicio ofrecido por el propio SITIO WEB.Al
          tratarse de un SITIO WEB dirigido exclusivamente a personas que
          cuenten con la mayoría de edad, el USUARIO manifiesta ser mayor de
          edad o estar bajo la supervisión de un tutor y disponer de la
          capacidad jurídica necesaria para sujetarse a los presentes TÉRMINOS Y
          CONDICIONES.
        </Text>
        <Text style={styles.titulo2}>DEL PRODUCTO</Text>
        <Text style={styles.texto}>
          Los servicios ofrecidos a través de la aplicación por healthforms son
          los siguientes:
        </Text>
        <Text style={styles.texto}>• Compartir información personal</Text>
        <Text style={styles.texto}>
          • Guardar información personal en nuestro sistema
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
  },
  titulo2: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 25,
  },
  texto: {
    fontSize: 15,
    marginTop: 10,
  },
});
