import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    return(
        <View style={style.fundo}>
        <Text style={style.texto}>Portão de Brandemburgo</Text>
        <Text style={style.texto}>Memorial do Holocausto</Text>
        <Text style={style.texto}>Muro de Berlim</Text>
        <Text style={style.texto}>Arco do Triunfo</Text>
        </View>
    )
}

const style = StyleSheet.create (
    {
        texto: {
            
            fontSize:20,
            margin:10
        },
        fundo: {
            backgroundColor: '#F5DD61',
            flex:1

        }
    }
)