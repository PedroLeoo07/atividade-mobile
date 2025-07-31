import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardTitulos from "../components/CardTitulos";

export default function Home() {
    return (
        <View style={styles.container}>
            
            <CardTitulos />
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