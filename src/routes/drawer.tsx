import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Home from '../screens/home';
import { CadastroProduto } from '../screens/cadastroProduto';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

type DrawerNavigation = {
    Welcome: undefined,
    Login: undefined,
    Home: undefined,
}

const Drawer = createDrawerNavigator();
export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
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
            }}
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
                    headerShown: false,
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
