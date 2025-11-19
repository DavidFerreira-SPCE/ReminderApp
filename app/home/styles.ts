import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D7E1EA",
        paddingHorizontal: 0
    },
    body: {
        backgroundColor: "#D7E1EA",
        display: 'flex',
        flexDirection: "row",
        width: 'auto',
        height: '30%',
        marginHorizontal: 'auto'
    },
    avatar: {
        marginTop: 12,
        width: 96,
        height: 98,
        borderRadius: 68,
        marginRight: 5,
    },
    caixaTexto: {
        marginVertical: 20,
    },
    saudacao: {
        fontSize: 19,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        color: "#666",
    },
    bigText: {
        gap:0,
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: 'Nunito-Bold',
    },
    smallText: {
        justifyContent: 'center',
        textAlign: "justify",
        fontSize: 12,
        color: "#666",
        fontFamily: 'Nunito-Regular',
    },
    exit: {
        position: 'static',
        marginLeft: 270,
        marginTop: -192
    },
    ContentHome: {
        flexDirection: "column",
        marginTop:36,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: '72%',
        backgroundColor: "#F8FAFB"
    },
    buttonsBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    },
    boxes: {
        marginVertical: 8,
        flexDirection:'row',
        marginHorizontal: 'auto',
        backgroundColor: '#E8EEF3',
        padding: 40,
        borderRadius: 12,
        width: '90%'
    },
    receiptIcon:{
        resizeMode:'contain',
        width: 30 ,
        height: 40   ,
        backgroundColor: 'none'
    },
    order: {
        marginHorizontal:10,
    },
})

export default styles