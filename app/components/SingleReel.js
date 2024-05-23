import React, {useRef , useState} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../constants/theme';

const SingleReel = ({item, index, currentIndex, refRBSheet, sheetRef, hasNavigation}) => {

    const videoRef = useRef(null);


    const onBuffer = buffer => {
        console.log('buffring', buffer);
    };
    const onError = error => {
        console.log('error', error);
    };

    const [mute, setMute] = useState(false);

    const [like, setLike] = useState(item.isLike);

    //console.log(currentIndex, index);

    return (
        <>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => setMute(!mute)}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}>
                    <Video
                        videoRef={videoRef}
                        onBuffer={onBuffer}
                        onError={onError}
                        repeat={true}
                        resizeMode="cover"
                        paused={currentIndex == index ? false : true}
                        source={item.url}
                        muted={mute}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        position:'absolute',
                        bottom:0,
                        left:0,
                        width:'100%',
                        paddingHorizontal:15,
                        paddingVertical: hasNavigation ? 40 : 20,
                        paddingRight:70,
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                        <Image
                            style={{
                                height:40,
                                width:40,
                                borderRadius:30,
                                marginRight:8,
                            }}
                            source={item.profileImg}
                        />
                        <Text style={{...FONTS.font,...FONTS.fontPoppins,color:COLORS.white}}>{item.userName}</Text>
                        <TouchableOpacity
                            style={{
                                borderWidth:1,
                                borderColor:COLORS.white,
                                borderRadius:8,
                                paddingHorizontal:10,
                                paddingVertical:4,
                                marginLeft:20,
                            }}
                        >
                            <Text style={{...FONTS.font,color:COLORS.white,top:-1}}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View
                    style={{
                        //backgroundColor:'red',
                        position:'absolute',
                        bottom:0,
                        right:0,
                        paddingBottom:20,
                        paddingTop:20,
                        width:70,
                        alignItems:'center',
                    }}
                >
                    <View style={{alignItems:'center',marginBottom:15}}>
                        <TouchableOpacity
                            onPress={()=> setLike(!like)}
                            style={{
                                padding:5,
                            }}
                        >
                            <FontAwesome color={like ? "#ff0081" : COLORS.white} size={26} name={like ? 'heart' : 'heart-o'}/>
                        </TouchableOpacity>
                        <Text style={{...FONTS.font,color:COLORS.white}}>{item.likes}</Text>
                    </View>
                    <View style={{alignItems:'center',marginBottom:15}}>
                        <TouchableOpacity
                            style={{
                                padding:5,
                            }}
                        >
                            <FontAwesome color={COLORS.white} size={26} name='comment-o'/>
                        </TouchableOpacity>
                        <Text style={{...FONTS.font,color:COLORS.white}}>{item.comments}</Text>
                    </View>
                    <View style={{alignItems:'center',marginBottom:10}}>
                        <TouchableOpacity
                            onPress={() => sheetRef.current.open()}
                            style={{
                                padding:6,
                            }}
                        >
                            <Ionicons color={COLORS.white} size={28} name='paper-plane-outline'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={() => refRBSheet.current.open()}
                            style={{
                                padding:8,
                            }}
                        >
                            <FeatherIcon color={COLORS.white} size={24} name='more-vertical'/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </>
    );
};

export default SingleReel;