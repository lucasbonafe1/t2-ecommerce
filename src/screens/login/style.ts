import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'blue',
        
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    text:{
        fontSize: 28,
        fontWeight: 'bold',
        color:'white'
    },
    containerForm:{
        backgroundColor:'white',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor:'blue',
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
        color: "black"
    }
});

export default styles;