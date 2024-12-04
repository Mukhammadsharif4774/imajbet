import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import ImajBetSportHeader from '../components/ImajBetHeader';
import ImajBetMenuComponent from '../components/ImajBetMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {products} from '../helpers/imajsport';

const categories = [
  {label: 'Лапша'},
  {label: 'Сети'},
  {label: 'Драконы'},
  {label: 'Филадельфия'},
];

const OnwSportCategoryButton = ({label, active, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function ImajBetHomeScreen() {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {products[category].map((product, index) => (
          <ImajBetMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  categoryContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
  },
  category: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 10,
    borderBottomWidth: 2,
    paddingVertical: 3,
    borderColor: COLORS.main,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    fontSize: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
});
