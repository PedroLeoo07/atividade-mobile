import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}></Text>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.image} 
                resizeMode="contain"
            />
            <Text style={styles.textCard}>História do Corinthians</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#f1f1f1ff",
        borderRadius: 10,
        padding: 50,
        marginBottom: 20,
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
    textCard: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        color: "#000",
    },
});