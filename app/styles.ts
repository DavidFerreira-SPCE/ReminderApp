import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    body: {

        backgroundColor: '#C02636',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        marginTop: '150%',
        resizeMode: 'contain',
        width: 160,
        height: 90,
        marginLeft: 'auto'
    },
    btnLogin: {
        backgroundColor: '#d62739ff',
        padding: 15,
        borderRadius: 8,
        marginTop: '180%',
        alignItems: 'center'
    },
    btnTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})
export default Styles