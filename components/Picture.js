import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Picture extends React.Component {
  render() {
    return (
        <View style={styles.picContainer} >
          <Image style={styles.pic} source={require('../assets/vizsla.jpg')} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  picContainer: {
    height: '70%',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  pic: {
    height: '100%',
    width: '100%',
  }
});
