import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import styles from '../sobre/style'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const Sobre = () => {
  return (
    <>
      <StatusBar backgroundColor="#6246EA" />
      <ScrollView style={styles.container}>
        <View  style={styles.containerimagelogo}>
        <Image source={require('../../../assets/logo/newLogo.png')} style={styles.imagelogo} />  
        </View>
        
        <View style={styles.quad}>
          <Text style={styles.title}>
            Cordeiro Fantasy
          </Text>
          <Text style={styles.content}>
              A Loja Cordeiro Fantasy é um espaço mágico onde a criatividade e a imaginação ganham vida.{"\n"}
              Oferecemos uma ampla variedade de fantasias para todas as idades e gostos.{"\n"}
              Desde trajes clássicos e elegantes até os mais modernos e divertidos, temos opções para festas temáticas,{"\n"}
              Halloween, carnaval, peças teatrais, eventos corporativos, e muito mais.
          </Text>

        </View>
        <View style={styles.quad2}>
          <Text style={styles.title}>
            Integrantes
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-caldas-0359802a5/')}>
              <Image source={require('../../../assets/images/sobre/miguel.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="#0A66C2" />   Miguel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-augusto-dalbone-gusmão-8ab128266/')}>
              <Image source={require('../../../assets/images/sobre/bonas.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="#0A66C2" />   Dalbone</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/lucas-bonafé/')}>
              <Image source={require('../../../assets/images/sobre/matheus.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="#0A66C2" />   Bonafé</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/dionatan-andrade-618331313/')}>
              <Image source={require('../../../assets/images/sobre/natan.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="#0A66C2" />   Dionatan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/giovanne-moreira-1158b3266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
              <Image source={require('../../../assets/images/sobre/giovanne.png')} style={styles.imagefoto} />
              <Text style={styles.text}><FontAwesome name="linkedin-square" size={24} color="#0A66C2" />   Giovanne</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </>
  );
};

export default Sobre; 