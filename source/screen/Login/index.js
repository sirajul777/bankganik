import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Container, Header, Content, Form, Item, Input} from 'native-base';
import React, {Component} from 'react';
import {bankganik} from '../../assets/image';

const widthAuto = Dimensions.get('window').width;
const heightAuto = Dimensions.get('window').height;

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.flexposition}>
          <View>
            <Image source={bankganik} style={styles.stretch} />
            <Text style={styles.textheading}>
              tabung sampah organikmu disini
            </Text>
          </View>
          <View>
            <Container>
              <Content>
                <Form>
                  <Item>
                    <Input placeholder="Username" />
                  </Item>
                  <Item last>
                    <Input placeholder="Password" />
                  </Item>
                </Form>
              </Content>
            </Container>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: heightAuto,
  },
  stretch: {
    width: widthAuto * 0.7,
    height: widthAuto * 0.2,
    resizeMode: 'stretch',
  },
  flexposition: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingVertical: heightAuto * 0.25,
    paddingHorizontal: widthAuto * 0.15,
  },
  textheading: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Login;
