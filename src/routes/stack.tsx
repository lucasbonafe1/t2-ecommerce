import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import DrawerRoutes from './drawer';
import Detail from '../screens/detalheProduto';
import { Update } from '../screens/editaProduto';

type StackNavigation = {
    Welcome: undefined,
    Login: undefined,
    Drawer: undefined,
    Detail: object | any,
    Editar: object | any

}

const Stack = createNativeStackNavigator();
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type DetailType = NativeStackScreenProps<StackNavigation, 'Detail'>
export type UpdateType = NativeStackScreenProps<StackNavigation, 'Editar'>

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
            <Stack.Screen
                name='Detail'
                component={Detail}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Editar'
                component={Update}
                options={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: '#2B2C34',
                    },
                    headerTitleAlign:'center',
                }}
            />
        </Stack.Navigator>
    );
}