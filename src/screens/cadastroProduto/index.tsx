import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export function CadastroProduto() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    const handlePress = () => {
        console.log("Título:", titulo);
        console.log("Descrição:", descricao);
        console.log("Preço:", preco);
    };

    return (
        <View style={styles.container}>
            <View style={styles.quad} />
            <View style={[styles.quad2, { justifyContent: 'flex-start', paddingTop: 20 }]}>
                <Text style={[styles.titlePag, { fontWeight: 'bold' }]}>Novo Produto</Text>
                <View style={styles.exportQuad} />
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
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.quad8} />
        </View>
    );
}
