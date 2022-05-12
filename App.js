import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home.js";
import UserLogin from "./components/UserLogin.js";
import CreateProfile from "./components/CreateProfile.js";
import EditProfile from "./components/EditProfile.js";
import FormInfo from "./components/FormInfo.js";
import ShareForm from "./components/ShareForm.js";
import Camara from "./components/Camara.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react/cjs/react.production.min';
import AppIntroduction from './components/AppIntroduction.js'
import CreateForm from "./components/CreateForm.js";
const Stack = createNativeStackNavigator();

function App() {

  const [pV,setPV] = useState(false);

  const firstTime = async () => {
    try {
      const value = await AsyncStorage.getItem('primeraVez')
      if(value !== null) {
        // value previously stored
        return false;
      }else{
        return true;
      }
    } catch(e) {
      // error reading value
      console.log(e.message);
    }
  }
  // useEffect(() => {
  //   if(firstTime()){
  //     setPV(true);
  //   }else{
  //     setPV(false);
  //   }
  // });
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppIntroduction" component={AppIntroduction} options={{ headerShown: false}}/>
        <Stack.Screen name="UserLogin" component={UserLogin} options={{headerShown: false,}}/> 
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CreateProfile"  component={CreateProfile} options={{ headerShown: true, title: 'Crear perfil'}} />
        <Stack.Screen name="EditProfile"  component={EditProfile} options={{ headerShown: true, title: 'Editar perfil'}} />
        <Stack.Screen name="FormInfo"  component={FormInfo} options={{ headerShown: true, title: 'Formulario'}} />
        <Stack.Screen name="ShareForm"  component={ShareForm} options={{ headerShown: true, title: 'Compartir perfil' }}/>
        <Stack.Screen name="Camara"  component={Camara} options={{ headerShown: true, title:'Escanear formulario' }}/>
        <Stack.Screen name="CreateForm"  component={CreateForm} options={{ headerShown: true, title:'Crear formulario' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
