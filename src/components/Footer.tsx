import React from "react";
import { StyleSheet,  Text, View } from "react-native";

function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer} >
        <Text style={styles.footerText} >App Exemplo</Text>
    </View>
    );

}
const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical:10
    },
    footerIcon: {
        width: 30,
        height:30
    },
    footerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
    
});

export default Footer;