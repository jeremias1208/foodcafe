import React from 'react';
import { Text, View } from 'react-native';
import Head from '../componentes_aula/Head';
import Body from '../componentes_aula/body';
import { MagnifyingGlassIcon, HeartIcon, Bars4Icon, FireIcon} from 'react-native-heroicons/solid';


export default function Salmos(){

    return(
        <View>
            <Head
            title={"Salmos"}
            leftIcon={Bars4Icon}
            centerIcon={FireIcon}
            rightIcon={HeartIcon}
            searchIcon={MagnifyingGlassIcon}
            />
            <Body/>
        </View>
    )
}