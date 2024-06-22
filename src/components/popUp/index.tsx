import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from './style';

const popUp = ({popUpText, errorIcon, modalVisibility, onPress}: any | undefined) => {
  return(
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
      >
        <View style={styles.container}>
          {errorIcon}
          <Text style={styles.text}>{popUpText}</Text>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.btnContent}>
              <Text style={styles.btnText}>
                Ok
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default popUp;