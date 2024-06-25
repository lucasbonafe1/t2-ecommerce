import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const productCard = (props: any) => {
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.imageUrl}}/>
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.price} numberOfLines={1}>
        R$ {props.price}
      </Text>
    </View>
  );
};

export default productCard;
