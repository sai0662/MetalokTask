import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function BottomTab() {
    return (
        <View
        style={styles.container}>
        <View style={styles.bottomView}>
        <Image source={require('../../assets/Images/home.png')} />
        <Text style={styles.homeText}>Home</Text>
        </View>
        <TouchableOpacity style={styles.bottomView}>
          <Image source={require('../../assets/Images/orders.png')} />
          <Text style={styles.orderText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../assets/Images/swipe.png')} style={styles.swipeImage}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../assets/Images/portfolio.png')} />
        <Text style={styles.portText}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../assets/Images/wallet.png')} />
        <Text style={styles.walletText}>Wallet</Text>
        </TouchableOpacity>
      </View>
    );
}

export default BottomTab;