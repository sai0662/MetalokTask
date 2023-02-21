import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function Receive({navigation}) {
    return (
<View style={styles.container}>
    <View style={styles.headerView}>
        <Image source={require('../assets/Images/back.png')} style={styles.backImage}/>
        <Text style={styles.headerTxt}>Receive Solana</Text>
    </View>
    <View style={styles.cardView}>
        <Image source={require('../assets/Images/SOL.png')} style={styles.solImg}/>
        <Text style={styles.scnTxt}>Scan the QR code to receive Solana</Text>
        <Image source={require('../assets/Images/scanner.png')} style={styles.scnImg}/>
        <View style={styles.bottomLine}/>
        <View style={styles.orView}>
            <Text style={styles.orTxt}>or</Text>
        </View>
        <Text style={styles.addressTxt}>Your Solana Address</Text>
        <View style={styles.codeView}>
            <Text style={styles.codeTxt}>1k3sdnk24knktn84kn5mge7asd11bfsp9sd</Text>
        </View>
        <View style={styles.copyView}>
            <Text style={styles.cpyTxt}>Copy Address</Text>
        </View>
    </View>
    <TouchableOpacity style={styles.bottomButtonView} onPress={() => navigation.navigate('Send')}>
        <Text style={styles.shareTxt}>Share Address</Text>
    </TouchableOpacity>
</View>
    );
}

export default Receive;