import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"
import { postProduto } from "../../services/produto";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function CadastroProduto() {
    const [image, setImage] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    const produto = {
        image: image,
        title: titulo,
        descricao: descricao,
        valor: preco                 
    }

    const handlePostProduto = async () =>{
        try{
            const produtoPostado = await postProduto(produto);
            // console.log(produtoPostado);
        } catch(err){
            console.warn(err)
        }
    }

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1
        });

        if(!result.canceled){
            const base = result.assets[0].uri;
            setImage(base);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.quad} />
            <View style={[styles.quad2, { justifyContent: 'flex-start', paddingTop: 20 }]}>
                <Text style={[styles.titlePag, { fontWeight: 'bold' }]}>Novo Produto</Text>
                <TouchableOpacity onPress={() => handleImagePicker()}>
            <View style={styles.exportQuad}>
            {image ? (
            <Image
                source={{uri: image}}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
            />
             ) : (
            <MaterialCommunityIcons name="image-plus" size={155} color="#232323" />
             )}
            </View>
        </TouchableOpacity>
            </View>
            <View style={[styles.quad3, { backgroundColor: '#232323' }]}>
                <Text style={styles.title}>Título</Text>
                <TextInput
                    placeholder="Digite o Título do Produto"
                    placeholderTextColor="#909094"
                    style={[styles.input, { backgroundColor: '#D9D9D9', color: '#000' }]}
                    onChangeText={setTitulo}
                    value={titulo}
                />
            </View>
            <View style={[styles.quad4, { backgroundColor: '#232323' }]}>
                <Text style={styles.title}>Descrição</Text>
                <TextInput
                    placeholder="Digite a Descrição do Produto"
                    placeholderTextColor="#909094"
                    style={[styles.input, { backgroundColor: '#D9D9D9', color: '#000' }]}
                    onChangeText={setDescricao}
                    value={descricao}
                />
            </View>
            <View style={[styles.quad5, { backgroundColor: '#232323' }]}>
                <Text style={styles.title}>Preço</Text>
                <TextInput
                    placeholder="Digite o Preço do Produto"
                    placeholderTextColor="#909094"
                    style={[styles.input, { backgroundColor: '#D9D9D9', color: '#000' }]}
                    onChangeText={setPreco}
                    value={preco}
                />
            </View>
            <View style={styles.quad6} />
            <View style={[styles.quad7, { flex: 2, backgroundColor: '#232323' }]}>
                <TouchableOpacity style={styles.button} onPress={handlePostProduto}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.quad8} />
        </View>
    );
}
