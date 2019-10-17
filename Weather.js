import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subTitle: "Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Thunderstorm in the house",
        subTitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Drizzle",
        subTitle: "Is like rain, but gay"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00c6fb", "#005bea"],
        title: "Rain like a MF",
        subTitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7de2fc", "#b9b6e5"],
        title: "Cold as balls",
        subTitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Atmosphere",
        subTitle: "Just don't go outside"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ff7300", "#fef253"],
        title: "Sunny as fuck",
        subTitle: "Go get your as burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subTitle: "I know, fucking boring"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subTitle: "Just don't go outside"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Mist",
        subTitle: "It's like you have no glasses on"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Dust",
        subTitle: "Thanks a lot China"
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={80} name={weatherOptions[condition].iconName} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.protoTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 40,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    title: {
        color: 'white',
        fontSize: 80,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: "600"
    }
})