import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import PopUp from "../../components/popUp/success/success";
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"
import { postProduto, updatePedido } from "../../services/produto";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from "../../routes/stack";
import { UpdateType } from "../../routes/stack";

export function Update({ route }: UpdateType) {

    const props = route.params;

    const[modalVisibility, setModalVisibility] = useState(false);
    const [image, setImage] = useState(props?.item.image);
    const [titulo, setTitulo] = useState(props?.item.title);
    const [descricao, setDescricao] = useState(props?.item.descricao);
    const [preco, setPreco] = useState(props?.item.valor);

    const navigation = useNavigation<StackTypes>();
   

    const [message, setMessage] = useState({
        image: "",
        titulo: "",
        preco: ""
    });

    const produto = {
        image: image,
        title: titulo,
        descricao: descricao,
        valor: preco
    }


  
    const handlePutProduto = async () => {
        try {
            setImage(image)
            setTitulo(titulo)
            setDescricao(descricao)
            setPreco(preco)
            const produtoAtualizado = await updatePedido(props?.item.id, produto)
        } catch (err) {
            console.warn(err)
        }
    }

    console.log(props?.item.id)

    const validationInput = () => {
        let valid = true;
        let errors = {
            image: "",
            titulo: "",
            preco: ""
        };

        if (image === "") {
            errors.image = "* A imagem não pode ser vazia.";
            valid = false;
        }

        if (titulo === "") {
            errors.titulo = "* O título não pode ser vazio.";
            valid = false;
        }

        if (preco === "") {
            errors.preco = "* O preço não pode ser vazio.";
            valid = false;
        }

        setMessage(errors);

        if (valid) {
            handlePutProduto();
            setModalVisibility(!modalVisibility);
            setImage("")
            setTitulo("")
            setDescricao("")
            setPreco("")
        }
    }

    const handleButtonClicked = () => {
        setModalVisibility(!modalVisibility);
        navigation.navigate('Drawer')
    }


    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1
        });

        if (!result.canceled) {
            const base = result.assets[0].uri;
            setImage(base);
            setMessage(prevState => ({ ...prevState, image: "" }));
        }
    }


    return (
        <View style={styles.container}>
            <PopUp
            onPress={handleButtonClicked}
            modalVisibility={modalVisibility}
            popUpText={'Produto editado com sucesso.'}
            successIcon={<AntDesign name="checkcircle" size={110} color="green" />}
        />
            <View style={styles.quad} />
            <View style={[styles.quad2, { justifyContent: 'flex-start', paddingTop: 20 }]}>
                <TouchableOpacity onPress={() => handleImagePicker()}>
                    <View style={styles.exportQuad}>
                        {image ? (
                            <Image
                                source={{ uri: image }}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="contain"
                            />
                        ) : (
                            <MaterialCommunityIcons name="image-plus" size={155} color="#232323" />
                        )}
                    </View>
                </TouchableOpacity>
                {message.image ? 
                    <Text style={styles.errorText}>{message.image}</Text> 
                : 
                    null}
            </View>
            <View style={[styles.quad3, { backgroundColor: '#232323' }]}>
                <Text style={styles.title}>Título</Text>
                <TextInput
                    placeholder="Nome do Produto"
                    placeholderTextColor="#909094"
                    style={[styles.input, { backgroundColor: '#D9D9D9', color: '#000' }]}
                    onChangeText={text => { setTitulo(text); setMessage(prevState => ({ ...prevState, titulo: "" })); }}
                    value={titulo}
                />
                {message.titulo ? 
                    <Text style={styles.errorText}>{message.titulo}</Text> 
                : 
                    null}
            </View>
            <View style={[styles.quad4, { backgroundColor: '#232323' }]}>
                <Text style={styles.title}>Descrição</Text>
                <TextInput
                    placeholder="Descrição do Produto(Opcional)"
                    placeholderTextColor="#909094"
                    style={[styles.input, { backgroundColor: '#D9D9D9', color: '#000' }]}
                    onChangeText={setDescricao}
                    value={descricao}
                />
            </View>
            <View style={[styles.quad5, { backgroundColor: '#232323' }]}>
                <Text style={styles.title}>Preço</Text>
                <TextInput
                    placeholder="99,99"
                    placeholderTextColor="#909094"
                    style={[styles.input, { backgroundColor: '#D9D9D9', color: '#000' }]}
                    onChangeText={text => { setPreco(text); setMessage(prevState => ({ ...prevState, preco: "" })); }}
                    value={preco}
                />
                {message.preco ? 
                    <Text style={styles.errorText}>{message.preco}</Text> 
                : 
                    null}
            </View>
            <View style={styles.quad6} />
            <View style={[styles.quad7, { backgroundColor: '#232323' }]}>
                <TouchableOpacity style={styles.button} onPress={validationInput}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.quad8} />
        </View>
    );
}
