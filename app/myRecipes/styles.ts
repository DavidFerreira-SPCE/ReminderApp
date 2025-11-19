import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  container: {
    flex: 1,
  },
  // --- Header Superior (Setas e Botão +) ---
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#007AFF', // Azul do botão de adicionar
    borderRadius: 50,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#fff',
    // Ajuste fino para centralizar o '+'
    lineHeight: 32, 
    marginTop: -4, 
  },
  // --- Textos do Título e Subtítulo ---
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    // O fundo azul claro na imagem sugere que estes textos estão numa área separada
    backgroundColor: '#F0F8FF', // Exemplo de azul claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 10,
  },
  listContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  // --- Card de Medicamento ---
  card: {
    backgroundColor: '#fff', // Fundo branco dentro do card
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    // Estilo da borda/sombra para dar o efeito de card separado
    borderWidth: 1,
    borderColor: '#EFEFEF', // Borda sutil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  deleteIcon: {
    fontSize: 18,
    color: '#999',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    marginRight: 4,
    color: '#007AFF', // Cor azul para os ícones
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles