import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232323',
        justifyContent: 'flex-start',
    },
    containerLogo: {
        flex: 0.18,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default styles;
