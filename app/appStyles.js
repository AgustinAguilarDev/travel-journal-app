
import { StyleSheet } from "react-native";
// App shared StyleSheet
const styles = StyleSheet.create({
    buttons: {
        marginTop:50
    },
    pressable: {
        backgroundColor: '#007bff',
        margin: 15,
        padding: 20,
        borderRadius: 5,
        width: 120,
        alignSelf:'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    lightViolet: {
        backgroundColor: "#B38CB4",
    },
    lightBrown:{
        backgroundColor: "#C5A48A",
    },
    text: {
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
    },
    view : {
        padding: 5,
        paddingTop: 20,
        alignContent:'center',
        justifyContent: 'center'
    }
});

export default styles;