import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadialGradient from 'react-native-radial-gradient';

export default function ChatNewScreen({navigation}) {
  return (
    <>
    <RadialGradient 
    // style={{width:200,height:200}}
                        // colors={['black','green','blue','red']}
                        // colors={['#54298A','#222222']}
                        // colors={['#54298a70','#473859','#222222']}
                        colors={['#55288E','#2d0043']}
                        // stops={[0.1,0.4,0.3,0.75]}
                        stops={[0.1,0.1,0.9]}
                        center={[215,400]}
                        // center={[100,100]}
                        radius={200}>
    <View style={styles.chatscreen}>
        <View style={styles.imagebox}>
            <Image
            source={require('../../assets/imagesnew/chat1.png')}
            style={styles.frontimg}
             />
        </View>
        <View style={styles.chatinnerbox}>
            <Text style={[styles.maintext,{color: 'white'}]}>A New Way to Connect With Your Friends.</Text>
            <Text style={[styles.secndtext,{color: 'grey', textAlign: 'left'}]}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
            <View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatListScreen')}>
                        <Icon name="angle-right" size={50}  style={[styles.buttonText,{fontSize: 30}]}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    </RadialGradient>
    </>
  )
}

const styles = StyleSheet.create({
    chatscreen: {
        height: '100%',
        // backgroundColor: '#222222',
        display: 'flex',
        verticalAlign: 'middle',
        paddingTop: 60,
    },
    chatinnerbox: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        
    },
    imagebox:{
       flex: 1
    },
    frontimg:{
        flex: 1,
        // resizeMode: 'cover',
        width: '100%',
        marginHorizontal: 10
    },
    maintext: {
        marginTop: 60,
        fontSize: 30
    },
    secndtext: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    button: {
        width: 70,
        height: 70,
        // backgroundColor: '#efe5ff', // Change the background color as needed
        backgroundColor: '#a689c88c', // Change the background color as needed
        transform: [{ rotate: '45deg' }], // Rotate the button by 45 degrees
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 50
      },
    buttonText: {
        color: 'white',
        paddingLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
        transform: [{ rotate: '-45deg' }], // Counter-rotate the text by -45 degrees to make it readable
    },
});