import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#262626'
    },
   image: {
    marginTop: 60,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
   },
    imageContainer: {
        width: 410,
        height: 410,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        backgroundColor: '#262626',
        padding: 16,
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginBottom: 10,
    },
    description: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        height: 70,
    },
    buttonContainer: {
        backgroundColor: '#262626',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    button:{
        backgroundColor:'#262626',
        width:'95%',
        borderRadius: 15,
        paddingVertical:16,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center"
    },
    editButton: {
        backgroundColor: '#6246EA',
    },
    deleteButton: {
        backgroundColor: '#E45858',
        marginTop:10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});

export default styles