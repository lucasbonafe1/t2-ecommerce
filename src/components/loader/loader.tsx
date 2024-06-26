import { View, Text, ActivityIndicator } from 'react-native'
import { StyleSheet } from "react-native";
import React from 'react'

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"#E45858"} size={64}/>
    </View>
  )
}

export const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2a2a2a',
        alignItems: 'center',
        justifyContent: 'center'
    },

});