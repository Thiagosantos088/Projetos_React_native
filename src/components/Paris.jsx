import React from "react";
import { Text, Button, SafeAreaView, StyleSheet} from "react-native";
import Estilo from "./Estilo";

export default props =>{
    return(
        <SafeAreaView style={Estilo.fundo}>
            <Text style={style.texto}>Sem Localização nesta cidade!</Text>
            <Button title="Ver pontos turisticos" onPress={() => props.navigation.navigate('TurisParis')} />        
            </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        texto: {
            margin:20,
            fontSize:20
        }
    }
)