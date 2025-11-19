import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  container: {
    flex: 1,
    backgroundColor:'#D7E1EA'
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
    backgroundColor: '#007AFF',
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

    lineHeight: 32, 
    marginTop: -4, 
  },
  // --- Textos do Título e Subtítulo ---
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#007AFF',
  },
  subtitle: {
    fontWeight:200,
    fontSize: 14,
    color: '#293C4C',
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
    top: 5,
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