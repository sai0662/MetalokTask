import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import BottomTab from "../components/BottomTab";
import HeaderBar from "../components/HeaderBar";
import styles from "./styles";

function Graph() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <ScrollView style={styles.graphView}>
        <Image source={require('../assets/Images/graph.png')}/>
        <TouchableOpacity
        style={styles.tradeButton}
        onPress={() => navigation.navigate("Graph")}
      >
        <Image source={require('../assets/Images/curve.png')} style={styles.curveImage}/>
        <Text
          style={styles.textButton}
        >
          Recent Trades
        </Text>
        <Image source={require('../assets/Images/info2.png')} style={styles.infoImage}/>
      </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <BottomTab />
      </View>
    </View>
  );
}

export default Graph;
