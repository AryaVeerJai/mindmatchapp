import React,{useRef,useState} from 'react';
import { 
    Dimensions,
    Image,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View,
    Animated,
    Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { List } from 'react-native-paper';
// import ImageViewer from 'react-native-image-zoom-viewer';
import { useNavigation, useTheme } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

const { width } = Dimensions.get('window');


const postImages = [
    {
        url: '',
        props : {
            source : IMAGES.post13
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post14
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post18
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post16
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post17
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post19
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post4
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post5
        }
    },
]


const Profile4 = () => {
    const {colors} = useTheme();
    const navigation = useNavigation();
    const refRBSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const refSuccessSheet = React.useRef();
    const [postModal , setPostModal] = useState(false);
    const [postIndex , setPostIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const buttons = ['Posts', 'Videos', 'Tagged'];
    const onCLick = i => this.scrollView.scrollTo({ x: i * width });

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
        <>
            <Modal visible={postModal} transparent={true}>
                <SafeAreaView
                    style={{
                        flex:1,
                    }}
                >
                    {/* <ImageViewer
                        index={postIndex}
                        imageUrls={postImages}
                        enableSwipeDown={true}
                        onSwipeDown={()=> setPostModal(false)}
                        renderHeader={()=>(
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity 
                                    style={{
                                        height:50,
                                        width:50,
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                    onPress={()=> setPostModal(false)}>
                                    <SvgXml stroke={COLORS.white} xml={ICONS.close}/>
                                </TouchableOpacity>    
                            </View>
                        )}
                    /> */}
                </SafeAreaView>
            </Modal>
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
            <SafeAreaView style={{flex:1}}>
                <LinearGradient
                    style={{flex:1}}
                    colors={colors.bgGradient}
                >
                    <ScrollView contentContainerStyle={{flexGrow:1}}>
                        <Header leftIcon={'back'} titleCenter title={'Profile'} bgImage transparent={true}  />
                       
                        <View
                             style={{
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                position:'relative',
                                overflow:'hidden',
                                marginBottom:10,
                            }}
                        >
                            <Image
                                style={{
                                    position:'absolute',
                                    height:'100%',
                                    width:'100%',
                                }}
                                source={IMAGES.sbgImage}
                            />
                            <LinearGradient
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    position:'absolute',
                                    top:0,
                                    left:0,
                                    opacity:.9,
                                }}
                                start={{x: 0, y: 1}} end={{x: 0.5, y: 1.0}}
                                colors={['#FE9063', '#FF7E49']}
                                //colors={['#FE9063', '#000']}
                            ></LinearGradient>
                            <View style={{
                                paddingTop:80,
                                paddingHorizontal:15,
                                paddingBottom:30,
                            }}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginBottom:10}}>
                                    <TouchableOpacity
                                        style={{
                                            height:45,
                                            width:45,
                                            borderRadius:25,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            backgroundColor:'rgba(255,255,255,.15)'
                                        }}
                                    >
                                        <SvgXml
                                            height={18}
                                            width={18}
                                            fill={COLORS.white}
                                            xml={ICONS.edit}
                                        />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            height:120,
                                            width:120,
                                            borderRadius:60,
                                            padding:5,
                                            borderWidth:4,
                                            borderColor:COLORS.white,
                                        }}
                                    >
                                        <Image
                                            style={{
                                                height:'100%',
                                                width:'100%',
                                                borderRadius:60,
                                            }}
                                            source={IMAGES.user1}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        onPress={()=> navigation.navigate('Settings')}
                                        style={{
                                            height:45,
                                            width:45,
                                            borderRadius:25,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            backgroundColor:'rgba(255,255,255,.15)'
                                        }}
                                    >
                                        <SvgXml
                                            stroke={COLORS.white}
                                            xml={ICONS.settings}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{...FONTS.h4,color:COLORS.white,textAlign:'center'}}>Chris Jasmein</Text>
                                <Text style={{...FONTS.font,color:'rgba(255,255,255,.8)',lineHeight:16,textAlign:'center'}}>chrisjasmein@gmail.com</Text>
                                
                                <View style={{flexDirection:'row',paddingHorizontal:15,marginTop:25}}>
                                    <View style={{flex:1,alignItems:'center',paddingHorizontal:15,borderRightWidth:1,borderColor:'rgba(255,255,255,.3)'}}>
                                        <Text style={{...FONTS.h6,color:COLORS.white}}>82k</Text>
                                        <Text style={{...FONTS.fontSm,lineHeight:14,color:'rgba(255,255,255,.8)'}}>Following</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center',paddingHorizontal:15,borderRightWidth:1,borderColor:'rgba(255,255,255,.3)'}}>
                                        <Text style={{...FONTS.h6,color:COLORS.white}}>4.5m</Text>
                                        <Text style={{...FONTS.fontSm,lineHeight:14,color:'rgba(255,255,255,.8)'}}>Followers</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center',paddingHorizontal:15}}>
                                        <Text style={{...FONTS.h6,color:COLORS.white}}>3k</Text>
                                        <Text style={{...FONTS.fontSm,lineHeight:14,color:'rgba(255,255,255,.8)'}}>Posts</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:10}}>
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
                                <View style={{flexDirection:'row',flexWrap:'wrap',paddingHorizontal:2}}>
                                    {postImages.map((data,index) => {
                                        return(
                                            <View
                                                key={index}
                                                style={[{
                                                    width:(SIZES.width - 4 ) / 3,
                                                    height:(SIZES.width - 4 ) / 3,
                                                    marginBottom:10,
                                                }]}
                                            >
                                                <TouchableOpacity 
                                                    onLongPress={() => refRBSheet.current.open()}
                                                    onPress={()=> {setPostIndex(index);setPostModal(true)}}
                                                    style={{
                                                        marginHorizontal:5,
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            width:'100%',
                                                            height:'100%',
                                                            borderRadius:15,
                                                        }}
                                                        source={data.props.source}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
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
                                <View style={{flexDirection:'row',flexWrap:'wrap',paddingHorizontal:2}}>
                                    {postImages.map((data,index) => {
                                        return(
                                            <View
                                                key={index}
                                                style={[{
                                                    width:(SIZES.width - 4 ) / 3,
                                                    height:(SIZES.width - 4 ) / 3,
                                                    marginBottom:10,
                                                }]}
                                            >
                                                <TouchableOpacity 
                                                    onLongPress={() => refRBSheet.current.open()}
                                                    onPress={()=> {setPostIndex(index);setPostModal(true)}}
                                                    style={{
                                                        marginHorizontal:5,
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            width:'100%',
                                                            height:'100%',
                                                            borderRadius:15,
                                                        }}
                                                        source={data.props.source}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
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
});


export default Profile4;