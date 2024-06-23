import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Home from '../screens/home';

type StackNavigation = {
    Welcome: undefined,
    Login: undefined,
    Home: undefined,
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
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}