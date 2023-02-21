import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
    paddingVertical: 15,
    backgroundColor: '#0E1327',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 2,
    height: 70,
  },
  bottomView: {flexDirection: 'column'},
  homeText: {color: '#fff', fontSize: 12, marginLeft: -6},
  orderText: {color: '#98A1A9', fontSize: 12, marginLeft: -6},
  swipeImage: {marginTop: -10},
  portText: {color: '#98A1A9', fontSize: 12, marginLeft: -12},
  walletText: {color: '#98A1A9', fontSize: 12, marginLeft: -6, marginTop: 6},
});