import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab'

export const Contador = () => {

    const [contador, setcontador] = useState(15)

    if (contador < 0) {
        setcontador(0);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador:{contador}

            </Text>




            <Fab title="+1" onPress={() => setcontador(contador + 1)} position="br" />
            <Fab title="-1" onPress={() => setcontador(contador - 1)} position="bl" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center'

    },
    button: {
        backgroundColor: 'red',
        borderRadius: 100

    }, title: {
        fontSize: 25,
        alignContent: 'center',
        textAlign: 'center'
    }
});