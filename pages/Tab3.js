import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ContatoCard from "../components/ContatoCard";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contato do Corinthians</Text>
            <Text style={styles.description}>
                Fale conosco! Estamos sempre prontos para atender a Fiel Torcida.
            </Text>
            <ContatoCard 
                name="Sport Club Corinthians Paulista"
                email="contato@sccp.com.br"
                contato="(11) 1234-5678"
                bio="Time de futebol brasileiro com sede em São Paulo. Fundado em 1910, é um dos clubes mais populares do Brasil, conhecido por sua grande torcida e conquistas nacionais e internacionais."
            />
            <Text style={styles.endereco}>
                Endereço: Rua São Jorge, 777 - Tatuapé, São Paulo - SP, 03087-000
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    alert("Em breve você poderá comprar ingressos!");
                }}
            >
                <Text style={styles.buttonText}>Ingressos</Text>
            </TouchableOpacity>
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
        marginBottom: 10,
        color: "#fff",
    },
    description: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    endereco: {
        fontSize: 15,
        color: "#fff",
        marginTop: 30,
        textAlign: "center",
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 30,
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
});