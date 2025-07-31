import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import ContatoCard from "../components/ContatoCard";

export default function Home() {
    return (
        <View style={styles.container}>
            <ContatoCard 
                name="Sport Club Corinthians Paulista"
                bio="Esse app é dedicado a história de um time esportivo que é um dos maiores do Brasil e do mundo. Aqui você encontrará informações sobre os títulos conquistados, a história do clube e muito mais."
            />
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffffff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});