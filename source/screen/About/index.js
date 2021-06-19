import * as React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
        About Us
      </Text>
      <Text style={styles.text}>
        Bankgani merupakan aplikasi sekaligus wadah aktif penggerak pemilah
        sampah dan pendukung pergerakan pertanian organik dengan mensupport
        pembuatan kompos dan pertisida organik dari bahan dasar sampah organik
        yang di kumpulkan dan dijual di bankganik
      </Text>
      <Text style={styles.text}>
        Harapan Bankganik bukan hanya menjadi sekadar aplikasi. Namun wadah yang
        terus berjalan untuk menyokong pergerakan menjaga lingkungan lewat
        pengelolaan sampah di Indonesia. Sehingga pencemaran sampah dapat
        terminimalisir dan menjadi suatu yang bernilai jual.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'justify',
  },
});

export default About;
