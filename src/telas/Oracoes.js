import React from 'react';
import { Text, View } from 'react-native';
import Head from '../componentes_aula/Head';
import Body from '../componentes_aula/body';
import { MagnifyingGlassIcon, HeartIcon, SparklesIcon} from 'react-native-heroicons/solid';


export default function Oracoes(){

    return(
        <View>
            <Head
            title={"Orações e Credo"}
            leftIcon={SparklesIcon}
            centerIcon={MusicalNoteIcon}
            rightIcon={HeartIcon}
            searchIcon={MagnifyingGlassIcon}
            />
            <Body/>
        </View>
    )
}