import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "./hooks/useTogglePasswordVisibility";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfile({ navigation, route }) {
  if(route){
    const { name, email, photoUrl } = route.params;

    const AvatarImg = photoUrl
      ? { uri: photoUrl }
      : require("../assets/src/icons/avatar.png");
    const AvatarEmail = email ? email : "Aun no se registra un correo";

    const pswUtils = useTogglePasswordVisibility();
    const passwordVisibility = pswUtils.passwordVisibility;
    const rightIcon = pswUtils.rightIcon;
    const handlePasswordVisibility = pswUtils.handlePasswordVisibility;

    const pswUtils2 = useTogglePasswordVisibility();
    const passwordVisibility2 = pswUtils2.passwordVisibility;

    const handlePasswordVisibility2 = pswUtils2.handlePasswordVisibility;

    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");
    const [username, setUsername] = useState(name);
    const [DPI, setEmail] = useState(0);

    return (
      <SafeAreaView style={styles.container}>
        {/**LOGO AREA */}
        <View style={styles.userInfoContainer}>
          <View
            style={{
              flexDirection: "row",
              flex: 0.9,
              backgroundColor: "#fff",
              alignItems: "center",
            }}
          >
            <View style={styles.userImageContainer}>
              <Image source={AvatarImg} style={styles.userImage} />
            </View>
            <View style={styles.userTextInfoContainer}>
              <Text style={styles.userNameText}>{name}</Text>
              <Text style={styles.userInfoText}>{AvatarEmail}</Text>
            </View>
          </View>
        
        </View>
        {/** Area de Inputs */}
        <View style={styles.containerInputs}>
          <TextInput
            style={[styles.input, { marginTop: 20 }]}
            placeholder="Usuario"
            value={username}
          />

          <TextInput
            style={[styles.input, { marginTop: 20 }]}
            placeholder="Email"
            value={email}
            keyboardType={"email-address"}
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
            />

            {/* Area del icono */}
            <Pressable
              onPress={handlePasswordVisibility}
              style={{ top: 0, right: 20 }}
            >
              <MaterialCommunityIcons
                name={rightIcon}
                size={28}
                color="#232323"
              />
            </Pressable>
          </View>

          {/* Area del input contrasena */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              name="password"
              placeholder="Confirmar Contraseña"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility2}
              value={passwordC}
              enablesReturnKeyAutomatically
            />

            {/* Area del icono */}
            <Pressable
              onPress={handlePasswordVisibility2}
              style={{ top: 0, right: 20 }}
            >
              <MaterialCommunityIcons
                name={rightIcon}
                size={28}
                color="#232323"
              />
            </Pressable>
          </View>
        </View>

        {/* Iniciar Sesion */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.logInButton}
           

          >
            <Text style={{ color: "white" }}> Guardar </Text>
          </TouchableOpacity>

          {/* Crear Perfil */}
          <TouchableOpacity
            style={[
              styles.logInButton,
              { marginTop: 20, backgroundColor: "white" },
            ]}
            hitSlop={{ backgroundColor: "red" }}
          
          >
            <Text style={{ color: "black" }}>Volver</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }else{
    return(
      <View>
        <Text>error</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    // marginTop: (Platform.OS === "android")? 20:0,
  },
  userInfoContainer: {
    flex: 0.15,
    backgroundColor: "white",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  userImageContainer: {
    left: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 150,
  },
  userTextInfoContainer: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "flex-start",
    marginLeft: 20,
    maxWidth: 200,
  },
  userNameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userInfoText: {
    fontSize: 13,
    color: "#616161",
  },
  settingsIcon: {
    backgroundColor: "#fff",
    right: 20,
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
    backgroundColor: "#fff",
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    flex: 0.3,
    alignItems: "center",
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 50,
    height: 40,
    borderBottomColor: "#143590",
    borderBottomWidth: 1,
    width: "80%",
  },
  logInButton: {
    width: "80%",
    height: 40,
    borderRadius: 15,
    backgroundColor: "#143590",
    justifyContent: "center",
    alignItems: "center",

    top: 60,
    color: "#fff",
  },

  inputContainer: {
    marginTop: 20,
    backgroundColor: "white",
    width: "80%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
  },
  inputField: {
    backgroundColor: "#fff",
    marginTop: 0,
    height: 40,
    borderBottomColor: "#143590",
    borderBottomWidth: 1,
    width: "100%",
  },
  logoText1: {
    fontSize: 40,
    color: "#29abe2",
    fontWeight: "bold",
  },
  logoText2: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
