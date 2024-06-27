import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { DetailType } from '../../routes/stack';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from "../../routes/stack";
import { deleteProduto } from '../../services/produto';
import PopUp from '../../components/popUp';

export type produto = {
  item : {
    image: string;
    title: string;
    descricao: string;
    valor: string;
  }
}

export default function Detail({ route }: DetailType) {
const[modalVisibility, setModalVisibility] = useState(false);
  const navigation = useNavigation<StackTypes>();

  const props = route.params;


    const handleDeleteProduct = async() => {
        try{
            const deletedProduct = await deleteProduto(props?.item.id);
            setModalVisibility(!modalVisibility);
            
        } catch(err){
            console.log(err)
        }
    }

    const handleButtonClicked = () => {
        setModalVisibility(!modalVisibility);
        navigation.navigate('Drawer')
    }


    return (
        <View> 
            <PopUp
                onPress={
                handleButtonClicked}
                modalVisibility={modalVisibility}
                popUpText={'Produto deletado.'}
                errorIcon={<EvilIcons name="trash" size={100} color="#E45858" />}
            />
            <View style= {styles.imageContainer}>
                <Image
                    source={{uri: props?.item.image}}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.contentContainer}>
                <Text style={[styles.title, {fontWeight: 'bold'}]}>{props?.item.title}</Text>
                <Text style={styles.title}>R${props?.item.valor}</Text>
                <Text style={styles.description}>{props?.item.descricao}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.editButton]}
                        onPress={() => navigation.navigate('Editar', props)}
                    >
                        <Feather name="edit" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.deleteButton]}
                        onPress={handleDeleteProduct}
                    >
                        <EvilIcons name="trash" size={50} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}