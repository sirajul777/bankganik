import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/routes';
import {StatusBar} from 'react-native';
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}

export default App;
