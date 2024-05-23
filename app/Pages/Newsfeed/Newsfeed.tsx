// Privious App.tsx
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useState } from 'react';
import { Button, Header, Divider } from 'react-native-elements';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import NotificationScreen from '../Notifications/NotificationScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Animated,
  BackHandler,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  // LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useFocusEffect } from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Newsfeed({navigation}): React.JSX.Element {

  useFocusEffect (
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [scrollY] = useState(new Animated.Value(0));

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <View
          style={{backgroundColor: isDarkMode ? '#0C1427' : '#fff', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
           >
            <Text style={{color: isDarkMode ? '#d0d6e1' : '#293241', fontSize: 30, fontWeight: '500'}} >Newsfeed</Text>
            <View style={{flexDirection:'row'}}>
            <IoIcon.Button name="search-outline" size={30} backgroundColor={isDarkMode ? '#0C1427' : '#fff'} color={isDarkMode ? '#d0d6e1' : '#293241'} ></IoIcon.Button>
            <Icon.Button name="sliders" onPress={() => navigation.navigate('NotificationsScreen')} backgroundColor={isDarkMode ? '#0C1427' : '#fff'} size={30} color={isDarkMode ? '#d0d6e1' : '#293241'}></Icon.Button>
            </View>
          </View>
          <View style={{backgroundColor: isDarkMode ? '#070D19' : '#fff', paddingVertical: 15, paddingHorizontal: 10, borderBottomWidth: 0.5, borderColor: 'grey'}} >
            <Text style={{fontSize: 22, color: isDarkMode ? '#d0d6e1' : '#293241', fontWeight: "500"}}>Your Groups</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row", marginTop: 15, overflow: 'scroll'}}>
              <AntIcon name='plus' size={25} style={{padding: 9, backgroundColor:isDarkMode ? '#0C1427' : '#F4F4F5' , borderRadius: 50}} color={isDarkMode ? '#d0d6e1' : 'black'} ></AntIcon>
              <Text style={{marginHorizontal:15, backgroundColor: "#293241", color:"white", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>All</Text>
              <Text style={{marginRight:15, backgroundColor: isDarkMode ? '#0C1427' : "#F4F4F5", color: isDarkMode ? '#d0d6e1' :"#293241", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>Baking & Cooking</Text>
              <Text style={{marginRight:15, backgroundColor: isDarkMode ? '#0C1427' : "#F4F4F5", color: isDarkMode ? '#d0d6e1' :"#293241", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>Croquet</Text>
              <Text style={{marginRight:15, backgroundColor: isDarkMode ? '#0C1427' : "#F4F4F5", color: isDarkMode ? '#d0d6e1' :"#293241", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>Skydiving</Text>
            </ScrollView>
          </View>
          <View style={[styles.tabsContainer,{backgroundColor: isDarkMode ? '#070D19' : '#fff'}]}>
            <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : 'black'}]}>Following</Text>
            <Text style={styles.tabactive}>Groups</Text>
            <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : 'black'}]}>Create</Text>
          </View>
          <View style={{backgroundColor: isDarkMode ? '#070D19' : '#fff',padding: 15}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
              <View style={{backgroundColor: isDarkMode ? '#000' : '#fff', flexDirection: 'row'}}>
                <Text style={{paddingVertical: 15, marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: isDarkMode ? '#0C1427' : '#293241', borderRadius: 30, color: 'white'}}>W</Text>
                <View style={{marginTop:5}}>
                  <Text style={{fontSize:18, fontWeight: '700', color: isDarkMode ? '#d0d6e1' : '#293241' }}>Wes Frances</Text>
                  <Text style={{color: isDarkMode ? '#7987a1' : 'black'}}>Wesfrances</Text> 
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : '#000'}]}>Following</Text>
                  <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{color: isDarkMode ? '#7987a1' : '#293241', fontSize: 15}}>Had a great time filming this one, looking forword to more advantures like this one when I can! Tak...more</Text>
            </View>
            <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{marginTop: 10 , width: 380, height: 380, borderRadius: 10, marginRight: 15}}
                />
            </View>
            <View style={{flexDirection: 'row', backgroundColor: isDarkMode ? '#000' : '#fff', marginTop: 20, marginBottom: 15, justifyContent: 'space-around'}}>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                    <MaterialIcons name='calendar-today' size={25} style={{padding: 14, margin: 'auto', borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}  ></MaterialIcons>
                  </View>
                  <Text style={{color: isDarkMode ? '#d0d6e1' : '#000'}}>2hr ago</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                  <AntIcon name='hearto' size={25} style={{paddingHorizontal: 14, paddingVertical: 14, margin: 'auto' , borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></AntIcon>
                    {/* <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons> */}
                  </View>
                  <Text style={{paddingHorizontal: 10, color: isDarkMode ? '#d0d6e1' : '#000'}}>26.3k</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                    <IoIcon name='chatbubbles-outline' size={25} style={{padding: 14, margin: 'auto', borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></IoIcon>
                  </View>
                  <Text style={{paddingHorizontal: 14, color: isDarkMode ? '#d0d6e1' : '#000'}}>973</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                    {/* <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons> */}
                    <SimpleLineIcons name='action-redo' size={25} style={{padding: 13, margin: 'auto' , borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}} ></SimpleLineIcons>
                  </View>
                  <Text style={{paddingHorizontal: 10, color: isDarkMode ? '#d0d6e1' : '#000'}}>Share</Text>
                </View>
              </View>
            </View>
            {/* <View style={{marginTop: 16}}>
              <View style={{backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, flexDirection: 'row'}}>
                <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{width: 120, height: 120, borderRadius: 10, marginRight: 15}}
                />
                </View>
                <View>
                  <View style={{marginTop: 20, flexDirection: "row"}}>
                    <Text style={{fontSize: 10, backgroundColor: '#293241', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 ,color: 'white', marginRight:5}}>A</Text>
                    <Text style={{fontWeight: '700', fontSize: 13, color: 'black'}}>Nick Price</Text>
                    <Text style={{marginHorizontal: 10, fontSize: 15, color: '#E8E8E8'}}>5d</Text> 
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={{width: 220, color: '#293241'}}>I went on an adventure through the streets of New Yourk and Saw...</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <MaterialIcons name='calendar-today' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></MaterialIcons><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <IoIcon name='play-outline' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></IoIcon><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <AntIcon name='hearto' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></AntIcon><Text>23 hr</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View> */}
          </View>
          <View style={{backgroundColor: 'white',padding: 15}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
              <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                <Text style={{paddingVertical:15, marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: '#293241', borderRadius: 30, color: 'white'}}>W</Text>
                <View style={{marginTop:5}}>
                  <Text style={{fontSize:18, fontWeight: '700', color: '#293241' }}>Wes Frances</Text>
                  <Text>Wesfrances</Text> 
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Text style={styles.tab}>Following</Text>
                  <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{color: '#293241', fontSize: 15}}>Had a great time filming this one, looking forword to more advantures like this one when I can! Tak...more</Text>
            </View>
            <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{marginTop: 10 , width: 380, height: 380, borderRadius: 10, marginRight: 15}}
                />
            </View>
            <View style={{flexDirection: 'row', backgroundColor:'white', marginTop: 20, marginBottom: 15, justifyContent: 'space-around'}}>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                    <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons>
                  </View>
                  <Text>2hr ago</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                  <AntIcon name='hearto' size={25} style={{padding: 12, margin: 'auto' , borderRadius: 50}} color='black' ></AntIcon>
                    {/* <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons> */}
                  </View>
                  <Text style={{paddingHorizontal: 10}}>26.3k</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                    <IoIcon name='chatbubbles-outline' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></IoIcon>
                  </View>
                  <Text style={{paddingHorizontal: 10}}>720</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                    {/* <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons> */}
                    <SimpleLineIcons name='action-redo' size={25} style={{padding: 12, margin: 'auto' , borderRadius: 50}} color='black' ></SimpleLineIcons>
                  </View>
                  <Text style={{paddingHorizontal: 10}}>Share</Text>
                </View>
              </View>
            </View>
            {/* <View style={{marginTop: 16}}>
              <View style={{backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, flexDirection: 'row'}}>
                <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{width: 120, height: 120, borderRadius: 10, marginRight: 15}}
                />
                </View>
                <View>
                  <View style={{marginTop: 20, flexDirection: "row"}}>
                    <Text style={{fontSize: 10, backgroundColor: '#293241', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 ,color: 'white', marginRight:5}}>A</Text>
                    <Text style={{fontWeight: '700', fontSize: 13, color: 'black'}}>Nick Price</Text>
                    <Text style={{marginHorizontal: 10, fontSize: 15, color: '#E8E8E8'}}>5d</Text> 
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={{width: 220, color: '#293241'}}>I went on an adventure through the streets of New Yourk and Saw...</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <MaterialIcons name='calendar-today' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></MaterialIcons><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <IoIcon name='play-outline' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></IoIcon><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <AntIcon name='hearto' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></AntIcon><Text>23 hr</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View> */}
          </View>
          <View style={{backgroundColor: 'white',padding: 15}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
              <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                <Text style={{paddingVertical:15, marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: '#293241', borderRadius: 30, color: 'white'}}>W</Text>
                <View style={{marginTop:5}}>
                  <Text style={{fontSize:18, fontWeight: '700', color: '#293241' }}>Wes Frances</Text>
                  <Text>Wesfrances</Text> 
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Text style={styles.tab}>Following</Text>
                  <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{color: '#293241', fontSize: 15}}>Had a great time filming this one, looking forword to more advantures like this one when I can! Tak...more</Text>
            </View>
            <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{marginTop: 10 , width: 380, height: 380, borderRadius: 10, marginRight: 15}}
                />
            </View>
            <View style={{flexDirection: 'row', backgroundColor:'white', marginTop: 20, marginBottom: 15, justifyContent: 'space-around'}}>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                    <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons>
                  </View>
                  <Text>2hr ago</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                  <AntIcon name='hearto' size={25} style={{padding: 12, margin: 'auto' , borderRadius: 50}} color='black' ></AntIcon>
                    {/* <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons> */}
                  </View>
                  <Text style={{paddingHorizontal: 10}}>20.3k</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                    <IoIcon name='chatbubbles-outline' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></IoIcon>
                  </View>
                  <Text style={{paddingHorizontal: 10}}>786</Text>
                </View>
              </View>
              <View>
                <View style={{marginRight: 15}}>
                  <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
                    {/* <MaterialIcons name='calendar-today' size={25} style={{padding: 12, margin: 'auto', borderRadius: 50}} color='black' ></MaterialIcons> */}
                    <SimpleLineIcons name='action-redo' size={25} style={{padding: 12, margin: 'auto' , borderRadius: 50}} color='black' ></SimpleLineIcons>
                  </View>
                  <Text style={{paddingHorizontal: 10}}>Share</Text>
                </View>
              </View>
            </View>
            {/* <View style={{marginTop: 16}}>
              <View style={{backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, flexDirection: 'row'}}>
                <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{width: 120, height: 120, borderRadius: 10, marginRight: 15}}
                />
                </View>
                <View>
                  <View style={{marginTop: 20, flexDirection: "row"}}>
                    <Text style={{fontSize: 10, backgroundColor: '#293241', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 ,color: 'white', marginRight:5}}>A</Text>
                    <Text style={{fontWeight: '700', fontSize: 13, color: 'black'}}>Nick Price</Text>
                    <Text style={{marginHorizontal: 10, fontSize: 15, color: '#E8E8E8'}}>5d</Text> 
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={{width: 220, color: '#293241'}}>I went on an adventure through the streets of New Yourk and Saw...</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <MaterialIcons name='calendar-today' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></MaterialIcons><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <IoIcon name='play-outline' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></IoIcon><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <AntIcon name='hearto' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></AntIcon><Text>23 hr</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View> */}
          </View>
          {/* <View style={{backgroundColor: 'white',padding: 15}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
              <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                <Text style={{paddingVertical:15, marginEnd: 10 ,paddingHorizontal: 20, backgroundColor: '#293241', borderRadius: 30, color: 'white'}}>J</Text>
                <View style={{marginTop:5}}>
                  <Text style={{fontSize:18, fontWeight: '700', color: '#293241' }}>Jams Lannard</Text>
                  <Text>jameslannard</Text> 
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Text style={styles.tab}>Adventure</Text>
                  <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{color: '#293241', fontSize: 15}}>Had a great time filming this one, looking forword to more advantures like this one when I can! Tak...more</Text>
            </View>
            <View style={{marginTop: 16}}>
              <View style={{backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, flexDirection: 'row'}}>
                <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{width: 120, height: 120, borderRadius: 10, marginRight: 15}}
                />
                </View>
                <View>
                  <View style={{marginTop: 20, flexDirection: "row"}}>
                    <Text style={{fontSize: 10, backgroundColor: '#293241', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 ,color: 'white', marginRight:5}}>A</Text>
                    <Text style={{fontWeight: '700', fontSize: 13, color: 'black'}}>Nick Price</Text>
                    <Text style={{marginHorizontal: 10, fontSize: 15, color: '#E8E8E8'}}>5d</Text> 
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={{width: 220, color: '#293241'}}>I went on an adventure through the streets of New Yourk and Saw...</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <MaterialIcons name='calendar-today' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></MaterialIcons><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <IoIcon name='play-outline' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></IoIcon><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <AntIcon name='hearto' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></AntIcon><Text>23 hr</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{backgroundColor: 'white',padding: 15}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
              <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                <Text style={{paddingVertical:15, marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: '#293241', borderRadius: 30, color: 'white'}}>W</Text>
                <View style={{marginTop:5}}>
                  <Text style={{fontSize:18, fontWeight: '700', color: '#293241' }}>Wes Frances</Text>
                  <Text>Wesfrances</Text> 
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Text style={styles.tab}>Adventure</Text>
                  <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{color: '#293241', fontSize: 15}}>Had a great time filming this one, looking forword to more advantures like this one when I can! Tak...more</Text>
            </View>
            <View style={{marginTop: 16}}>
              <View style={{backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, flexDirection: 'row'}}>
                <View>
                  <Image
                source={require('../../../painting.jpg')}
                style={{width: 120, height: 120, borderRadius: 10, marginRight: 15}}
                />
                </View>
                <View>
                  <View style={{marginTop: 20, flexDirection: "row"}}>
                    <Text style={{fontSize: 10, backgroundColor: '#293241', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 ,color: 'white', marginRight:5}}>A</Text>
                    <Text style={{fontWeight: '700', fontSize: 13, color: 'black'}}>Nick Price</Text>
                    <Text style={{marginHorizontal: 10, fontSize: 15, color: '#E8E8E8'}}>5d</Text> 
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={{width: 220, color: '#293241'}}>I went on an adventure through the streets of New Yourk and Saw...</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <MaterialIcons name='calendar-today' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></MaterialIcons><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <IoIcon name='play-outline' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></IoIcon><Text>23 hr</Text>
                    </View>
                    <View style={{flexDirection:'row', marginRight: 15}}>
                      <AntIcon name='hearto' size={15} style={{paddingTop: 2, marginRight: 5 ,backgroundColor: '#F4F4F5', borderRadius: 50}} color='black' ></AntIcon><Text>23 hr</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View> */}
       
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 6,
    backgroundColor: 'white',
  },
  tab: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#F4F4F5',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 50,
    color: 'black',
  },
  tabactive: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#293241',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 50,
    color: 'white',
  },
  groupIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 8,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postContent: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postText: {
    fontSize: 14,
  },
  addPostButton: {
    alignSelf: 'flex-end',
  },
});

export default Newsfeed;
