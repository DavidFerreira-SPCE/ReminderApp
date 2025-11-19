import { router } from 'expo-router';
import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';


const medicamentos = [
    { id: 1, nome: "Nome do remédio", hora: "14:00", frequencia: "A cada 12 horas" },
    { id: 2, nome: "Nome do remédio", hora: "08:00", frequencia: "A cada 7 dias" },
    { id: 3, nome: "Nome do remédio", hora: "12:00", frequencia: "A cada 1 dia" },
];

interface MedicamentoProps {
    nome: string;
    hora: string;
    frequencia: string;
}
//- Componente Card do Medicamento -
const MedicamentoCard = ({ nome, hora, frequencia }: MedicamentoProps) => { 
    return (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{nome}</Text>

        {/* Ícone da lixeira no canto superior direito */}
        <TouchableOpacity style={styles.deleteButton} onPress={() => console.log(`Deletar ${nome}`)}>
            <Text style={styles.deleteIcon}>🗑️</Text>
        </TouchableOpacity>

        <View style={styles.infoRow}>
            {/* Ícone do Relógio */}
            <Text style={styles.icon}>🕒</Text>
            <Text style={styles.infoText}>{hora}</Text>

            {/* Ícone de Recorrência/Setas */}
            <Text style={[styles.icon, { marginLeft: 15 }]}>🔄</Text>
            <Text style={styles.infoText}>{frequencia}</Text>
        </View>
    </View>
); 
};

// --- 3. Componente da Tela Principal ---
export default function MinhasReceitasScreen() {

    return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() =>router.back()}>
                        <Text style={styles.backArrow}>&larr;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() =>router.push('./newRemind')}
                    >
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Minhas receitas</Text>
                    <Text style={styles.subtitle}>
                        Acompanhe seus medicamentos cadastrados e gerencie lembretes
                    </Text>
                </View>

                <FlatList
                    data={medicamentos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <MedicamentoCard
                            nome={item.nome}
                            hora={item.hora}
                            frequencia={item.frequencia}
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                />
            </View>
    ); 
  }
