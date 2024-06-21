import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "blue"
    },
    containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position:'absolute',
        backgroundColor: "blue",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
       fontSize: 18,
       color: "white",
       fontWeight: "bold"
    }
});

export default styles;