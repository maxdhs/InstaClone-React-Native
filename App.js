import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Header from './components/Header'
import Post from './components/Post'
import PostFeed from './components/PostFeed'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Post />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '3%'
  }
});
