import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 128,
    paddingVertical: 10,
    alignItems: 'center',
  },

  image:{
    width: 103,
    height: 103,
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