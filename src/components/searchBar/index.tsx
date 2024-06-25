import { View, Text, TextInput } from 'react-native'
import styles from './style';
import { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    const[search, setSearch] = useState("");
    // usar esse useState para procurar na flatlist produtos para ver se tem igual o que
    // foi pesquisado.
    
  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInUp" style={styles.containerSearch}>
         <TextInput
                placeholder="Pesquisar"
                placeholderTextColor={"#909094"}
                style={styles.textInput}
                onChangeText={setSearch}
                value={search}
            />
            <Ionicons name="search-outline" size={25} style={styles.iconSearch}></Ionicons>
        </Animatable.View>
      
    </View>
  )
}

export default SearchBar