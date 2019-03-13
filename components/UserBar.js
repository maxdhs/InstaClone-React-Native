import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class UserBar extends React.Component {
    render() {
        return (
            <View style={styles.userIconContainer}>
                <Image style={styles.profile} resizeMode='stretch' source={require('../assets/profile.jpg')} />
                <Text style={styles.userName}>jazzer234</Text>
                <Text style={styles.elipsis}>...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    userIconContainer: {
        height: '7%',
        borderBottomColor: '#bbb',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 200,
        marginLeft: 10
    },
    userName: {
        marginLeft: 10,
    },
    elipsis: {
        marginLeft: 'auto',
        padding: '2%',
        alignSelf: 'center',
        fontSize: 40,
        marginBottom: '5%'
    }
});
