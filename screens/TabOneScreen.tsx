import React from 'react'
import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native';
import Field from '../components/Field';
import TeamStats from '../components/TeamStats';



export default function TabOneScreen() {

  const viewPlayers = () => {
    console.log('holis');
    
  };

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
});
