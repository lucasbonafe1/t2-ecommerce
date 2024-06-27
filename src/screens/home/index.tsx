import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/searchBar';
import * as Animatable from 'react-native-animatable';
import styles from '../home/style';
import React, { useEffect, useState } from 'react';
import { useFocusEffect, DrawerActions, useNavigation } from '@react-navigation/native';
import products from "./products.json";
import ProductCard from '../../components/productCard';
import { getProduto } from '../../services/produto';
import { StackTypes } from "../../routes/stack";
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
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [produtoFiltrado, setProdutoFiltrado] = useState([]);
  const navigation = useNavigation<StackTypes>();

  const ProductCardItem = ({item, title, price, imageUrl}: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
      <ProductCard title={title} price={price} imageUrl={imageUrl}/>
    </TouchableOpacity>
  )
  
  const handleGetProdutos = async () => {
    try {
      setLoading(true);
      const produtos = await getProduto();
      setProdutos(produtos);
      setProdutoFiltrado(produtos);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      handleGetProdutos();
    }, [])
  );

  useEffect(() => {
    if (search === "") {
      setProdutoFiltrado(produtos);
    } else {
      const filtrado = produtos.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setProdutoFiltrado(filtrado);
    }
  }, [search, produtos]);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo/newLogo.png")}
          style={{ width: '22%' }}
          resizeMode="contain"
        />
      </View>
      <Ionicons
        name="menu"
        size={40}
        color="#EAEAEA"
        style={{ marginLeft: 10, position: 'absolute', top: 44, left: 10 }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <SearchBar onchange={setSearch} valor={search} />
      <View style={styles.produtosTextContainer}>
        <Text style={styles.text}>Produtos</Text>
      </View>
      <View style={styles.products}>
        <FlatList
          data={products}
          renderItem={({item}) => <ProductCardItem item={item} title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>}
          horizontal={true}
          contentContainerStyle={{ gap: 12 }}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.adicionadosTextContainer}>
        {produtos.length != 0 ? 
          (
            <Text style={styles.text}>Adicionados recentemente</Text>
          ) : (
            <Text style={styles.text}>0 produtos adicionados recentemente.</Text>
          )
        }
        
      </View>
      <View style={styles.produtosRecente}>
        <FlatList
          data={produtoFiltrado}
          renderItem={({item}) => <ProductCardItem item={item} title={item.title} price={item.valor} imageUrl={item.image}></ProductCardItem>}
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