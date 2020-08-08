import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBgImg from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }
    return (
      <View style={styles.container}>
            <ImageBackground 
                source={giveClassesBgImg} 
                style={styles.content} 
                resizeMode="contain"
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastar como professor na nossa plataforma web.
                </Text>
          </ImageBackground>
          <RectButton style={styles.okButton} onPress={handleNavigateBack}>
              <Text style={styles.okButtonText}>Tudo bem </Text>
          </RectButton>
      </View>
    );
}

export default GiveClasses;