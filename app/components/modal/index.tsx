import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
interface Props {
    visible: boolean
    onClose: () => void
}

export default function ModalLogin({ visible, onClose }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [verify, setVerify] = useState('')

    const fazerLogin = () => {
        console.log({ email, password, verify });
        onClose()
        router.push('./home');
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Entre para acessar as receitas, SEU FELA</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.close}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu Email AQUI CABA"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="SÓ COLOQUE A Senha, FI DE RAPARIGA"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPass}>
                        <Ionicons name="eye" size={20} color="#006effff" />
                    </TextInput>

                    <TouchableOpacity style={styles.btnSalvar} onPress={fazerLogin}>
                        <Text style={styles.btnSalvarTexto}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}