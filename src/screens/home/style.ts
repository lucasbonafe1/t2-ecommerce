import { StyleSheet } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232323',
    },
    containerLogo: {
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    produtosTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    adicionadosTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    line: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        width: '95%',
        alignSelf: 'center',
        margin: 10
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    retorno:{
        fontSize: 25,
        color: '#FFFFFF'
    },
    products: {
        width: '100%',
        height: 180,
    },
    produtosRecente:{
        height: 500,
        width: 375,
    },
});

export default styles;
