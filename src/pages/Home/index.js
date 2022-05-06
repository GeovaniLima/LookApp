import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.block}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home;