import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Home from '../screens/home';
import DrawerRoutes from './drawer';

type StackNavigation = {
    Welcome: undefined,
    Login: undefined,
    Drawer: undefined,
}

const Stack = createNativeStackNavigator();
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Drawer'
                component={DrawerRoutes}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}