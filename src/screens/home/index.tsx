import { View, Text, FlatList, ScrollView } from 'react-native';
import SearchBar from '../../components/searchBar';
import * as Animatable from 'react-native-animatable';
import styles from '../home/style';
import React, { useEffect, useState } from 'react';
import products from "./products.json";
import ProductCard from '../../components/productCard';
import { getProduto } from '../../services/produto';

const Home = () => {
  const[produto, setProduto] = useState();

  const ProductCardItem = ({title, price, imageUrl}: any) => (
    <ProductCard title={title} price={price} imageUrl={imageUrl}></ProductCard>
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

  useEffect(() =>{
    handleGetProdutos();
  },[produto])

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
          renderItem={({item}) => <ProductCardItem title={item.title} price={item.price} imageUrl={item.imageUrl}></ProductCardItem>}
          horizontal={true}
          contentContainerStyle={{ gap: 12}}
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
            renderItem={({item}) => <ProductCardItem title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{ gap: 30}}
            columnWrapperStyle={{ gap: 10 }}
          />
      </View>
    </ScrollView>
  )
}


export default Home;
