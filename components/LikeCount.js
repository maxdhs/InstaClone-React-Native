import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class LikeCount extends React.Component {
  render() {
    return (
        <View style={styles.likeCountContainer}>
          <Image style={styles.filledHeart} source={require('../assets/filledHeart.png')} />
          <Text>121 likes</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '3%'
  },
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
  likeCountContainer: {
    height: '5%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center'
  },
  filledHeart: {
    width: 20,
    height: 20,
    marginLeft: 10
  }
});
