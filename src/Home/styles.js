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
    header: {flexDirection: 'row', marginTop: 60, justifyContent: 'space-between'},
    headerText: {color: '#FFFFFF', fontSize: 20},
    inviteView: {width: '90%', height: '21%' , backgroundColor: '#252A4D', alignSelf: 'center', marginTop: 30, borderRadius: 15},
    btnTabActive: {backgroundColor: '#252A4D', borderRadius: 15},
    btnTab: {
        width: '47%',
        height: 46,
        flexDirection: 'row',
        backgroundColor: '#161A33',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15,
    },
    btnTabText: {color: '#B9C1D9',marginTop: 4, fontSize: 12, fontWeight: '600' },
    btnTabTextActive : {
        color: '#fff'
    },
    innerInviteView:{width: '90%', height: '50%', marginLeft: 30, marginTop: 28},
    inviteTitleTxt:{color: '#FFFFFF', fontSize: 16, fontWeight: '500'},
    inviteDesTxt:{color: '#FFFFFF', fontSize: 12, marginTop: 10},
    inviteButton:{backgroundColor: '#F8F9FA', width: '34%', height: 42, borderRadius: 20, marginTop: 18},
    buttonTxt:{color: '#7661F6', alignSelf: 'center', marginTop: 8},
    topBarButtons:{ paddingHorizontal: 10, justifyContent: 'center', marginTop: 20},
    topButtonView:{flexDirection: 'row', alignSelf: 'center', backgroundColor: '#161A33', borderRadius: 15},
    bottomView:{marginTop: 10},
})