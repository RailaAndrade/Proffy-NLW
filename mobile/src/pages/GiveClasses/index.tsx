import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import styles from '../GiveClasses/styles';

import GiveClassesBgImage from'../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const {goBack} =useNavigation();
    function handleNavigateBack(){
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={GiveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar voceê precisa se cadastrar como professor na plataforma web.
                </Text>

            </ImageBackground>
            <RectButton  onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo bem 
                </Text>
            </RectButton>
        </View>


    );

}
export default GiveClasses;