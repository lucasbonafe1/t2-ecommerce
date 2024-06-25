import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232323",
    },
    quad: {
        backgroundColor: "#232323",
        paddingVertical: 6,
    },
    quad2: {
        backgroundColor: "#232323",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    titlePag: {
        color: "#FFF",
        fontSize: 30,
        marginBottom: "7%"
    },
    exportQuad: {
        backgroundColor: "#D9D9D9",
        width: 160,
        height: 160,
        borderRadius: 10,
    },
    quad3: {
        backgroundColor: "#232323",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        marginBottom: 10,
        marginTop: 10,
    },
    quad4: {
        backgroundColor: "#232323",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        marginBottom: 10,
        marginTop: 10,
    },
    quad5: {
        backgroundColor: "#232323",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        marginTop: 10,
    },
    quad6: {
        backgroundColor: "#232323",
        marginTop: 15,
    },
    quad7: {
        backgroundColor: "#363A43",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    quad8: {
        backgroundColor: "#232323",
    },
    title: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "500",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#FFF",
        color: "#000",
        padding: 10,
        width: '100%',
        height: 40,
        borderRadius: 10,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 10,
        fontWeight: "700",
        marginTop: 5,
    },
    button: {
        backgroundColor: "#E45858",
        width: '75%',
        borderRadius: 10,
        paddingVertical: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    buttonText: {
        color: "#FFF",
        fontSize: 30,
        margin: 2
    },
    buttonDisabled:{
        backgroundColor: "gray",
        width: '75%',
        borderRadius: 10,
        paddingVertical: 3,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default styles;
