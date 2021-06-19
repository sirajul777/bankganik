import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {About, Login} from '../screen';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="register" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="harga-sampah" />
      <Stack.Screen name="jadwal-angkut" />
      <Stack.Screen name="angkut-sampah" />
      <Stack.Screen name="lokasi" />
      <Stack.Screen name="narahubung" /> */}
    </Stack.Navigator>
  );
};

export default Routes;
