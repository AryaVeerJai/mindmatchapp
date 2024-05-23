import React, {useState} from 'react';
import { FlatList, LayoutAnimation, SafeAreaView, ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import SwipeBox from '../../components/SwipeBox';

const SwipeData = [
    {
        id : "1",
        title : "swipe content list item 1",
    },
    {
        id : "2",
        title : "swipe content list item 2",
    },
    {
        id : "3",
        title : "swipe content list item 3",
    },
    {
        id : "4",
        title : "swipe content list item 4",
    },
    {
        id : "5",
        title : "swipe content list item 5",
    },
    {
        id : "6",
        title : "swipe content list item 6",
    },
    {
        id : "7",
        title : "swipe content list item 7",
    },
    {
        id : "8",
        title : "swipe content list item 8",
    },
    {
        id : "9",
        title : "swipe content list item 9",
    },
    {
        id : "10",
        title : "swipe content list item 10",
    },
]
const SwipeableScreen = () => {

    const {colors} = useTheme();

    const [lists, setLists] = useState(SwipeData);

    const deleteItem = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        const arr = [...lists];
        arr.splice(index, 1);
        setLists(arr);
    };
    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:colors.card,
        }}>
            <View style={{
                    flex:1,
                    backgroundColor:colors.background,
            }}>
                <Header
                    leftIcon={'back'}
                    title ={'Swipeable'}
                    bgWhite
                />
                <ScrollView contentContainerStyle={{paddingVertical:15}}>
                    {lists.map((data,index) => {
                        return(
                            <View
                                key={index}
                            >
                                <SwipeBox data={data} colors={colors} handleDelete={() => deleteItem(index)} />
                                <View
                                    style={{
                                        height:1,
                                        width:'100%',
                                        backgroundColor:colors.borderColor,
                                    }}
                                />
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default SwipeableScreen;
