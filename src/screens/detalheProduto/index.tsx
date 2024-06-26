import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import styles from './style';
import { DetailType } from '../../routes/stack';

export type produto = {
  item : {
    image: string;
    title: string;
    descricao: string;
    valor: string;
  }
}

export default function Detail({ route }: DetailType) {

  const props = route.params;

    return (
        <View>
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
                        onPress={() => console.log('EditScreen')} // Supunhetando que 'EditScreen' seja o nome da sua tela de edição
                    >
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.deleteButton]}
                        onPress={() => console.log('Deletar')}
                    >
                        <Text style={styles.buttonText}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


