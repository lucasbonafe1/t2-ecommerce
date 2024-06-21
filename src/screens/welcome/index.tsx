import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import styles from "./style";
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

