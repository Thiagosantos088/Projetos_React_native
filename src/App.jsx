import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Login from "./components/Login";
import Cidades from "./components/Cidades";
import Paris from "./components/Paris";
import ConteudoParis from "./components/ConteudoParis";
import Berlim from "./components/Berlim";
import Madrid from "./components/Madrid";
import ConteudoMadrid from "./components/ConteudoMadrid";
import ConteudoBerlim from "./components/ConteudoBerlim";



const Stack = createNativeStackNavigator();

export default props =>{
    return (
   <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login}options={{title: 'Cidades'}}></Stack.Screen>
         <Stack.Screen name="Cidades" component={Cidades}options={{title: 'Cidades'}}></Stack.Screen>
         <Stack.Screen name="Paris" component={Paris}options={{title: 'Paris'}}></Stack.Screen>
         <Stack.Screen name="Berlim" component={Berlim}options={{title: 'Berlim'}}></Stack.Screen>
         <Stack.Screen name="Madrid" component={Madrid}options={{title: 'Madrid'}}></Stack.Screen>
         <Stack.Screen name="TurisMadrid" component={ConteudoMadrid}options={{title: 'Madrid'}}></Stack.Screen>
         <Stack.Screen name="TurisBerlim" component={ConteudoBerlim}options={{title: 'Berlim'}}></Stack.Screen>
         <Stack.Screen name="TurisParis" component={ConteudoParis}options={{title: 'Paris'}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
   </SafeAreaView>
    )
}