import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ImajBetSportHeader from '../components/ImajBetHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImajBetSportHeader />
      <Text style={styles.header}>Спортивные трансляции</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100}}>
        {renderBroadcast(
          'IPL',
          '15 декабря\n' + '00:00',
          'Mumbai Indians \nChennai Super Kings',
        )}
        {renderBroadcast(
          'AFL',
          '20 декабря\n' + '00:25',
          'Collingwood \nRichmond',
        )}
        {renderBroadcast(
          'NLL',
          '25 декабря\n' + '01:00',
          'Buffalo Bandits \nToronto Rock',
        )}
        {renderBroadcast(
          'CFL',
          '28 декабря\n' + '00:15',
          'Saskatchewan Roughriders \nWinnipeg Blue Bombers',
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.gray,
  },
  header: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
  },
  league: {
    fontSize: 44,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 25,
    width: 120,
    textAlign: 'center',
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: COLORS.main,
  },
  leagueContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 150,
  },
  teamsContainer: {
    width: '60%',
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.light,
    color: COLORS.white,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.medium,
    fontSize: 22,
    color: COLORS.white,
  },
});
