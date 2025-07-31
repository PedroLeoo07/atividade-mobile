import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardJogadores from "../components/CardJogadores";

export default function Home() {
    return (
        <View style={styles.container}>
            
            <CardJogadores />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000ff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});