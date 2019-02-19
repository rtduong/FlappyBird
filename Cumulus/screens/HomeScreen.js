import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { getFiveDayForecast } from '../services/fetchWeather';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    const location = "";

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <TextInput style={styles.getStartedText} placeholder = "ZIP Code..." onChangeText={(text) => this._handleLocationInput(text)}/>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleSearchPress} style={styles.helpLink}>
              <Icon.Ionicons name='ios-search' size={26}/>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }

  _handleLocationInput = (text) => {
    // TODO: Autocomplete - saved searches and/or autocomplete
    alert('Handling Location Input ' + text);
    location = text;
  };

  _handleSearchPress = () => {
    // TODO: Call API
    alert('You searched for ' + location)
    getFiveDayForecast(location);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    padding: 5,
    borderWidth: 2,
  },
});
