import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './styles';

function HeaderBar() {
    return (
        <View style={styles.header}>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/Images/logo.png')}
          />
          <Text style={styles.headerText}>Sportsverse</Text>
          <Image
            style={styles.dollarLogo}
            source={require('../../assets/Images/dollar.png')}
          />
        </View>
    );
}

export default HeaderBar;