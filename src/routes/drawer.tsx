import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Home from '../screens/home';
import { CadastroProduto } from '../screens/cadastroProduto';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerActiveTintColor: '#EAEAEA',
                drawerInactiveBackgroundColor: '#232323',
                drawerInactiveTintColor: '#EAEAEA',
                drawerActiveBackgroundColor: '#E45858',
                drawerStyle: {
                    backgroundColor: '#232323',
                },
                drawerLabelStyle: {
                    fontSize: 19,
                },
                headerStyle: {
                    backgroundColor: '#6246EA'
                },
                headerTitleStyle: {
                    fontSize: 20, // Reduzindo o tamanho da fonte do título
                    color: '#D1D1E9',
                },
                headerTitleContainerStyle: {
                    left: 0, // Removendo o espaço extra à esquerda do título
                },
                headerTintColor: '#EAEAEA',
                headerLeft: () => (
                    <Ionicons
                        name="menu"
                        size={30} 
                        color="#EAEAEA"
                        style={{ marginLeft: 10 }}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                ),
            })}
        >
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    drawerIcon: ({ size }) => (
                        <FontAwesome name="home" size={size} color={'#EAEAEA'} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Adicionar Produto'
                component={CadastroProduto}
                options={{
                    headerShown: false, // Não mostrar header em CadastroProduto
                    drawerIcon: ({ size }) => (
                        <FontAwesome6 name="add" size={size} color={'#EAEAEA'} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Sobre'
                component={Login}
                options={{
                    headerShown: false,
                    drawerIcon: ({ size }) => (
                        <Ionicons name="people-sharp" size={size} color={'#EAEAEA'} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Sair'
                component={Welcome}
                options={{
                    headerShown: false,
                    drawerIcon: ({ size }) => (
                        <MaterialIcons name="logout" size={size} color={'#EAEAEA'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
