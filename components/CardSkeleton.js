import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function ContatoCardSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{ alignItems: "center" }}>
                <View style={{ width: 300, height: 20, borderRadius: 4, marginBottom: 10 }} />
                <View style={{ width: 250, height: 20, borderRadius: 4, marginBottom: 10 }} />
                <View style={{ width: 280, height: 80, borderRadius: 4 }} />
            </View>
        </SkeletonPlaceholder>
    );
}
