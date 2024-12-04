import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import ImajBetSportHeader from '../components/ImajBetHeader';
import ImajBetButtonComponent from '../components/ImajBetButtonComponent';
import SuccessIcon from '../assets/order_success_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'ImajBetHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />

      <Text style={styles.text}>Благодарим за заказ!</Text>

      <Image source={SuccessIcon} style={styles.successIcon} />

      <View style={styles.qrContainer}>
        <QRCode
          value="https://imsportfootball.ru/"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.main}
        />
      </View>

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
  qrContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.main,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
  },
});
