import React, { useRef, useMemo } from 'react'
import { StyleSheet, SafeAreaView, Pressable, Text, View } from 'react-native';
import Field from '../components/Field';
import TeamStats from '../components/TeamStats';
import BottomSheet from '@gorhom/bottom-sheet';
import PlayerListItem from '../components/PlayerListItem';
import {players} from '../assets/data/players';

export default function TabOneScreen() {

  const playersBottoSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersBottoSheet.current?.expand();
    //console.log(players)
    
  };

  const snapPoints = useMemo(() => ['50%'], []);

  const jugador =   {
    //id: '1',
    name: 'C. Ronaldo',
    //match: 'BEL v POR',
    //position: 'FWD',
    //price: 12,
    //totalPoints: 29,
  }

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable 
        onPress={viewPlayers}
        // Ponemos coqueto el botón.
        style={ styles.buttonContainer }
      >
        <Text style={{
                color: 'black',
                fontWeight: 'bold',}}
        >
          View Players
        </Text>
      </Pressable>
      <BottomSheet
        ref={playersBottoSheet}
        index={-1}
        snapPoints={snapPoints} 
      >
        <View style={styles.contentContainer}>
        <PlayerListItem player={players[10]}/>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor:'black',
  },

  buttonContainer: {                     
    backgroundColor: 'orange',
    margin: 20,
    padding: 10,
    alignItems:'center',
    width:'90%',
    borderRadius: 50,
    marginTop: 'auto', // Para que el botón siempre éste en la parte de abajo.
  },
  contentContainer: {

  },
});
