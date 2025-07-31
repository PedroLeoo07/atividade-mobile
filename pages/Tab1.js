import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import ContatoCard from "../components/ContatoCard"; 
import CardSkeleton from "../components/CardSkeleton";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <CardSkeleton />
            ) : (
                <ContatoCard 
                    name="Sport Club Corinthians Paulista"
                    bio="Esse app é dedicado à história de um time esportivo que é um dos maiores do Brasil e do mundo..."
                />
            )}
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});
