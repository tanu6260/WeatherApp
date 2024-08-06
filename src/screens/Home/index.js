import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Modal,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import {COLORS, FONTS, SIZES} from '../../constants';
import image from '../../constants/image';
import SearchBox from '../../components/search';
import {fetchLocationApi, fetchWeatherApi} from '../../api/weatherApi';

const Home = () => {
  const [location, setLocation] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      if (searchText.length >= 4) {
        const locations = await fetchLocationApi({cityName: searchText});
        console.log('Fetched Locations:', locations);
        setLocation(locations || []);
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    };

    fetchLocations();
  }, [searchText]);

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     async position => {
  //       const {latitude, longitude} = position.coords;
  //       setCurrentLocation({latitude, longitude});
  //       const weather = await fetchWeatherApi({
  //         cityName: `${latitude},${longitude}`,
  //         days: 8,
  //       });
  //       console.log('Fetched Weather:', weather);
  //       setWeatherData(weather);
  //       setSelectedLocation({
  //         name: weather?.location?.name,
  //         country: weather?.location?.country,
  //       });
  //       setLoading(false);
  //     },
  //     error => {
  //       console.log('error', error);
  //       setLoading(false);
  //     },
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
  // }, []);
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     async position => {
  //       try {
  //         const { latitude, longitude } = position.coords;
  //         setCurrentLocation({ latitude, longitude });
  //         const weather = await fetchWeatherApi({
  //           cityName: `${latitude},${longitude}`,
  //           days: 8,
  //         });
  //         console.log('Fetched Weather:', weather);
  //         setWeatherData(weather);
  //         setSelectedLocation({
  //           name: weather?.location?.name,
  //           country: weather?.location?.country,
  //         });
  //         setLoading(false);
  //       } catch (error) {
  //         console.error('Error fetching weather data:', error);
  //         setLoading(false);
  //       }
  //     },
  //     error => {
  //       try {
  //         console.log('Error getting current position:', error);
  //         setLoading(false);
  //       } catch (innerError) {
  //         console.error('Error handling error:', innerError);
  //       }
  //     },
  //     { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
  //   );
  // }, []);


  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        Geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Current Position:', latitude, longitude);
            setCurrentLocation({ latitude, longitude });

            const weather = await fetchWeatherApi({
              cityName: `${latitude},${longitude}`,
              days: 8,
            });

            console.log('Fetched Weather:', weather);

            if (weather) {
              setWeatherData(weather);
              setSelectedLocation({
                name: weather?.location?.name,
                country: weather?.location?.country,
              });
            } else {
              console.error('Weather data is null');
            }

            setLoading(false);
          },
          (error) => {
            console.error('Error getting current position:', error);
            setLoading(false);
          },
          { enableHighAccuracy: true, timeout: 60000, maximumAge: 1000 } 
        );
      } catch (error) {
        console.error('Error in fetchCurrentLocation:', error);
        setLoading(false);
      }
    };

    fetchCurrentLocation();
  }, []);
  
  


  const handleSearch = text => {
    console.log('Search Text:', text);
    setSearchText(text);
  };

  const handleLocationSelect = async option => {
    setSearchText('');
    setModalVisible(false);
    setSelectedLocation(option);

    const weather = await fetchWeatherApi({cityName: option.name, days: 8});
    console.log('Fetched Weather:', weather);
    setWeatherData(weather);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.blue} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.black}
          style={styles.loadingIndicator}
        />
      ) : (
        <>
          <ImageBackground
            source={image.backImg}
            style={styles.backImg}
            blurRadius={60}
          />
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            style={styles.innnerContainer}
            showsVerticalScrollIndicator={false}>
            <SearchBox
              placeholder="Search City"
              onChangeText={handleSearch}
              value={searchText}
              onPressSearch={() => setModalVisible(!modalVisible)}
            />

         
            <View
              style={styles.locationContainer}
              >
              <Text numberOfLines={1} style={styles.cityName}>
                {selectedLocation?.name}
              </Text>
              <Text style={styles.stateName}>{selectedLocation?.country}</Text>
            </View>

            <Image
              source={{uri: `https:${weatherData?.current?.condition?.icon}`}}
              style={styles.weatherImg}
            />
            {weatherData?.current?.temp_c && weatherData?.current?.temp_f && (
              <Text style={styles.tempText}>
                {weatherData?.current?.temp_c}°C /{weatherData?.current?.temp_f}
                °F
              </Text>
            )}
            <Text style={styles.text}>
              {weatherData?.current?.condition?.text}
            </Text>
       

            <View style={{marginTop: SIZES.height * 0.03}}>
              <Text style={styles.heading}>Daily Forecast</Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={weatherData?.forecast?.forecastday?.slice(1)}
              renderItem={({item, index}) => (
                <View key={index} style={styles.forecastInnerContainer}>
                  <Image
                    source={{uri: `https:${item?.day?.condition?.icon}`}}
                    style={{
                      width: SIZES.width * 0.2,
                      height: SIZES.width * 0.2,
                    }}
                  />
                  <Text style={styles.innerText}>{item?.date}</Text>
                  {item?.day?.avgtemp_c && (
                    <Text style={styles.innerText}>
                      {item?.day?.avgtemp_c}°C / {item?.day?.avgtemp_f}°F
                    </Text>
                  )}
                </View>
              )}
            />
          </ScrollView>
        </>
      )}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInnerContainer}>
            {location.length > 0 ? (
              <FlatList
                data={location}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleLocationSelect(item)}
                    style={styles.locationContainer}>
                    <Text style={styles.locationText}>
                      {item?.name} {item?.country}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <Text style={styles.locationText}>No location found</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
