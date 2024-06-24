import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PopUp from "../../components/popUp";
import styles from "./style";
import * as Animatable from 'react-native-animatable'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { getAdmin, postAdmin } from "../../services/admin";
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from "../../routes/stack";

export default function Login(){
    const[modalVisibility, setModalVisibility] = useState(false);
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[logado, setLogado] = useState(false);

    const[mostrarSenha, setMostrarSenha] = useState(true);


    const navigation = useNavigation<StackTypes>();

     const loginValidation = async () => {
        try {
            const adminValido = await getAdmin();
            if(email === adminValido[0].email && senha === adminValido[0].senha) {
                setLogado(true); // criar context de loading
                navigation.navigate('Home');
            } else {
                setModalVisibility(!modalVisibility);
            }       
        } catch(err){
            console.log(err);
        }    
         setSenha('');
     };

     // post utilizado para enviar login único do admin
      const postNewAdmin = async () => {
          try{
              //const adminValido = await postAdmin(admin);
          } catch (err){
              console.log(err)
          }
      }

    return(
    <View style={styles.container}>
        <PopUp
            onPress={() =>
            setModalVisibility(!modalVisibility)}
            modalVisibility={modalVisibility}
            popUpText={'Suas credencias estão incorretas.'}
            errorIcon={<MaterialIcons name="error-outline" size={110} color="#E45858"/>}
        />
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.text}>
            Login
            </Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                placeholder="Digite um e-mail"
                placeholderTextColor={"#909094"}
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput
                placeholder="Sua senha"
                placeholderTextColor={"#909094"}
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={mostrarSenha}
            />
            <TouchableOpacity style={styles.mostraSenha} onPress={() => setMostrarSenha(!mostrarSenha)}>
                { mostrarSenha ?
                    <Ionicons name="eye" color={"#D1D1E9"} size={25}/>
                    :
                    <Ionicons name="eye-off" color={"gray"} size={25}/>
                }
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loginValidation}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta?</Text>
            </TouchableOpacity>

        </Animatable.View>
    </View>
    );
}