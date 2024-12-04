import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import ImajBetHomeScreen from './pages/ImajBetHomeScreen';
import ImajBetCartScreen from './pages/ImajBetCartScreen';
import ImajBetCartSuccessScreen from './pages/ImajBetCartSuccessScreen';
import ImajBetReservationScreen from './pages/ImajBetReservationScreen';
import ImajBetReservationSuccessScreen from './pages/ImajBetReserveSuccessScreen';
import ImajBetContactsScreen from './pages/ImajBetContactsScreen';
import ImajBetEventsScreen from './pages/ImajBetEventsScreen';
import ImajBetEventDetailScreen from './pages/ImajBetEventDetailScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import ImajBetTranslationsScreen from './pages/ImajBetTranslationsScreen';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.gray,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'ImajBetHomeScreen'},
    {label: 'КОРЗИНА', screen: 'ImajBetCartScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'ImajBetTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'ImajBetContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'ImajBetReservationScreen'},
    {label: 'СОБЫТИЯ', screen: 'ImajBetEventsScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={
              screen === 'ImajBetHomeScreen'
                ? styles.drawerItemFirst
                : styles.drawerItem
            }>
            <Text
              style={
                screen === 'ImajBetHomeScreen'
                  ? styles.itemTextFirst
                  : styles.itemText
              }>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('ImajBetCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}

const drawerScreens = [
  {name: 'ImajBetHomeScreen', component: ImajBetHomeScreen},
  {name: 'ImajBetCartScreen', component: ImajBetCartScreen},
  {name: 'ImajBetCartSuccessScreen', component: ImajBetCartSuccessScreen},
  {name: 'ImajBetReservationScreen', component: ImajBetReservationScreen},
  {
    name: 'ImajBetReservationSuccessScreen',
    component: ImajBetReservationSuccessScreen,
  },
  {name: 'ImajBetContactsScreen', component: ImajBetContactsScreen},
  {name: 'ImajBetEventsScreen', component: ImajBetEventsScreen},
  {name: 'ImajBetEventDetailScreen', component: ImajBetEventDetailScreen},
  {name: 'ImajBetTranslationsScreen', component: ImajBetTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.main,
  },
  logo: {
    width: width * 0.8,
    height: 200,
    resizeMode: 'contain',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
  },
  drawerItemFirst: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.main,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: COLORS.main,
  },
  itemText: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 15,
  },
  itemTextFirst: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    textAlign: 'center',
    paddingLeft: 15,
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
