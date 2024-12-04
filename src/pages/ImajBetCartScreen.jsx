import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../components/AppContext';
import ImajBetCartItemComponent from '../components/ImajBetCartItemComponent';
import ImajBetButtonComponent from '../components/ImajBetButtonComponent';
import ImajBetSportHeader from '../components/ImajBetHeader';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import EmptyIcon from '../assets/cart_empty_icon.png';

export default function () {
  const navigation = useNavigation();
  const {shouldRefresh} = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await AsyncStorage.getItem('cartList');
      setCart(storedCart ? JSON.parse(storedCart) : []);
    };

    fetchCart();
  }, [shouldRefresh]);

  useEffect(() => {
    const calculatedPrice = cart.reduce(
      (sum, item) => sum + item.price * item.count,
      0,
    );
    setTotalPrice(calculatedPrice);
  }, [cart]);

  const handleOrder = () => {
    const destinationScreen = cart.length
      ? 'ImajBetCartSuccessScreen'
      : 'ImajBetHomeScreen';
    navigation.navigate('DrawerNavigator', {screen: destinationScreen});
  };

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />

      {!cart.length && (
        <>
          <Text style={styles.text}>КОРЗИНА ПУСТА</Text>
          <Image style={styles.emptyIcon} source={EmptyIcon} />
        </>
      )}

      {cart.length > 0 && (
        <>
          <View style={{height: height * 0.7}}>
            <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
              {cart.map((item, index) => (
                <ImajBetCartItemComponent item={item} key={index} />
              ))}
            </ScrollView>
          </View>

          <View style={[styles.row, styles.summaryContainer]}>
            <Text style={styles.sumTitle}>Сума к оплате</Text>
            <Text style={styles.sum}>{totalPrice}$</Text>
          </View>
        </>
      )}

      <ImajBetButtonComponent
        text={cart.length ? 'ЗАКАЗАТЬ' : 'На главную'}
        style={styles.orderButton}
        onPress={handleOrder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: COLORS.gray,
  },
  flex: {
    height: 200,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 40,
  },
  empty: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  emptyIcon: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  summaryContainer: {
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width,
    position: 'absolute',
    bottom: 120,
  },
  sumTitle: {
    fontSize: 20,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textAlign: 'center',
  },
  sum: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
    marginLeft: 20,
  },
  orderButton: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.main,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginVertical: '25%',
  },
});
