import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {bankganik, bg} from '../../assets/img/image';
import {key, logo, user} from '../../assets/icons/icons';
import {hijau, putih, hitam} from '../../assets/Colors/color';
import {heightAuto, widthAuto} from '../../assets/constant/constant';

const Login = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={bg} style={styles.bg} />
      </View>
      <View style={styles.flexposition}>
        <Image source={logo} style={styles.logo} />
        <View>
          <Image source={bankganik} style={styles.stretch} />
          <Text style={styles.textheading}>tabung sampah organikmu disini</Text>
        </View>
        <View style={styles.forminput}>
          <Image source={user} style={styles.iconstyle} />
          <TextInput
            style={styles.textinput}
            placeholder="Username"
            placeholderTextColor={putih}
            // onChangeText={text => this.setState({email: text})}
          />
        </View>
        <View style={styles.forminput}>
          <Image source={key} style={styles.iconstyle} />
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            placeholderTextColor={putih}
            // onChangeText={text => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.replace('Dashboard');
          }}>
          <Text
            style={{
              color: putih,
              fontWeight: '700',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={styles.fixbottom}>
          <Text style={styles.paneltext}>Belum punya akun ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={{
                color: {hitam},
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: heightAuto,
    flex: 1,

    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    width: widthAuto,
    height: heightAuto,
    zIndex: -9999,
    resizeMode: 'stretch',
  },
  logo: {
    width: widthAuto * 0.6,
    height: widthAuto * 0.5,
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
    top: -5,
  },
  iconstyle: {
    width: 30,
    marginTop: 10,
    height: 30,
    position: 'relative',
    resizeMode: 'stretch',
  },
  stretch: {
    width: widthAuto * 0.6,
    height: widthAuto * 0.2,
    alignSelf: 'center',
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
    color: putih,
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  forminput: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 20,
  },
  textinput: {
    color: putih,
    textAlign: 'center',
    backgroundColor: hijau,
    paddingHorizontal: 20,
    marginBottom: 15,
    marginLeft: 10,
    width: widthAuto * 0.5,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    color: putih,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    borderRadius: 10,
    padding: 10,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: hijau,
    borderTopColor: putih,
    width: widthAuto * 0.3,
  },
  fixbottom: {
    position: 'absolute',
    zIndex: 99999,
    top: heightAuto * 0.9,
    width: widthAuto * 1,
    height: 60,
    backgroundColor: hijau,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  paneltext: {
    color: putih,
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
