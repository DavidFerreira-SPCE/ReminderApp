import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f6f6",
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    body: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    saudacao: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 13,
        color: "#666",
    },
    teste:{
        fontWeight:"bold",
        position:"relative",
        marginLeft: "60%"
    }
})

export default styles