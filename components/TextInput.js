import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <TextInput
        style={{
          textAlign: "center",
          marginLeft: '14%',
          width: 300,
          height: 30,
          borderBottomColor: 'black',
          borderTopWidth: 0, 
          borderLeftWidth: 0, 
          borderRightWidth: 0, 
          borderBottomWidth: 1
        }}
        onChangeText={(text) => { this.setState({text})
                                  this.props.updateData(text)}}
        value={this.state.text}
        placeholder={this.props.placeee}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);


