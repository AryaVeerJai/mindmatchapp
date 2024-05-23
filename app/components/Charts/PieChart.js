import React from 'react';
import { useTheme } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import { PieChart } from 'react-native-chart-kit';

const BasicPieChart = (props) => {

    const {colors} = useTheme();
    
    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "#945fcb",
          legendFontColor: colors.text,
          legendFontSize: 12
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#f74587",
          legendFontColor: colors.text,
          legendFontSize: 12
        },
        {
          name: "Beijing",
          population: 5827612,
          color: "#dedef5",
          legendFontColor: colors.text,
          legendFontSize: 12
        },
        {
          name: "New York",
          population: 8538000,
          color: "#111111",
          legendFontColor: colors.text,
          legendFontSize: 12
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "#6c2da7",
          legendFontColor: colors.text,
          legendFontSize: 12
        }
    ];

    return (
        <>
            <PieChart
                data={data}
                width={SIZES.width - 60}
                height={200}
                chartConfig={{
                    // backgroundColor: "#fff",
                    // backgroundGradientFrom: colors.cardBg,
                    // backgroundGradientTo: colors.cardBg,
                    // fillShadowGradientFrom: '#5384d7',
                    // fillShadowGradientFromOpacity:.35,
                    // fillShadowGradientTo: '#5384d7',
                    // decimalPlaces: 2, // optional, defaults to 2dp
                    color: () =>  '#5384d7',
                    labelColor: () => colors.textLight,
                    // style: {
                    //     borderRadius: 16
                    // },
                    // propsForDots: {
                    //     r: "6",
                    //     strokeWidth: "2",
                    //     stroke: "#fff"
                    // },
                    // propsForBackgroundLines: {
                    //     stroke: colors.textLight,
                    //     strokeOpacity: .3,
                    // }
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}
                center={[10, 6]}
                //absolute
            />
        </>
    );
};



export default BasicPieChart;