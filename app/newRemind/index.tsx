import { router } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function NovaReceitaScreen() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <View>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={styles.backArrow}>&larr;</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Nova Receita</Text>
                        <Text style={styles.subtitle}>Adicione a sua prescrição médica para
                            receber lembretes de quando tomar seu medicamento </Text>
                    </View>
                </View>

                <View style={styles.boxes}>
                    <View style={styles.inputGP}>
                        <Text style={styles.label}>Remédio</Text>
                        <TextInput
                            placeholder="Olá, Sou um input"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputGP}>
                        <View>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                placeholder="Olá, Sou um input"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputGP}>
                            <View>
                                <Text style={styles.label}>Recorrência</Text>
                                <TextInput
                                    placeholder="Olá, Sou um input"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.box}>
                        <TouchableOpacity
                        style={styles.checkBox}
                        ></TouchableOpacity> 
                            <Text>Tomar agora</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

//- Linha 55 TROCAR POR CAIXA DE MARCAÇÃO -