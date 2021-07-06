import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  About,
  ChatAngkut,
  ContactUs,
  Daftarangkut,
  Dashboard,
  HargaSampah,
  JadwalAngkut,
  Login,
  LokasiAngkut,
  Register,
  Splash,
} from '../screen';
import NewsDetail from '../screen/NewsDetail';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HargaSampah"
        component={HargaSampah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JadwalAngkut"
        component={JadwalAngkut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftarangkut"
        component={Daftarangkut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LokasiAngkut"
        component={LokasiAngkut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
