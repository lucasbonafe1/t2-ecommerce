import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232323',
    },
    containerLogo: {
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    },
    produtosTextContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adicionadosTextContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        width: '92%',
        alignSelf: 'center',
        marginVertical: 10,
        bottom: 15,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 40
        
    },
    products: {
        width: '100%',
        height: 260,
    },
    produtosRecente:{
        marginBottom: 40,
        height: 'auto',
        
    },
});

export default styles;
