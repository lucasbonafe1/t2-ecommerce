import { View, Text, FlatList } from 'react-native';
import SearchBar from '../../components/searchBar';
import * as Animatable from 'react-native-animatable';
import styles from '../home/style';
import React, { useEffect, useState } from 'react';
import products from "./products.json";
import { useFocusEffect, DrawerActions, useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/productCard';
import { getProduto } from '../../services/produto';
import Loader from '../../components/loader/loader';
import { Ionicons } from '@expo/vector-icons';

export type produto = {
  item : {
    image: string;
    title: string;
    descricao: string;
    valor: string;
  }
}

const Home = () => {
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const ProductCardItem = ({title, price, imageUrl}: any) => (
    <ProductCard title={title} price={price} imageUrl={imageUrl}></ProductCard>
  );

  const handleGetProdutos = async () => {
    try {
      setLoading(true); // Ativa o carregamento
      const produtos = await getProduto();
      setProduto(produtos);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false); // Desativa o carregamento
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      handleGetProdutos();
    }, [])
  );

  if (loading) {
    return <Loader />;
  }

  if (produto == null || produto.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.retorno}>Não há produtos cadastrados recentemente..</Text>
      </View>
    );
  }

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
      <Ionicons
        name="menu"
        size={40}
        color="#EAEAEA"
        style={{ marginLeft: 10, position: 'absolute', top: 42, left: 10 }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <SearchBar />
      <View style={styles.produtosTextContainer}>
        <Text style={styles.text}>Produtos</Text>
      </View>
      <View style={styles.products}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCardItem title={item.title} price={item.price} imageUrl={item.imageUrl}></ProductCardItem>}
          horizontal={true}
          contentContainerStyle={{ gap: 12 }}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.adicionadosTextContainer}>
        <Text style={styles.text}>Adicionados recentemente</Text>
      </View>
      <View style={styles.produtosRecente}>
        <FlatList
          data={produto}
          renderItem={({item} : produto) => <ProductCardItem title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>}
          horizontal={false}
          numColumns={3}
          contentContainerStyle={{ gap: 30 }}
          columnWrapperStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default Home;
