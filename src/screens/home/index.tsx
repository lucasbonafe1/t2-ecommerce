import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/searchBar';
import * as Animatable from 'react-native-animatable';
import styles from '../home/style';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import products from "./products.json";
import ProductCard from '../../components/productCard';
import { getProduto } from '../../services/produto';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from "../../routes/stack";

const Home = () => {
  const[produto, setProduto] = useState();
  const navigation = useNavigation<StackTypes>();

  const ProductCardItem = ({item, title, price, imageUrl}: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
      <ProductCard title={title} price={price} imageUrl={imageUrl}/>
    </TouchableOpacity>
  )

  const handleGetProdutos = async () => {
    try{
      const produtos = await getProduto();
      setProduto(produtos);
    } catch(err){
      console.warn(err);
    }
  }

  // criar renderização para quando fizer post e aparecer no get de adicionados recentemente
  // ja renderizar automaticante ao entrtar na página

  useFocusEffect(
    React.useCallback(() => {
      handleGetProdutos();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo/logo.png")}
          style={{ width: '15%' }}
          resizeMode="contain"
        />
      </View>
      <SearchBar/>
      <View style={styles.produtosTextContainer}>
        <Text style={styles.text}>Produtos</Text>
      </View>
      <View style={styles.products}>
        <FlatList
          data={products}
          renderItem={({item}) => <ProductCardItem item={item} title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>}
          horizontal={true}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.adicionadosTextContainer}>
        <Text style={styles.text}>Adicionados recentemente</Text>
      </View>
      <View style={styles.produtosRecente}>
        {/* {produto.map(({item}) => <ProductCardItem title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>)} */}
        <FlatList
            data={produto}
            renderItem={({item}) => <ProductCardItem item={item} title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{ right: 12, top: 5 }}
          />
      </View>
    </ScrollView>
  )
}


export default Home;
