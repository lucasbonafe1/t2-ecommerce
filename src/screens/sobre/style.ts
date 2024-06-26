import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "black",
    },
    quad: {
        width: '100%',
        padding: 23,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        top: 8,
    },
    quad2: {
        width: '100%',
        padding: 23,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        top: 15,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold'
    },
    content: {
        textAlign: 'center',
        fontSize: 17,
        color: '#000'
    },
    imagelogo: {
        paddingTop: 25,
        width: "25%",
        height: 100,
        top: '1%',
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
    button8: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        marginTop: 10,
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },

});

export default styles;