import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1327',
        width: '100%',
    },
    tinyLogo: {
        marginLeft: 20
    },
    dollarLogo: {
        marginRight: 20
    },
    header: {flexDirection: 'row', marginTop: 50, justifyContent: 'space-between'},
    headerText: {color: '#FFFFFF', fontSize: 20},
    graphView: {alignSelf: 'center', height: '90%', marginTop: 30},
    tradeButton: {
        width: "99%",
        height: "6%",
        backgroundColor: "#161A33",
        marginTop: "4%",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 20,
      },
    curveImage: {marginTop: 16, marginLeft: 110},
    textButton:{
        alignSelf: "center",
        color: "#F8F9FA",
        fontSize: 12,
        marginTop: -15,
      },
    infoImage: {marginLeft: 330, marginTop: -16},
    footer: {width: '100%', height: '8%'},
});