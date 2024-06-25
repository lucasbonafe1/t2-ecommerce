import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

const popUp = ({popUpText, successIcon, modalVisibility, onPress}: any | undefined) => {
  return(
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
      >
        <View style={styles.containerSuccess}>
          {successIcon}
          <Text style={styles.text}>{popUpText}</Text>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.btnContentSuccess}>
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