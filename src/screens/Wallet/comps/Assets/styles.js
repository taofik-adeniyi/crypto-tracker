import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    name: {
        color: 'lightgrey',
        fontSize: 12
    },
    ticker: {
        fontWeight: "600",
        color: 'white'
    }
});
