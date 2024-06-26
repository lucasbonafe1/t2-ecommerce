import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import styles from '../sobre/style'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const Sobre = () => {
  return (
    <>
      <StatusBar backgroundColor="#6246EA" />
      <View style={styles.container}>
        <Image source={require('../../../assets/images/sobre/logo2.png')} style={styles.imagelogo} />
        <View style={styles.quad}>
          <Text style={styles.title}>
            Cordeiro Fantasy
          </Text>
          <Text style={styles.content}>
            A Loja Cordeiro Fantasy é um espaço mágico onde a criatividade e a imaginação ganham vida.
            Oferecemos uma ampla variedade de fantasias para todas as idades e gostos. Desde trajes
            clássicos e elegantes até os mais modernos e divertidos, temos opções para festas temáticas,
            Halloween, carnaval, peças teatrais, eventos corporativos, e muito mais.
            Além das fantasias, também disponibilizamos uma vasta seleção de acessórios, como máscaras,
            perucas, chapéus, maquiagens, e adereços,e até mesmo fantasias originais criadas por designers locais.
            Tudo isso para que seu visual fique completo e impecável.
          </Text>
        </View>
        <View style={styles.quad2}>
          <Text style={styles.title}>
            Integrantes
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-caldas-0359802a5/')}>
              <Image source={require('../../../assets/images/sobre/miguel.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="black" />   Miguel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-augusto-dalbone-gusmão-8ab128266/')}>
              <Image source={require('../../../assets/images/sobre/bonas.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="black" />   Dalbone</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/lucas-bonafé/')}>
              <Image source={require('../../../assets/images/sobre/matheus.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="black" />   Bonafé</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/dionatan-andrade-618331313/')}>
              <Image source={require('../../../assets/images/sobre/natan.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="black" />   Dionatan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/giovanne-moreira-1158b3266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
              <Image source={require('../../../assets/images/sobre/giovanne.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="black" />   Giovanne</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </>
  );
};

export default Sobre; 