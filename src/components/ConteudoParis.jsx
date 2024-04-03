import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    return(
        <View style={style.fundo}>
        <Text style={style.texto}>Torre Eiffel</Text>
        <Text style={style.texto}>Stade de France</Text>
        <Text style={style.texto}>Museu do Louvre</Text>
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

