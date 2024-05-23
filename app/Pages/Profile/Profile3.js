import React,{useRef,useState} from 'react';
import { 
    Animated,
    Dimensions,
    Image,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from "@react-navigation/native";
import { SvgXml } from 'react-native-svg';
import Header from '../../layout/Header';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import Post from '../../components/Post';

const { width } = Dimensions.get('window');


const Profile3 = (props) => {
    const {colors} = useTheme();
    const scrollX = useRef(new Animated.Value(0)).current;
    const buttons = ['Latest posts', 'Videos', 'About'];
    const onCLick = i => this.scrollView.scrollTo({ x: i * width });

    const MainSkills = ['#design', '#graphics', '#virtual', '#mobileapps' , '#figma'];

    return (
        <>
            <SafeAreaView style={{flex:1}}>
                <LinearGradient
                    style={{flex:1}}
                    colors={colors.bgGradient}
                >
                    <ScrollView contentContainerStyle={{flexGrow:1}}>
                        <Header leftIcon={'back'} bgImage transparent={true} rightIcon={'settings'} />
                        <View>
                            <View style={{width:SIZES.width,height:SIZES.height / 4.5,position:'relative',zIndex:0}}>
                                <LinearGradient
                                    style={{
                                        position:'absolute',
                                        height:'100%',
                                        width:'100%',
                                        zIndex:1,
                                    }}
                                    colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,.5)']}
                                ></LinearGradient>
                                <Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={IMAGES.sbgImage}/>
                            </View>
                            <View style={{
                                alignItems:'center',
                                borderBottomWidth:1,
                                borderColor:colors.borderColor,
                                paddingBottom:25,
                                paddingHorizontal:15,
                            }}>
                                <Image
                                    style={{
                                        height:95,
                                        width:95,
                                        borderRadius:50,
                                        marginTop:-45,
                                        marginBottom:10,
                                        borderWidth:1,
                                        borderColor:colors.background,
                                    }}
                                    source={IMAGES.user1}
                                />
                                <Text style={{...FONTS.h4,color:colors.title}}>Chris Jasmein</Text>
                                <View style={{flexDirection:'row',marginBottom:18}}>
                                    <View style={{flexDirection:'row',marginRight:12}}>
                                        <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,marginRight:4}}>1.2k</Text>
                                        <Text style={{...FONTS.font,color:colors.text}}>Followers</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,marginRight:4}}>902</Text>
                                        <Text style={{...FONTS.font,color:colors.text}}>Following</Text>
                                    </View>
                                </View>
                                
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity
                                        style={[styles.btnAction,{backgroundColor:'#E6E6E6',marginRight:10}]}
                                    >
                                        <SvgXml
                                            height={16}
                                            width={16}
                                            style={{marginRight:8}}
                                            stroke={'#646464'}
                                            xml={ICONS.message2}
                                        />
                                        <Text style={{...FONTS.font,color:'#646464',lineHeight:18}}>Message</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.btnAction,{backgroundColor:COLORS.primary}]}
                                    >
                                        <SvgXml
                                            height={16}
                                            width={16}
                                            style={{marginRight:8}}
                                            stroke={COLORS.white}
                                            xml={ICONS.addUser}
                                        />
                                        <Text style={{...FONTS.font,color:COLORS.white,lineHeight:18}}>Follow</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        
                        <View style={{marginBottom:10,marginHorizontal:15}}>
                            <ButtonContainer buttons={buttons} onClick={onCLick} scrollX={scrollX} />
                        </View>
                        <ScrollView
                            contentContainerStyle={{paddingBottom:70}}
                            ref={e => (this.scrollView = e)}
                            horizontal
                            pagingEnabled
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false },
                            )}>
                            <View style={[styles.card]}>
                                <Post />
                            </View>
                            <View style={[styles.card]}>
                                <View style={{alignItems:'center',padding:20}}>
                                    <View
                                        style={{
                                            height:50,
                                            marginBottom:10,
                                            width:50,
                                            borderRadius:25,
                                            backgroundColor:COLORS.primayLight,
                                            alignItems:'center',
                                            justifyContent:'center',
                                        }}
                                    >
                                        <Image style={{height:20,width:20,tintColor:COLORS.primary}} source={IMAGES.video}/>
                                    </View>
                                    <Text style={{...FONTS.h5,color:colors.title}}>No Videos Yet</Text>
                                </View>
                            </View>
                            <View style={[styles.card]}>
                                
                                <View
                                    style={{
                                        padding:12,
                                        marginHorizontal:15,
                                        borderBottomWidth:1,
                                        borderColor:colors.borderColor,
                                    }}
                                >
                                    <Text style={{...FONTS.h6,marginBottom:5,color:colors.title}}>Main Skills</Text>
                                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                        {MainSkills.map((data,index) => (
                                            <TouchableOpacity style={{...styles.tags}} key={index}>
                                                <Text style={{...FONTS.font,color:COLORS.primary,lineHeight:18}}>{data}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                <View
                                    style={{
                                        padding:12,
                                        marginHorizontal:15,
                                    }}
                                >
                                    <Text style={{...FONTS.h6,marginBottom:5,color:colors.title}}>Complementary Skills</Text>
                                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                        {MainSkills.map((data,index) => (
                                            <TouchableOpacity style={{...styles.tags}} key={index}>
                                                <Text style={{...FONTS.font,color:COLORS.primary,lineHeight:18}}>{data}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                
                            </View>
                        </ScrollView>

                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
        </>
    );
};

function ButtonContainer({ buttons, onClick, scrollX }) {
    const {colors} = useTheme();
    const [btnContainerWidth, setWidth] = useState(0);
    const btnWidth = btnContainerWidth / buttons.length;
    const translateX = scrollX.interpolate({
        inputRange: [0, width],
        outputRange: [0, btnWidth],
    });
    
    const [active , setActive] = useState(0);

    return (
        <View
            style={[styles.btnContainer,{borderColor:colors.borderColor}]}
            onLayout={e => setWidth(e.nativeEvent.layout.width)}>
            {buttons.map((btn, i) => (
                <TouchableOpacity
                    key={btn}
                    style={styles.btn}
                    onPress={() => {onClick(i); setActive(i)}}>
                    <Text style={[{...FONTS.font,color:colors.text},active == i && {color:colors.title}]}>{btn}</Text>
                </TouchableOpacity>
            ))}
            <Animated.View
                style={[
                    styles.animatedBtnContainer,
                    { width: btnWidth, backgroundColor:colors.title, transform: [{ translateX }] },
                ]}>
               
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnAction:{
        paddingHorizontal:20,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:6,
    },
    btnContainer: {
        height: 45,
        overflow: 'hidden',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth:1,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedBtnContainer: {
        height: 2,
        flexDirection: 'row',
        position: 'absolute',
        overflow: 'hidden',
        bottom:0,
    },
    btnTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        width: width,
    },
    tags:{
        borderWidth:1,
        borderColor:COLORS.primary,
        borderRadius:15,
        paddingHorizontal:12,
        paddingVertical:3,
        marginBottom:5,
        marginRight:5,
    }
})

export default Profile3;