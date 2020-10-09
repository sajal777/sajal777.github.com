import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
