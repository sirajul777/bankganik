import * as React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView} from 'react-native';
import {bunga} from '../../assets';
import {hijau, putih} from '../../assets/Colors/color';
import {heightAuto, widthAuto} from '../../assets/constant/constant';
import {Navbar, Flat} from '../../components';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Navbar />
      </View>
      <View
        style={{
          backgroundColor: putih,
          width: widthAuto * 0.45,
          height: widthAuto * 0.45,
          borderRadius: widthAuto * 0.4,
          position: 'absolute',
          zIndex: -999,
          top: -5,
          right: -40,
        }}
      />
      <View>
        <Image style={styles.bunga} source={bunga} />
      </View>
      <View style={styles.posisi}>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          About Us
        </Text>
        <Text style={styles.text}>
          Bankgani merupakan aplikasi sekaligus wadah aktif penggerak pemilah
          sampah dan pendukung pergerakan pertanian organik dengan mensupport
          pembuatan kompos dan pertisida organik dari bahan dasar sampah organik
          yang di kumpulkan dan dijual di bankganik
        </Text>
        <Text style={styles.text}>
          Harapan Bankganik bukan hanya menjadi sekadar aplikasi. Namun wadah
          yang terus berjalan untuk menyokong pergerakan menjaga lingkungan
          lewat pengelolaan sampah di Indonesia. Sehingga pencemaran sampah
          dapat terminimalisir dan menjadi suatu yang bernilai jual.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: putih,
          width: widthAuto * 0.45,
          height: widthAuto * 0.45,
          borderRadius: widthAuto * 0.4,
          position: 'absolute',
          bottom: -20,
          left: -40,
        }}
      />
      <Flat />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    height: heightAuto,
  },
  bunga: {
    resizeMode: 'stretch',
    width: widthAuto,
    height: heightAuto * 0.895,
    position: 'absolute',
  },
  posisi: {
    top: heightAuto * 0.2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
  },
  text: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'justify',
  },
});

export default About;
