// Screen2.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <View>
      <Button
        title="Go to NewsFeed"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
      <View style={{marginTop:10}}>
        
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Screen2;
