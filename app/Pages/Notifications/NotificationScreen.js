// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntIcon from 'react-native-vector-icons/AntDesign';

// const NotificationScreen = () => {
//   // Sample notification data
//   const notifications = [
//     {
//       id: 1,
//       text: 'John Doe liked your post.',
//       icon: <AntIcon name="heart" size={24} color="#FF5733" />,
//     },
//     {
//       id: 2,
//       text: 'Jane Doe commented on your post.',
//       icon: <MaterialIcons name="comment" size={24} color="#2962FF" />,
//     },
//     {
//       id: 3,
//       text: 'Alice Doe reshared your post.',
//       icon: <Icon name="retweet" size={24} color="#4CAF50" />,
//     },
//     // Add more notifications as needed
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {notifications.map(notification => (
//         <View key={notification.id} style={styles.notification}>
//           <View style={styles.iconContainer}>{notification.icon}</View>
//           <Text style={styles.notificationText}>{notification.text}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   notification: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: '#E0E0E0',
//     padding: 10,
//     borderRadius: 5,
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   notificationText: {
//     fontSize: 16,
//   },
// });

// export default NotificationScreen;


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const NotificationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Notification Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default NotificationScreen;






// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntIcon from 'react-native-vector-icons/AntDesign';

// const NotificationScreen = ({ navigation }) => {
//   // Sample notification data
//   const notifications = [
//     {
//       id: 1,
//       text: 'John Doe liked your post.',
//       icon: <AntIcon name="heart" size={24} color="#FF5733" />,
//     },
//     {
//       id: 2,
//       text: 'Jane Doe commented on your post.',
//       icon: <MaterialIcons name="comment" size={24} color="#2962FF" />,
//     },
//     {
//       id: 3,
//       text: 'Alice Doe reshared your post.',
//       icon: <Icon name="retweet" size={24} color="#4CAF50" />,
//     },
//     // Add more notifications as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.topBar}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="chevron-left" size={30} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.screenName}>Notifications</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
//           <Icon name="sliders" size={24} color="#000" />
//         </TouchableOpacity>
//       </View>
//       <ScrollView contentContainerStyle={styles.notificationContainer}>
//         {notifications.map(notification => (
//           <View key={notification.id} style={styles.notification}>
//             <View style={styles.iconContainer}>{notification.icon}</View>
//             <Text style={styles.notificationText}>{notification.text}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   screenName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   notificationContainer: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   notification: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: '#E0E0E0',
//     padding: 10,
//     borderRadius: 5,
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   notificationText: {
//     fontSize: 16,
//   },
// });

// export default NotificationScreen;


import React from 'react';
import { 
    Image,
    SafeAreaView,
    ScrollView,
    SectionList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { List } from 'react-native-paper';
import { useTheme } from "@react-navigation/native";
import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

const NotificationData = [
    {
        title: "Today",
        data: [
            {
                image : IMAGES.post1,
                title : '@davidjr rmention you in a comment: @joviedan Lol',
                desc  :  '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do”',
                type  : 'comment',
                time  : '5h ago', 
            },
            {
                image : IMAGES.post2,
                title : '@henry and 5 others liked your post',
                type  : 'like', 
                time  : '6h ago',
            },
            {
                image : IMAGES.post3,
                title : '@emilia and 2 others liked your post',
                type  : 'like',
                time  : '7h ago',
            },
        ]
    },
    {
        title: "This year",
        data: [
            {
                image : IMAGES.post1,
                title : '@davidjr rmention you in a comment: @joviedan Lol',
                desc  :  '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do”',
                type  : 'comment',
                time  : '5h ago',
            },
            {
                image : IMAGES.post2,
                title : '@henry and 5 others liked your post',
                type  : 'like', 
                time  : '6h ago',
            },
            {
                image : IMAGES.post3,
                title : '@emilia and 2 others liked your post',
                type  : 'like',
                time  : '7h ago',
            },
            {
                image : IMAGES.post1,
                title : '@davidjr rmention you in a comment: @joviedan Lol',
                desc  :  '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do”',
                type  : 'comment',
                time  : '5h ago',
            },
            {
                image : IMAGES.post2,
                title : '@henry and 5 others liked your post',
                type  : 'like', 
                time  : '6h ago',
            },
            {
                image : IMAGES.post3,
                title : '@emilia and 2 others liked your post',
                type  : 'like',
                time  : '7h ago',
            },
        ]
    },
];

const NotificationScreen = () => {
    const {colors} = useTheme();
    const refRBSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const refSuccessSheet = React.useRef();

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
                onLongPress={() => refRBSheet.current.open()}
                style={{
                    flexDirection:'row',
                    paddingHorizontal:15,
                    marginBottom:15,
                }}
            >
                <View style={{marginRight:12,alignSelf:'flex-start'}}>
                    <View
                        style={{
                            height:25,
                            width:25,
                            borderRadius:25,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:item.type === "comment" ? COLORS.secondary : COLORS.danger,
                            position:'absolute',
                            zIndex:1,
                            bottom:0,
                            right:0,
                        }}
                    >
                        {item.type === "comment" ?
                            <SvgXml
                                height={13}
                                width={13}
                                fill={COLORS.white}
                                xml={ICONS.comment}
                            />
                            :
                        item.type === "like" ?
                            <SvgXml
                                height={15}
                                width={15}
                                fill={COLORS.white}
                                xml={ICONS.heart}
                            />
                            :
                            null
                        }
                    </View>
                    <Image
                        style={{
                            height:60,
                            width:60,
                            borderRadius:SIZES.radius,
                        }}
                        source={item.image}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text style={{...FONTS.fontXs,color:colors.text}}>{item.time}</Text>
                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,marginBottom:6}}>{item.title}</Text>
                    {item.desc &&
                        <Text style={{...FONTS.fontXs,color:colors.text}}>{item.desc}</Text>
                    }
                </View>
            </TouchableOpacity>
        )
    }

    const postOption = () => {
        return(
            <View>
                <List.Item
                    style={{paddingHorizontal:15}}
                    titleStyle={{...FONTS.font,fontSize:16,color:COLORS.danger}}
                    onPress={() => {RBSheetReport.current.open();refRBSheet.current.close()}}
                    title={"Report"}
                    left={() => 
                        <SvgXml
                            style={{
                                top:6,
                                marginRight:5,
                            }}
                            height={20}
                            width={20}
                            fill={COLORS.danger}
                            xml={ICONS.info}
                        />
                    }
                />
                <List.Item
                    style={{paddingHorizontal:15}}
                    titleStyle={{...FONTS.font,fontSize:16,color:colors.title}}
                    onPress={() => {}}
                    title={"Share"}
                    left={() => 
                        <SvgXml
                            style={{
                                top:6,
                                marginRight:5,
                            }}
                            height={20}
                            width={20}
                            stroke={colors.title}
                            xml={ICONS.share2}
                        />
                    }
                />
            </View>
        )
    }

    const reportData = [
        "It's spam",
        "Nudity or sexual activity",
        "Hate speech or symbols",
        "I just dont't like it",
        "Bullying or harassment",
        "False information",
        "Violence or dangerous organizations",
        "Scam or fraud",
        "Intellectual property violation",
        "Sale of illegal or regulated goods",
        "Suicide or self-injury",
        "Eating disorders",
        "Something else"
    ];


    return (
        // <SafeAreaView style={{flex:1,backgroundColor: colors.background}}>
        <SafeAreaView style={{flex:1, backgroundColor:'#111828'}}>
            
            <RBSheet
                ref={refSuccessSheet}
                closeOnDragDown={true}
                height={180}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',paddingTop:25}}>

                    <Image
                        source={IMAGES.check}
                        style={{
                            height:50,
                            width:50,
                            marginBottom:20,
                        }}
                    />
                    <Text style={{...FONTS.h5,color:colors.title}}>Thanks for letting us know</Text>
                </View>
                
            </RBSheet>

            <RBSheet    
                ref={refRBSheet}
                closeOnDragDown={true}
                height={170}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                {postOption()}
                
            </RBSheet>

            <RBSheet
                ref={RBSheetReport}
                closeOnDragDown={true}
                height={600}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,paddingTop:4}}>
                    <Text style={{...FONTS.h5,color:colors.title}}>Report</Text>
                </View>
                <View style={{padding:15}}>
                    <Text style={{...FONTS.h6,color:colors.title}}>Why are you reporting this post?</Text>
                    <Text style={{...FONTS.fontSm,color:colors.text}}>Your report is anonymous, except if you're reporting an intellectual property infirngement. If someone is in immediate danger, call the local emergency services - don't wait.</Text>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:20}}>
                    {reportData.map((data,index) => (
                        <List.Item
                            titleStyle={{color:colors.title}}
                            onPress={() => {refSuccessSheet.current.open();RBSheetReport.current.close()}}
                            key={index}
                            title={data}
                        />
                    ))}
                </ScrollView>
            </RBSheet>


            <Header title={'Notifications'} leftIcon={'back'}/>
            <SectionList
                sections={NotificationData}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{...FONTS.h6,paddingHorizontal:15,paddingVertical:12,color:colors.title}}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
};


export default NotificationScreen;