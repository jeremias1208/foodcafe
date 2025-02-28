import React from 'react';
import { Text, View } from 'react-native';
import Head from '../componentes_aula/Head';
import Body from '../componentes_aula/body';
import { MagnifyingGlassIcon, HeartIcon, Bars4Icon, BookOpenIcon} from 'react-native-heroicons/solid';


export default function Invocatorias(){

    return(
        <View>
            <Head
            title={"Invocatórias"}
            leftIcon={Bars4Icon}
            centerIcon={BookOpenIcon}
            rightIcon={HeartIcon}
            searchIcon={MagnifyingGlassIcon}
            />
           <Body/>
        </View>
    )
}