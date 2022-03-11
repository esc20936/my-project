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
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="UserLogin" component={UserLogin} options={{headerShown: false,}}/> 
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CreateProfile"  component={CreateProfile} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile"  component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="FormInfo"  component={FormInfo} options={{ headerShown: false }} />
        <Stack.Screen name="ShareForm"  component={ShareForm} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
