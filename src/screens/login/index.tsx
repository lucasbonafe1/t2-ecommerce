import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./style";
import * as Animatable from 'react-native-animatable'

export default function Login(){
    return(
    <View style={styles.container}>
        
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.text}>
            Bem Vindo
            </Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                placeholder="Digite um e-mail"
                style={styles.input}
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput
                placeholder="Sua senha"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

        </Animatable.View>
    </View>        
    );
}