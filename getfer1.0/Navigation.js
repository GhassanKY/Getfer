import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

//Rutas de Navegacion
import Home from "./src/home/Home"
import Offers from "./src/offers/Offers"
import Sixth from "./src/sixth/Sixth"
import User from "./src/user/User"

//Iconos de Tab Bar
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={tabBarOptions}>
            
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='User'
                component={User}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />)
                }}
            />


            <Tab.Screen
                name='Offers'
                component={Offers}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="local-offer" size={size} color={color} />),
                        tabBarBadge: 10,
                }}
                
            />

            <Tab.Screen
                name='Sixth'
                component={Sixth}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="shopping-cart" size={size} color={color} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

const tabBarOptions = {
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'white',
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: '#ff5f00',
        borderRadius: '15',
    },
}