import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class ActionBar extends React.Component {
  render() {
    return (
        <View style={styles.likeIconContainer}>
          <Image style={styles.likeIcon} source={require('../assets/heart.png')} />
          <Image style={styles.likeIcon} source={require('../assets/bubble.png')} />
          <Image style={styles.likeIcon} source={require('../assets/arrow.png')} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  likeIconContainer: {
    height: '7%',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeIcon: {
    width: 30,
    height: 30,
    margin: 5
  },
});
