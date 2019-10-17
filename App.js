import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "65fc0489b5b20d7d9667317469b9e947";

export default class App extends React.Component {
  state = {
    isLoading: true,
  }

  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main
    })
  }

  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(40.056981, 124.307524/*latitude, longitude*/);
    } catch (error) {
      Alert.alert("Cannot find you", "So sad ");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
