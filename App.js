import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StatusBar } from 'react-native';

// react-native run-android --variant=release

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={style.content}>
        <StatusBar hidden />
        <Text style={style.text}>ju-js game engine phase 1</Text>
      </View>
      );
    }
}
    
const style = {
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000066'
  },
  text: {
    color: 'white'
  }
};
    
export default App;
    