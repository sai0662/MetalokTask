import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import HeaderBar from "../components/HeaderBar";
import styles from "./styles";

function Convert({navigation}) {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <View
        style={styles.line}
      />
      <View style={styles.convertView}>
        <Text
          style={styles.convertText}
        >
          Convert Crypto
        </Text>
        <View style={styles.imageView}>
          <Image source={require("../assets/Images/info.png")} />
          <Image
            source={require("../assets/Images/settings.png")}
            style={styles.settingImage}
          />
        </View>
      </View>
      <View
        style={styles.cardView}
      >
        <View style={styles.fromView}>
          <Text style={styles.fromText}>FROM</Text>
          <View style={styles.fromInnerView}>
            <Text style={styles.btcText}>BTC</Text>
            <Image
              source={require("../assets/Images/dropdown.png")}
              style={styles.dropDownImage}
            />
          </View>
        </View>
        <View
          style={styles.inputField}
        >
          <Text
            style={styles.btcTextValue}
          >
            02.00
          </Text>
          <View
            style={styles.btcView}
          >
            <Image
              source={require("../assets/Images/BTC.png")}
              style={styles.btcImg}
            />
            <Text
              style={styles.btcTxt}
            >
              BTC
            </Text>
          </View>
        </View>
        <View style={styles.convertImg}>
        <Image source={require('../assets/Images/convert.png')}/>
      </View>
      <View style={styles.toView}>
          <Text style={styles.toTxt}>To</Text>
          <View style={styles.usdView}>
            <Text style={styles.usdtTxt}>USDT</Text>
            <Image
              source={require("../assets/Images/dropdown.png")}
              style={styles.drpDwnImage}
            />
          </View>
        </View>
        <View
          style={styles.inputUsdView}
        >
          <Text
            style={styles.usdtTextValue}
          >
            88365.37
          </Text>
          <View
            style={styles.innerUsdtView}
          >
            <Image
              source={require("../assets/Images/USDT.png")}
              style={styles.usdImg}
            />
            <Text
              style={styles.usdText}
            >
              USDT
            </Text>
          </View>
        </View>
        <View style={styles.cardBottomView}>
        <Text style={styles.bottomTxt}>Slippage Tolerance</Text>
        <Text style={styles.btmPerTxt}>5%</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.preViewButton} onPress={() => navigation.navigate('Graph')}>
        <Text style={styles.preTxt}>Preview Convert</Text>
    </TouchableOpacity>
    </View>
  );
}

export default Convert;
