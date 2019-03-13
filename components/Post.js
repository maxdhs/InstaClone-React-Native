import React from 'react'
import { View, StyleSheet } from 'react-native'

import UserBar from './UserBar'
import Picture from './Picture'
import ActionBar from './ActionBar'
import LikeCount from './LikeCount'

export default class Post extends React.Component {
  render() {
    return (
      <View >
        <UserBar />
        <Picture />
        <ActionBar />
        <LikeCount />
      </View>
    );
  }
}


