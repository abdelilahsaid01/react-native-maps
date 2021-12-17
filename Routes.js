import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};
export default Routes;