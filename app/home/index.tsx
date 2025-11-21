import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.body}>
                    <View>
                        <Image
                            source={require("../../assets/images/avatar.jpg")}
                            style={styles.avatar}
                        />

                        <View style={styles.caixaTexto}>
                            <Text style={styles.saudacao}>Boas Vindas</Text>
                            <Text style={styles.subtitle}>Sr.Julio Santana</Text>
                        </View>

                        <TouchableOpacity>
                            <Ionicons
                                style={styles.exit}
                                name={"exit-outline"}
                                size={30}
                                color='#C02636'
                                onPress={() => (router.back())} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.ContentHome}>
                    <View style={styles.buttonsBox}>
                        <TouchableOpacity onPress={() => router.push('./myReminds')}>
                            <View style={styles.boxes}>
                                <View>
                                    <Image
                                        source={require("../../assets/images/paper-logo.svg")}
                                        style={styles.receiptIcon}
                                    />
                                </View>
                                <View style={styles.order}>
                                    <Text style={styles.bigText}>Minhas Receitas</Text>
                                    <Text style={styles.smallText}>Acompanhe os medicamentos{"\n"}
                                        e gerencie vossos lembretes</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('./newRemind')}>

                            <View style={styles.boxes}>
                                <View>
                                    <Image
                                        source={require("../../assets/images/vitamins-logo.svg")}
                                        style={styles.receiptIcon}
                                    />
                                </View>
                                <View style={styles.order}>
                                    <Text style={styles.bigText}>Nova Receita</Text>
                                    <Text style={styles.smallText}>Cadastre novos lembretes de receitas</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}