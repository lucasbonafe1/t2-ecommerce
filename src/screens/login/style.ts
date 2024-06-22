import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#D1D1E9',

    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    text:{
        fontSize: 28,
        fontWeight: 'bold',
        color:'#232323'
    },
    containerForm:{
        backgroundColor:'#232323',
        flex:1,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        paddingStart:'5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        color: '#D1D1E9',
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderBottomColor: '#D1D1E9',
        color: '#D1D1E9'
    },
    button:{
        backgroundColor:'#E45858',
        width:'100%',
        borderRadius: 4,
        paddingVertical:8,
        marginTop:14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: "center"
    },
    registerText:{
        color: "#D1D1E9"
    }
});

export default styles;