import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Adicione o import

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Tab1} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Títulos" 
                component={Tab2} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trophy" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Contato" 
                component={Tab3} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call" color={color} size={size} />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
}