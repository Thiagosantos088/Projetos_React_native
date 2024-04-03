import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    return(
        <View style={style.texto}>
        <Text>Torre Eiffel</Text>
        <Text>Stade de France</Text>
        <Text>Museu do Louvre</Text>
        <Text>Arco do Triunfo</Text>
        </View>
    )
}

const style = StyleSheet.create (
    {
        texto: {
            flex: 1,
            fontSize:44
        }
    }
)