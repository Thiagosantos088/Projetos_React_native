import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";


export default props =>{
    return(
        <SafeAreaView style={Style.fundo}>
            <Text style={Style.texto} onPress={() => props.navigation.navigate('Paris')}>Paris</Text>
            <Text  style={Style.texto}onPress={() => props.navigation.navigate('Berlim')}>Berlim</Text>
            <Text style={Style.texto} onPress={() => props.navigation.navigate('Madrid')}>Madrid</Text>
        </SafeAreaView>
    )
}

const Style =  StyleSheet.create(
    {
       texto: { 
      fontSize:22,
      color: "black",
      margin:10
           

    },
    fundo: {
        backgroundColor: '#F5DD61',
        flex: 1
    }
    }
)