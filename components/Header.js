import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.headerContainer}>
          <View></View>
          <Image style={styles.logo} resizeMode="contain" source={require('../assets/logo.png')} />
          <Image style={styles.mail} resizeMode="contain" source={require('../assets/mail.png')} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: '10%',
    height: '10%',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
  },
  logo: {
    height: 150,
    width: 150,
    marginLeft: '10%'
  },
  mail: {
    height: 35,
    width: 35,
    paddingRight: '15%'
  },
 
});
