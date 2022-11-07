import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "./hooks/useTogglePasswordVisibility";
import { auth } from "./firebase.js";

export default function UserLogin({ navigation }) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mailSubmitting, setMailSubmitting] = useState(false);

  const handleLogin = () => {
    setMailSubmitting(true);
    auth
      .signInWithEmailAndPassword(username.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        let name = username.split(".")[0];
        name = name.split("@")[0];
        name = name.charAt(0).toUpperCase() + name.slice(1);
        let email = username;
        setMailSubmitting(false);
        navigation.navigate("Home", { email, name });
      })
      .catch((err) => {
        setMailSubmitting(false);
        alert(err.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO AREA */}
      <View style={styles.logo}>
        <Text style={styles.logoText1}>Health</Text>
        <Text style={styles.logoText2}>Forms</Text>
      </View>

      {/** Area de Inputs */}
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          placeholderTextColor="#fff"
        />

        {/* Area del input contrasena */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            name="password"
            placeholder="Contraseña"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#fff"
          />

          {/* Area del icono */}
          <Pressable
            onPress={handlePasswordVisibility}
            style={{ top: 10, right: 20 }}
          >
            <MaterialCommunityIcons
              name={rightIcon}
              size={28}
              color="#f5f5f5"
            />
          </Pressable>
        </View>

        {/* Iniciar Sesion */}
        {!mailSubmitting && (
          <TouchableOpacity style={styles.logInButton} onPress={handleLogin}>
            <Text style={{ color: "white" }}>Iniciar Sesión</Text>
          </TouchableOpacity>
        )}

        {mailSubmitting && (
          <TouchableOpacity
            style={[
              styles.logInButton,
              {
                marginTop: 0,
                flexDirection: "row",
                justifyContent: "space-around",
              },
            ]}
            disabled={true}
          >
            <ActivityIndicator size={24} color="white" />
          </TouchableOpacity>
        )}

        {/* Crear Perfil */}
        <TouchableOpacity
          style={[
            styles.logInButton,
            { marginTop: 20, backgroundColor: "#143590" },
          ]}
          onPress={() => {
            navigation.navigate("CreateProfile");
          }}
        >
          <Text style={{ color: "#fff" }}>Crear perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#143590",
  },
  logo: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  logoImg: {
    resizeMode: "center",
    width: 250,
    height: 50,
    bottom: 0,
    backgroundColor: "#fff",
  },
  containerInputs: {
    flex: 0.5,
    backgroundColor: "#143590",
    width: "80%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#143590",
    marginTop: 50,
    height: 40,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "80%",
    color: "#fff",
  },
  logInButton: {
    width: "80%",
    height: 40,
    borderRadius: 15,
    backgroundColor: "#0657a2",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 60,
    color: "#fff",
  },

  inputContainer: {
    marginTop: 10,
    backgroundColor: "#143590",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
  },
  inputField: {
    backgroundColor: "#143590",
    marginTop: 20,
    height: 40,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "100%",
    color: "white",
  },
  googleButtonContainer: {
    backgroundColor: "red",
  },
  logoText1: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  logoText2: {
    fontSize: 40,
    color: "#00c9cc",
    fontWeight: "bold",
  },
});
