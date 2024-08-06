import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    btnContainer: {
        marginVertical: height * .02,
        marginHorizontal: width * .04,
    },
    languageBtn: {
        justifyContent: 'center',
        height: height * .06,
        // borderWidth:1,
        backgroundColor: COLORS.white,
        elevation: 3,
        paddingHorizontal: width * .04,
        borderRadius: 8,
        marginBottom: height * .02,
    },
    labels: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.black,
        marginBottom: -3,
    },
    setLan_btn:{
        backgroundColor:COLORS.black,
        alignItems:"center",
        justifyContent:'center',
        height:height*.067,
        borderRadius:10,
        marginTop:height*.01,
        marginBottom : SIZES.height*0.01,
        marginHorizontal : SIZES.width*0.05,
        width : SIZES.width*0.9,
    },
    setLang_text:{
        color:COLORS.white,
        fontFamily: 'Poppins Medium 500',
        marginBottom:-4,
        fontSize:15
    }
})