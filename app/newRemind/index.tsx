import axios from 'axios';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function NovaReceitaScreen() {
    const [horario, setHorario] = useState('');
    const [nomeRemedio, setNomeRemedio] = useState('');
    const [recorrencia, setRecorrencia] = useState('');
    const [tomarAgora, setTomarAgora] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSalvar = async () => {
        if (!nomeRemedio || !horario || !recorrencia) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        setLoading(true);
        try {
            // Substitua pela sua URL real. 
            // Lembre-se que emulador/dispositivo requer o IP da máquina, não 'localhost'.
            const apiUrl = 'http://localhost:3000/lembretes';

            const payload = {
                nomeremedio: nomeRemedio,
                horario: horario,
                recorrencia: recorrencia,
                tomaragora: tomarAgora
            };

            // 💡 Uso do Axios: axios.post(url, dados, [config])
            const response = await axios.post(apiUrl, payload);

            // Axios usa o código de status HTTP na propriedade 'status'
            if (response.status === 201 || response.status === 200) {
                Alert.alert('Sucesso', 'Lembrete criado com sucesso!', [
                    { text: 'OK', onPress: () => router.back() }
                ]);
            } else {
                // Embora o Axios lance um erro para códigos 4xx/5xx, 
                // é bom manter uma verificação de segurança.
                Alert.alert('Erro', 'Falha ao salvar no banco de dados.');
            }

        } catch (error:any) {
        console.error('Erro na requisição Axios:', error);

            // O Axios encapsula a resposta de erro na propriedade 'response'
            if (error.response) {
                // Erro do servidor (status 4xx ou 5xx)
                Alert.alert('Erro no Servidor', `Status ${error.response.status}: ${error.response.data.message || 'Dados inválidos.'}`);
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta (problema de rede/URL)
                Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor (Verifique o IP e o servidor).');
            } else {
                // Erro durante a configuração da requisição
                Alert.alert('Erro', 'Ocorreu um erro inesperado.');
            }
        } finally {
            setLoading(false);
        }
    };
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
                        <Text style={styles.subtitle}>
                            Adicione a sua prescrição médica para receber lembretes de quando tomar seu medicamento
                        </Text>
                    </View>
                </View>

                <View style={styles.boxes}>
                    {/* Input Remédio */}
                    <View style={styles.inputGP}>
                        <Text style={styles.label}>Remédio</Text>
                        <TextInput
                            placeholder="Digite o nome do remédio"
                            style={styles.input}
                            value={nomeRemedio}
                            onChangeText={setNomeRemedio}
                        />
                    </View>

                    {/* Input Horário */}
                    <View style={styles.inputGP}>
                        <Text style={styles.label}>Horário</Text>
                        {/* MaskInput Simulado */}
                        <MaskInput
                            placeholder="08:00"
                            style={styles.input}
                            value={horario}
                            onChangeText={setHorario}
                            mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Input Recorrência */}
                    <View style={styles.inputGP}>
                        <Text style={styles.label}>Recorrência</Text>
                        <TextInput
                            placeholder="Ex: Diariamente"
                            style={styles.input}
                            value={recorrencia}
                            onChangeText={setRecorrencia}
                        />
                    </View>

                    {/* Checkbox Tomar Agora */}
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => setTomarAgora(!tomarAgora)}
                        activeOpacity={1.0}
                    >
                        <View style={[
                            styles.checkBox, tomarAgora && styles.checkBoxActive]}>
                            {tomarAgora && (<Text style={styles.checkMark}> ✓ </Text>)}
                        </View>
                        <Text style={styles.boxText}>
                            Tomar agora
                        </Text>
                    </TouchableOpacity>

                    {/* Botão Adicionar */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={handleSalvar}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#FFF" />
                            ) : (
                                <Text style={styles.addButtonText}>+ Adicionar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}