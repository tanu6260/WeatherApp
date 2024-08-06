import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItemsL:'center' , 
    justifyContent:'center'
  },
  innnerContainer: {
    width: SIZES.width * 0.94,
    alignSelf: 'center',
    position:'absolute' , 
    top:SIZES.height*0.01 ,
    // bottom: SIZES.height * 0.005,
    // borderWidth:1
  },
  backImg: {
    // justifyContent: 'center',
    width: SIZES.width,
    height: SIZES.height,
    resizeMode: 'cover',
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.08,
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    // borderWidth:1 ,
    marginTop: SIZES.height * 0.09,
  },
  modalInnerContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 10,
    width: SIZES.width * 0.9,
  },
  locationContainer: {
    marginVertical: SIZES.height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray10,
    width: SIZES.width * 0.89,
  },
  locationText: {
    paddingVertical: SIZES.height * 0.008,
    marginLeft: SIZES.width * 0.08,
    fontSize: SIZES.width * 0.035,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },
  forecastInnerContainer:{
    marginHorizontal: SIZES.width * 0.03,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: SIZES.width * 0.07,
    backgroundColor: COLORS.gray20,
    paddingVertical: SIZES.height * 0.01,
    borderRadius: 8,
  },
 cityName:{
    fontSize: SIZES.width * 0.07,
    ...FONTS.sixHundred,
    color: COLORS.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  stateName :{
    fontSize: SIZES.width * 0.055,
    ...FONTS.fiveHundred,
    color: COLORS.gray20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  weatherImg
  :{
    width: SIZES.width * 0.65,
    height: SIZES.width * 0.65,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tempText:{
    fontSize: SIZES.width * 0.08,
    ...FONTS.sixHundred,
    color: COLORS.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text:{
    
      fontSize: SIZES.width * 0.055,
      ...FONTS.sixHundred,
      color: COLORS.gray20,
      textAlign: 'center',
      textAlignVertical: 'center',
    
  },
  heading:{
   
      color: COLORS.white,
      fontFamily: FONTS.medium,
      fontSize: SIZES.width * 0.055,
    
  },
  innerText:{
    color: COLORS.black,
    fontSize: SIZES.width * 0.045,
    fontFamily: FONTS.medium,
  },
  locationContainer:{
    flexDirection: 'row',
    alignSelf: 'center',
    gap: SIZES.width * 0.025,
    marginTop: SIZES.height * 0.03,
  }
                   
});

export default styles;
// import {StyleSheet} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../constants';

// export default StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   backImg: {
//     flex: 1,
//   },
//   innerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchBox: {
//     height: 40,
//     width: '80%',
//     borderColor: COLORS.gray,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     backgroundColor: COLORS.white,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalInnerContainer: {
//     width: '80%',
//     backgroundColor: COLORS.white,
//     borderRadius: 10,
//     padding: 20,
//   },
//   locationItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.gray,
//   },
//   weatherContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   weatherText: {
//     fontSize: SIZES.h3,
//     color: COLORS.black,
//   },
// });
