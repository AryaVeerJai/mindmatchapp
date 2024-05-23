import React from "react";
import { 
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, IMAGES, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";
import Post from "../../components/Post";
import RBSheet from "react-native-raw-bottom-sheet";


const sendData = [
    {
        image : IMAGES.user1,
        name : 'Andy Lee',
    },
    {
        image : IMAGES.user2,
        name : 'Brian Harahap',
    },
    {
        image : IMAGES.user3,
        name : 'Christian Hang',
    },
    {
        image : IMAGES.user4,
        name : 'Chloe Mc. Jenskin',
    },
    {
        image : IMAGES.user5,
        name : 'David Bekam',
    },
    {
        image : IMAGES.user6,
        name : 'Dons John',
    },
    {
        image : IMAGES.user7,
        name : 'Eric Leew',
    },
    {
        image : IMAGES.user8,
        name : 'Richard Sigh',
    },
    {
        image : IMAGES.user5,
        name : 'David Bekam',
    },
    {
        image : IMAGES.user6,
        name : 'Dons John',
    },
    {
        image : IMAGES.user7,
        name : 'Eric Leew',
    },
    {
        image : IMAGES.user8,
        name : 'Richard Sigh',
    },
]


const Explore = () => {

    const {colors} = useTheme();
    const sheetRef = React.useRef(null);


    const renderHeader = () => (
        <View
            style={{
                backgroundColor:colors.card,
                borderBottomWidth:1,
                borderColor:colors.borderColor,
                paddingBottom:5,
                paddingTop:0,
                borderTopLeftRadius:18,
                borderTopRightRadius:18,
                alignItems:'center',
            }}
        >
            <TextInput
                style={{
                    ...FONTS.font,
                    paddingHorizontal:15,
                    height:48,
                    color:colors.title,
                    width:'100%',
                }}
                placeholder="Write a message ..."
                placeholderTextColor={colors.text}
            />
        </View>
    )

    const renderContent = () => (
        <View
            style={{
                backgroundColor: colors.card,
                paddingBottom:70,
            }}
        >
          <View
            style={{
                marginHorizontal:15,
                marginVertical:15,
            }}
          >
            <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                    position:'absolute',
                    right:0,
                    top:-1,
                    zIndex:1,
                }}
            >
                <FeatherIcon name='search' color={colors.text} size={24}/>
            </TouchableOpacity>
            <TextInput
                style={{
                    height:50,
                    borderWidth:1,
                    borderColor:colors.borderColor,
                    borderRadius:SIZES.radius,
                    paddingHorizontal:15,
                    ...FONTS.font,
                    color:colors.title,
                }}
                placeholder="Search here..."
                placeholderTextColor={colors.text}
            />
          </View>
          {sendData.map((data,index) => {
            return(
                <View
                    key={index}
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:15,
                        paddingVertical:10,
                    }}
                >
                    <Image
                        style={{
                            height:40,
                            width:40,
                            borderRadius:20,
                            marginRight:8,
                        }}
                        source={data.image}
                    />
                    <Text style={{...FONTS.h6,fontSize:14,flex:1,color:colors.title}}>{data.name}</Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor:COLORS.primary,
                            paddingHorizontal:14,
                            paddingVertical:6,
                            borderRadius:6,
                        }}
                    >
                        <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.white,lineHeight:18}}>Send</Text>
                    </TouchableOpacity>
                </View>
            )
          })}
        </View>
    );
    

    return(
        <SafeAreaView style={{flex:1}}>
            <RBSheet
                ref={sheetRef}
                closeOnDragDown={true}
                height={500}
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
                {renderHeader()}
                <ScrollView>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flex:1
                        }}
                    >
                            {renderContent()}
                    </TouchableOpacity>
                </ScrollView>
            </RBSheet>

            <LinearGradient
                style={{flex:1}}
                colors={colors.bgGradient}
            >
                <Header title="Explore" leftIcon={'back'} rightIcon={'notification'}/>
                <ScrollView contentContainerStyle={{paddingBottom:30}}>
                    
                    
                    <Post sharePost={sheetRef}/>
                    

                </ScrollView>
                
            </LinearGradient>
        </SafeAreaView>
    )
}


export default Explore;