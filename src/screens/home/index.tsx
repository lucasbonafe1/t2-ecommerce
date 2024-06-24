import { View, Text, FlatList } from 'react-native';
import SearchBar from '../../components/searchBar';
import * as Animatable from 'react-native-animatable';
import styles from '../home/style';
import React from 'react';
import products from "./products.json";
import ProductCard from '../../components/productCard';

const Home = () => {
  const ProductCardItem = ({title, price, imageUrl}: any) => (
    <ProductCard title={title} price={price} imageUrl={imageUrl}></ProductCard>
  )

  return (
    <View style={styles.container}>
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
    </View>
  )
}


export default Home;
