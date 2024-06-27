import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#2B2C34",
    },
    quad: {
        width: '100%',
        height: 400,
        backgroundColor: '#6246EA',
        borderRadius: 10,
        top: 20,
        gap: 10,
    },
    quad2: {
        width: '100%',
        padding: 20,
        backgroundColor: '#D1D1E9',
        borderRadius: 10,
        marginBottom: 90,
        gap: 20,
        top: 40,
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        color: '#2B2C34',
        fontWeight: 'bold',
    },
    content: {
        textAlign: 'center',
        fontSize: 16,
        color: '#D1D1E9'
    },
    containerimagelogo:{
        alignItems: "center",
        marginBottom: 20,

    },
    imagelogo: {
        padding: 25,
        width: "25%",
        height: 100,
        top: '14%',
    },
    imagefoto: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    text: {
        marginTop: 10,
        fontSize: 15,
        color: '#2B2C34',
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D1D1E9',
    },

});

export default styles;