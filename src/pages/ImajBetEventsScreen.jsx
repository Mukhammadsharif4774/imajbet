import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ImajBetSportHeader from '../components/ImajBetHeader';
import {useNavigation} from '@react-navigation/native';
import Event_1 from '../assets/event_1.png';
import Event_2 from '../assets/event_2.png';
import Event_3 from '../assets/event_3.png';
import Event_4 from '../assets/event_4.png';

const events = [
  {title: 'Итальянская ночь', image: Event_4},
  {title: 'Мастер-класс', image: Event_1},
  {title: 'Секреты', image: Event_2},
  {title: 'Футбольный вечер', image: Event_3},
];

const EventButton = ({title, image, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(image)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default function () {
  const navigation = useNavigation();

  const handlePress = image => {
    navigation.navigate('DrawerNavigator', {
      screen: 'ImajBetEventDetailScreen',
      params: {image},
    });
  };

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />

      <View style={styles.content}>
        {events.map((event, index) => (
          <EventButton
            key={index}
            title={event.title}
            image={event.image}
            onPress={handlePress}
          />
        ))}
      </View>
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
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    textAlign: 'center',
    width: '100%',
    backgroundColor: COLORS.main,
  },
  content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    width: width,
    marginTop: '25%',
  },
});
