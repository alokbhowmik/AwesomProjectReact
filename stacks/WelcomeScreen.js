import React from 'react';
import {
    View, Text,
    StyleSheet,
    Button
} from 'react-native';

const WelcomeScreen = ({ props, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>WelcomeScreen</Text>
            <Button title="goto next screen" onPress={() => {
                navigation.navigate('Main')
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    }
})


export default WelcomeScreen;