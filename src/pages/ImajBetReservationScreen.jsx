import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import ImajBetSportHeader from '../components/ImajBetHeader';
import ImajBetButtonComponent from '../components/ImajBetButtonComponent';

const InputField = ({placeholder, value, onChangeText}) => (
  <TextInput
    style={styles.textInput}
    placeholderTextColor={COLORS.placeholder}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

export default function () {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    table: '',
    time: '',
    date: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleReservation = () => {
    navigation.navigate('DrawerNavigator', {
      screen: 'ImajBetReservationSuccessScreen',
    });
  };

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />

      <Text style={styles.title}>Резерв столика</Text>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        <InputField
          placeholder={'Имя...'}
          value={formData.phone}
          onChangeText={text => handleInputChange('name', text)}
        />

        <InputField
          placeholder={'Номер телефона'}
          value={formData.phone}
          onChangeText={text => handleInputChange('phone', text)}
        />

        <InputField
          placeholder={'Столик'}
          value={formData.table}
          onChangeText={text => handleInputChange('table', text)}
        />

        <InputField
          placeholder={'Время'}
          value={formData.time}
          onChangeText={text => handleInputChange('time', text)}
        />

        <InputField
          placeholder={'Дата'}
          value={formData.date}
          onChangeText={text => handleInputChange('date', text)}
        />
      </ScrollView>

      <ImajBetButtonComponent
        text={'Зарезервировать'}
        style={styles.button}
        onPress={handleReservation}
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
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
  },
  main: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: width * 0.9,
    alignSelf: 'center',
  },
  textInput: {
    height: 45,
    width: '100%',
    marginVertical: 10,
    fontSize: 13,
    fontFamily: FONTS.medium,
    textAlign: 'left',
    color: COLORS.background,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
});