import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContatoCard({ name, email, contato, bio }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.contato}>{contato}</Text>
            <Text style={styles.bio}>{bio}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: "#666",
        marginBottom: 5,
    },
    contato: {
        fontSize: 16,
        color: "#666",
        marginBottom: 5,
    },
    bio: {
        fontSize: 14,
        color: "#999",
    },
});