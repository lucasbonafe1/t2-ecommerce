import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 210,
    alignItems: 'center',
  },

  image:{
    width: 128,
    height: 140,
    resizeMode: 'stretch',
    borderRadius: 12
  },

  title: {
    color: 'white',
  },

  price: {
    color: 'white',
    fontWeight: 'bold'
  }
  });