import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modal: {
        marginTop: 'auto',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 1,
        padding: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1
    },
    close: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        flexDirection:'row',
        alignItems:"center",
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        justifyContent: "space-between",

    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    tipoBtn: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginHorizontal: 5
    },
    btnSalvar: {
        marginTop: 20,
        backgroundColor: '#C02636',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    btnSalvarTexto: {
        color: '#fff',
        fontWeight: 'bold'
    },
    eyeIconWrapper: {
        alignItems:'flex-end'
    }
});

export default styles;