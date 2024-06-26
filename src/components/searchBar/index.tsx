import { View, Text, TextInput } from 'react-native'
import styles from './style';
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({onchange, valor} : any) => {
    const[search, setSearch] = useState("");
    // usar esse useState para procurar na flatlist produtos para ver se tem igual o que
    // foi pesquisado.

  return (
    <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
                placeholder="Pesquisar"
                placeholderTextColor={"#909094"}
                style={styles.textInput}
                onChangeText={onchange}
                value={valor}
            />
            <Ionicons name="search-outline" size={25} style={styles.iconSearch}></Ionicons>
        </View>
    </View>
  )
}

export default SearchBar