import { View, Text } from 'react-native';
import styles from '../home/style';
import React from 'react';

import * as Animatable from 'react-native-animatable';

const Home = () => {
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
      <View style={styles.produtosTextContainer}>
        <Text style={styles.text}>Produtos</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.adicionadosTextContainer}>
        <Text style={styles.text}>Adicionados recentemente</Text>
      </View>
    </View>
  );
};

export default Home;
