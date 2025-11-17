import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ModalLogin from "./components/modal";
import styles from './styles';

export default function InitialScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loginButtonVisible, setLoginButtonVisible] = useState(true);
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexGrow: 1
        }}>
        <View>
          <Image
            source={require("../assets/images/reminder-logo.svg")}
            style={styles.logo}
          />
        </View>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            setModalVisible(true);
            setLoginButtonVisible(true);
          }}
        >
          <Text style={styles.btnTexto}>Fazer Login</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Login */}
      <ModalLogin
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}