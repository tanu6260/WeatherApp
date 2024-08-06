import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, FONTS, image, SIZES} from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

const SearchBox = ({
  placeholder,
  searchStyle,
  onPressSearch,
  onChangeText,
  value,
  searchinputstyle,
}) => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <TouchableOpacity
      onPress={onPressSearch}
      activeOpacity={0.6}
      style={[styles.searchbox, searchStyle]}>
      <TextInput
        editable={true}
        placeholder={placeholder}
        style={[styles.searchinput, searchinputstyle]}
        placeholderTextColor={COLORS.gray40}
        onChangeText={onChangeText}
        value={value}
      />
      <View
        style={{
          backgroundColor: COLORS.gray20,
          paddingHorizontal: SIZES.width * 0.04,
          paddingVertical: SIZES.height * 0.016,
          borderRadius: SIZES.width * 0.08,
          // borderWidth:1
        }}>
        <FontAwesome name="search" size={20} color={COLORS.black1} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchbox: {
    width: width * 0.93,
    marginVertical: height * 0.018,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.width * 0.09,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingHorizontal: width * 0.02,
    justifyContent: 'space-between',
  },
  searchinput: {
    fontSize: SIZES.width * 0.04,
    marginBottom: -3,
    color: COLORS.black,
    width: SIZES.width * 0.78,
    fontFamily: FONTS.medium,
  },
});
