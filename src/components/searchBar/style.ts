import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    containerSearch:{
        height: 50,
        width: 350,
        marginBottom: 12,
        borderRadius: 40,
        fontSize: 16,
        backgroundColor: "white",
        borderBottomColor: '#D1D1E9',
        color: '#D1D1E9',
        position: "relative"
    },
    textInput:{
        width: "100%",
        left: 20,
        top:"15%"
    },
    iconSearch:{
        marginLeft: "89%",
        top: "25%",
        position: "absolute"
    }
});

export default styles;