import React from 'react';
import { Text, View } from 'react-native';
import Head from '../componentes_aula/Head';
import Body from '../componentes_aula/body';
import { MagnifyingGlassIcon, HeartIcon, Bars4Icon, ChatBubbleLeftEllipsisIcon} from 'react-native-heroicons/solid';


export default function Litanias(){

    return(
        <View>
            <Head
            title={"Litanias"}
            leftIcon={Bars4Icon}
            centerIcon={ChatBubbleLeftEllipsisIcon}
            rightIcon={HeartIcon}
            searchIcon={MagnifyingGlassIcon}
            />
           <Body/>
        </View>
    )
}