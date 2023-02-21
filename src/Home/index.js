import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BottomTab from "../components/BottomTab";
import HeaderBar from "../components/HeaderBar";
import styles from "./styles";

const TopBarList = [
  {
    status: "TOP COINS",
  },
  {
    status: "TOP NEWS",
  },
];

const coinsData = [
  {
    name: "Bitcoin",
    value: "2,509.75",
    percent: "+9.77%",
    status: "TOP COINS",
    image: require("../assets/Images/coin1.png"),
    sold: "BUY",
  },
  {
    name: "Ethereum",
    status: "TOP COINS",
    value: "2,509.75",
    percent: "-21.00%",
    image: require("../assets/Images/ETH.png"),
    sold: "BUY",
  },
  {
    name: "FTX Token",
    status: "TOP COINS",
    value: "553.06",
    percent: "-22.97%",
    image: require("../assets/Images/FTT.png"),
    sold: "BUY",
  },
  {
    name: "Hedara",
    status: "TOP COINS",
    value: "2,509.75",
    percent: "+16.31%",
    image: require("../assets/Images/HBAR.png"),
    sold: "BUY",
  },
  {
    name: "FTX Token",
    status: "TOP COINS",
    value: "553.06",
    percent: "-22.97%",
    image: require("../assets/Images/FTT.png"),
    sold: "BUY",
  },
];

const newsData = [
  {
    type: "Decrypt",
    description:
      "Solana have jumped by 40% over the last two days despite increased threat of hackers.",
  },
  {
    type: "Crpto",
    description:
      "Solana have jumped by 40% over the last two days despite increased threat of hackers.",
  },
  {
    type: "Decrypt",
    description:
      "Solana have jumped by 40% over the last two days despite increased threat of hackers.",
  },
  {
    type: "Crpto",
    description:
      "Solana have jumped by 40% over the last two days despite increased threat of hackers.",
  },
];

const TopCoins = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={coinsData}
        renderItem={({ item, index }) => (
          <View>
            <View
              key={index}
              style={{
                width: "90%",
                height: 70,
                flexDirection: "row",
                backgroundColor: "#161A33",
                padding: 10,
                justifyContent: "center",
                borderRadius: 15,
                marginTop: 10,
                alignSelf: "center",
              }}
            >
              <View>
                <Image
                  source={item.image}
                  style={{
                    marginLeft: -5,
                    marginTop: 0,
                    width: 50,
                    height: 50,
                  }}
                />
              </View>
              <View>
                <Text style={{ color: "#fff", marginLeft: 15 }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#fff", marginLeft: 13, marginTop: 2 }}>
                    {item.value}
                  </Text>
                  <Text style={{ color: "#fff", marginTop: 2, marginLeft: 6 }}>
                    {item.percent}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  marginLeft: 90,
                  width: "20%",
                  height: 45,
                  borderWidth: 1,
                  borderColor: "#8885FB",
                  borderRadius: 10,
                  marginTop: 2,
                }}
                onPress={() => navigation.navigate("Receive")}
              >
                <Text
                  style={{
                    color: "#8885FB",
                    alignSelf: "center",
                    marginTop: 12,
                  }}
                >
                  {item.sold}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const TopNews = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#fff", marginLeft: 30, marginTop: 10 }}>
          Top Stories
        </Text>
        <Image
          source={require("../assets/Images/load.png")}
          style={{ marginTop: 14, marginLeft: 258 }}
        />
      </View>
      <FlatList
        data={newsData}
        renderItem={({ item, index }) => (
          <View>
            <View
              style={{
                width: "90%",
                height: 70,
                flexDirection: "row",
                backgroundColor: "#161A33",
                padding: 10,
                justifyContent: "center",
                borderRadius: 15,
                marginTop: 10,
                alignSelf: "center",
              }}
            >
              <View>
                <Text style={{ color: "#fff", marginLeft: 10 }}>
                  {item.description}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#fff", marginLeft: 10 }}>
                    {item.type}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

function Home({ navigation }) {
  const [showCoins, setShowCoins] = useState(true);

  const [status, setStatus] = useState("TOP COINS");

  const onChangeScreen = () => {
    if (status === "TOP COINS") {
      setShowCoins((prev) => !prev);
    } else {
      setShowCoins(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <View style={styles.inviteView}>
        <View style={styles.innerInviteView}>
          <Text style={styles.inviteTitleTxt}>
            Invite and Earn $10 worth Bitcoin!
          </Text>
          <Text style={styles.inviteDesTxt}>
            Earn $10 worth of BTC whenever your friend makes their first trade
            on dripp.
          </Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.buttonTxt}>Invite Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topBarButtons}>
        <View style={styles.topButtonView}>
          {TopBarList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.btnTab,
                status === item.status && styles.btnTabActive,
              ]}
              onPress={() => onChangeScreen(status)}
            >
              <Text
                style={[
                  styles.btnTabText,
                  status === item.status && styles.btnTabTextActive,
                ]}
              >
                {item.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {showCoins ? (
        <TopCoins navigation={navigation} />
      ) : (
        <TopNews navigation={navigation} />
      )}
      <View style={styles.bottomView}>
        <BottomTab />
      </View>
    </SafeAreaView>
  );
}

export default Home;
