import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {flex: 1, backgroundColor: '#0E1327'},
    headerView: {marginLeft: 22, flexDirection: 'row', marginTop: 50},
    backImage: {marginTop: 3},
    headerTxt: {color: '#fff', marginLeft: 20, fontWeight: '800', fontSize: 16},
    cardView: {width: '90%', height: '70%',backgroundColor: '#161A33', marginTop: 20, alignSelf: 'center'},
    solImg: {alignSelf: 'center', marginTop: 20},
    scnTxt: {color:'#B9C1D9', alignSelf: 'center', marginTop: 20, fontWeight: '600'},
    scnImg:{alignSelf: 'center', marginTop: 20},
    bottomLine: {width: '88%', borderWidth: 1, marginTop: 40, alignSelf: 'center', borderColor: '#252A4D'},
    orView: {width: '8%', height: '4%', backgroundColor: '#FFFFFF', marginTop: -12, marginLeft: 170, borderRadius: 10},
    orTxt:{color: '#8F97A0', marginLeft: 6, marginTop: -2},
    addressTxt: {alignSelf: 'center', marginTop: 20, color: '#B9C1D9', fontWeight: '500', fontSize: 16},
    codeView:{borderColor: '#252A4D', borderWidth: 1, marginTop: 20, width: '86%',height: '8%', alignSelf: 'center'},
    codeTxt: {color: '#ECF4FF', marginTop: 10, alignSelf: 'center'},
    copyView:{width: '40%', height: '7%', backgroundColor: '#F2ECFF', alignSelf: 'center', marginTop: 40, borderRadius: 5},
    cpyTxt:{color: '#613AF1', alignSelf: 'center', marginTop: 10, fontWeight: '500', },
    bottomButtonView:{width: '90%', height: '6%',backgroundColor: '#613AF1', marginTop: '20%', alignSelf: 'center', borderRadius: 10},
    shareTxt:{alignSelf: 'center', color: '#F8F9FA', fontSize: 12, marginTop: 15},
});