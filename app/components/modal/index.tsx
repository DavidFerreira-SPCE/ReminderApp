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
    const [isSecure, setisSecure] = useState(true)

    const fazerLogin = () => {
        console.log({ email, password });
        onClose()
        router.push('./home');
    }
       const toggleSecureEntry = () => {
        setisSecure(prev => !prev);
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
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
                />
                
                <Text>Senha</Text>

                <View style={styles.input}> 
                <TextInput
                    secureTextEntry={!password}
                    placeholder="Só Senha"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPass}
                    keyboardType="numeric"
                /> 
                    <TouchableOpacity onPress={() => setisSecure(!isSecure)}>
                        <Ionicons 
                            name={isSecure ? "eye-off-outline" : "eye-outline"} 
                            size={20} 
                            color="#156b9dff"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnSalvar} onPress={fazerLogin}>
                    <Text style={styles.btnSalvarTexto}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}