// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const SwiperCard = ({ card }) => {
    
    const navigation = useNavigation();
    // Check if card is undefined or null
    if (!card) {
      return null; // Render nothing if card is not defined
    }
  
    // Destructure card object
    const { img, username, bio, id } = card;

  return (
    <View style={[styles.card,{}]}>
        <ImageBackground
            source={{ uri: card.img }} // or require('path/to/your-image.jpg')
            // source={require(`../../assets/imagesnew/1647447318764.jpg`)}
            style={[styles.background, {width: '100%', height: '100%',}]}
        >
            
            <View style={[styles.overlay, {paddingHorizontal:20}]}>
            <TouchableOpacity onPress={() => navigation.navigate('OtherProfile', {userId: card.id})} style={{flexDirection: 'row'}}>
                <FeatherIcon style={{backgroundColor: 'white', padding: 5, borderRadius: 30}} color={'black'} size={25} name='user' />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ width: '80%'}}>
                    <Text style={styles.text}>{card.username}</Text>
                    <Text style={styles.biotext}>{card.bio}</Text>
                </View>
                <TouchableOpacity style={{justifyContent: 'center'}}>
                    <FontAwesomeIcon style={{backgroundColor: 'white', paddingVertical: 12, paddingLeft: 10, paddingRight: 15, borderRadius: 30}} color={'black'} size={25} name='send-o' />
                </TouchableOpacity>
            </View>
            </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginBottom: 100,
    overflow: 'hidden',
  },
  background: {
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
  },
  overlay:{
      backgroundColor: '#000000a1',
      borderRadius: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 50,
      paddingTop: 20,
      paddingBottom: 50,
      flex: 1,
  },
  biotext: {
    fontSize: 18,
  },
});

export default SwiperCard;
