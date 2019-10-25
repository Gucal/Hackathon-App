import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class CreateBag extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Create Bag</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#000A14',
  },
});

export default CreateBag;
