import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    containerSearch:{
        height: 35,
        width: 350,
        bottom: 20,
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
        top:"8%"
    },
    iconSearch:{
        marginLeft: "89%",
        top: "12%",
        position: "absolute"
    }
});

export default styles;