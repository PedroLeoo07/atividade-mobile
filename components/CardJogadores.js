import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Card() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/tacaBrasileiro.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Campeonato Brasileiro</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        alignItems: "center",
        paddingVertical: 20,
    },
    card: {
        width: "90%",
        backgroundColor: "#ffffffff",
        borderRadius: 10,
        padding: 50,
        marginBottom: 20,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
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
        textAlign: "center",
        display: "flex",
    },
});