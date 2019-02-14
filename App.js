import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getForecast } from './services/fetchWeather';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    handleLocationInput = (text) => {
      // TODO: Autocomplete - saved searches and/or autocomplete
      alert('Handling Location Input');
      this.state.location = text;
    }
    search = (text) => {
      // TODO: Call API
      alert('You searched for ' + text)
      getForecast(98125);
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.flexlocationInput}>
          <TextInput style={styles.locationInput}
            placeholder="ZIP Code"
            onChangeText={(text) => handleLocationInput(text)}
          />

          <Button style={styles.searchButton}
            title="S"
            onPress={() => {
              // TODO: Change button to use TouchableOpacity for more styling options
              alert('You tapped the button!');
              search(this.state.location);
            }}
          />
        </View>

        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 40
  },
  flexlocationInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  locationInput: {
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  searchButton: {
    color: "#90A4AE",
    width: 40,
    height: 40
  }
});
