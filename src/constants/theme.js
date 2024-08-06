import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  light: 'rgba(231, 99, 8, 0.2)',

  white: '#FFFFFF',

  // black
  black: '#000000',
  black1: 'rgba(100, 100, 100, 1)',

  // grey
  gray: '#616161',
  gray1: 'rgba(101, 98, 98, 1)',
  gray10: '#D9D9D9',
  gray20: '#CCCCCC',
  gray30: '#A1A1A1',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  // lightGray
  lightGray: '#C1C1C1',
  lightGray1: '#DDDDDD',
  lightGray10: 'rgba(242, 242, 242, 1)',
  lightGray31: 'rgba(196, 196, 196, 0.31)',
};

export const SIZES = {
  width,
  height,
};

export const FONTS = {
  //Font family
  bold: 'Poppins-Bold-700',
  semiBold: 'Poppins-SemiBold-600',
  medium: 'Poppins-Medium-500',
  regular: 'Poppins-Regular-400',

  fourHundred: {fontFamily: 'Poppins-Regular-400'},
  fiveHundred: {fontFamily: 'Poppins-Medium-500'},
  sixHundred: {fontFamily: 'Poppins-SemiBold-600'},
  sevenHundred: {fontFamily: 'Poppins-Bold-700'},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
