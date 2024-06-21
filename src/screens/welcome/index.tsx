import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from "../../routes/stack";

export default function Welcome(){
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require("../../../assets/logo/logo.png")}
                    style={{width: '100%'}}
                    resizeMode="contain"    
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Seja bem-vindo ao Sistema interno da Cordeiro Fantasy</Text>
                <Text style={styles.text}>É funcionário? entre no sistema.</Text>

                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

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

