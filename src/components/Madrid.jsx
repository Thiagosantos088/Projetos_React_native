import React from "react";
import { Text, Button, SafeAreaView} from "react-native";

export default props =>{
    return(
        <SafeAreaView>
            <Text>teste</Text>
            <Button title="Ver pontos turisticos" onPress={() => props.navigation.navigate('TurisMadrid')} />        
            </SafeAreaView>
    )
}