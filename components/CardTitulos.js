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
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/paulista.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Campeonato Paulista</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/libertadores.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Libertadores</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/mundial.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Mundial de Clubes</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/florida.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Torneio da Flórida</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/recopa.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Recopa</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/copadoBrasil.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Copa do Brasil</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/serieB.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Série B</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/supercopa.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Supercopa</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/torneioRioSP.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Torneio Rio-SP</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}></Text>
                    <Image 
                        source={require('../assets/TaçaDosCampeoes.png')}
                        style={styles.image} 
                        resizeMode="contain"
                    />
                    <Text style={styles.textCard}>Taça dos Campeões</Text>
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