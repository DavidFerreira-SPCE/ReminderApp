import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{ flexDirection: 'column', alignItems: 'baseline' }}>
                    <Image
                        source={require("../../assets/images/avatar.jpg")}
                        style={styles.avatar}
                    />

                    <View>
                        <Text style={styles.saudacao}>Boas Vindas</Text>
                        <Text style={styles.subtitle}>Sr.Julio Santana</Text>

                        <TouchableOpacity>
                            <Ionicons
                                style={styles.teste}
                                name={"exit-outline"}
                                size={20}
                                color="#156b9dff" />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    );
}