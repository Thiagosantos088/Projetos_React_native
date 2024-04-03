import React from "react";
import { Text, TextInput, View, Button, StyleSheet, ImageBackground} from "react-native";
import Estilo from "./Estilo";


export default props => {
    return(
        <View style={Estilo.fundo} >
            <Text style={style.texto}>Cidades</Text>
            <TextInput style={style.botoes} placeholder="Usuario" value="Login" />
            <TextInput style={style.botoes} placeholder="Senha" value="Senha" keyboardType="numeric"/>
            <Button title="Entrar" onPress={() => props.navigation.navigate('Cidades')} />

        </View>
    )
}

const style = StyleSheet.create(
    {
        botoes: {
            backgroundColor: 'white',
            paddingRight:200,
            margin:20,
            borderRadius: 15
        },
        entrar: {
            backgroundColor: 'balck'
        },
        texto: {
            fontSize: 26,
            margin: 50
        }
    }
)

