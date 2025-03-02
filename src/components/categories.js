import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';

import { categoriesData } from '../constants/indexTravel';


export default function Categories(){
    return(
        <View className="space-y-5">
            <View className="mx-5 flex-row mt-8 justify-between items-center">
                <Text style={{fontSize: wp(4)}} className='font-semibold text-neutral-700'>Categorias</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: wp(4), color:theme.text}}>See all</Text>
                </TouchableOpacity>
            </View>
            <View className='pt-5'>
                <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                className="space-x-4"
                showsHorizontalScrollIndicator={false}
                >
                    {
                        categoriesData.map((cat, index) => {
                            return(
                                <TouchableOpacity key = {index} className="flex items-center pr-5" >
                                    <Image source={cat.image} className="rounded-3xl " style={{width: wp(20), height: wp(19)}} />
                                    <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                
                </ScrollView>
            </View>
        </View>
    )
}