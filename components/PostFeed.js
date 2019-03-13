import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Post from './Post'

export default class PostFeed extends React.Component {

    _renderPost({ item }) {
        return <Post />
    }
    _returnKey(item) {
        return item.toString();
    }
    render() {
        return (
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={this._returnKey}
                renderItem={this._renderPost}
            />
        );
    }
}
