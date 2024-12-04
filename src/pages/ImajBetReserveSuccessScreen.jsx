import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import ImajBetSportHeader from '../components/ImajBetHeader';
import ImajBetButtonComponent from '../components/ImajBetButtonComponent';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'ImajBetHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />

      <Text style={styles.text}>
        СТОЛИК {'\n'}
        ЗАРЕЗЕРВИРОВАН!
      </Text>

      <ImajBetButtonComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.gray,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.main,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
  },
});
