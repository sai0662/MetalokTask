import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

function Send({navigation}) {
    return (
<View style={styles.container}>
<View style={styles.header}>
        <Image source={require('../assets/Images/back.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>Send Solana</Text>
    </View>
    <View style={styles.headerView}>
        <Image source={require('../assets/Images/SOL.png')}/>
        <View style={styles.headerViewText}>
        <Text style={styles.solText}>Solana</Text>
        <Text style={styles.solTxt}>Sol</Text>
        </View>
        <View style={styles.balanceView}>
        <Text style={styles.balTxt}>Available Balance</Text>
        <Text style={styles.valTxt}>69.420 SOL</Text>
        </View>
    </View>
    <View style={styles.cardView}>
    <Text style={styles.enterAddTxt}>Enter Address</Text>
        <View style={styles.firstInputView}>
        <TextInput style={styles.addressInput}/>
        <Image source={require('../assets/Images/sol.png')} style={styles.scannerImg} />
        </View>
        <View style={styles.firstInputView}>
        <Text style={styles.amountTxt}>Amount</Text>
        <Text style={styles.maxTxt}>Max</Text>
        </View>
        <View  style={styles.underLine}/> 
        <View style={styles.firstInputView}>
        <TextInput style={styles.amountInput}/>
        </View>
        <Text style={styles.noteTxt}>Note</Text>
        <View style={styles.firstInputView}>
        <TextInput style={styles.amountInput}/>
        </View>
        <Text style={styles.noteText}>Note</Text>
        <Text style={styles.transactionTxt}>Transacion Fee:0.002%</Text>
        <Text style={styles.minValueTxt}>Min:0.10 SOL - Min:69.420 SOL</Text>
    </View>
    <TouchableOpacity style={styles.bottomButtonView} onPress={() => navigation.navigate('SendActive')}>
        <Text style={styles.sendText}>Send Solana</Text>
    </TouchableOpacity>
</View>
    );
}

export default Send;