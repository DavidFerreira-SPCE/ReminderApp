import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  // --- Header Superior (Seta) ---
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backArrow: {
    position: 'static',
    justifyContent: 'flex-start',
    fontSize: 24,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#C02636',
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
    paddingHorizontal: 0,
    paddingVertical: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C02636',
  },
  subtitle: {
    width: 328,
    height: 40,
    textAlign: 'center',
    fontWeight: 200,
    fontSize: 16,
    color: '#293C4C',

  },
  // --- Fim ---
  boxes: {
    gap: 5,
    marginHorizontal: 'auto',
    flexDirection: 'column',
    width: '90%',
    borderRadius: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#293C4C',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#F5F5F5', // Fundo cinza claro
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  inputGP: {
    gap: 12,
    width: '100%',
  },
box: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop: 10,

    paddingVertical: 5, 
  },
  checkBox: {
    width: 24,   
    height: 24,
    borderWidth: 1,
    borderColor: '#C02636',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10, 
  },
});

export default styles