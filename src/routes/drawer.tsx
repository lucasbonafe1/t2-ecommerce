import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Home from '../screens/home';
import { CadastroProduto } from '../screens/cadastroProduto';

type DrawerNavigation = {
    Welcome: undefined,
    Login: undefined,
    Home: undefined,
}

const Drawer = createDrawerNavigator();
export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name='Adicionar Produto'
                component={CadastroProduto}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name='Sobre'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name='Sair'
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}