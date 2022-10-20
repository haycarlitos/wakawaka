import { StyleSheet, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import field2 from '../assets/images/field2.jpg'
import { FontAwesome5 } from '@expo/vector-icons';


const players: { [key: string]: null[]} = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
}

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
      source={field2}
      resizeMode='contain'
      style={{
      width:'100%', 
      aspectRatio: 2 / 3,
      justifyContent:'space-around',
      alignItems:'center'}}
      >
        {Object.keys(players).map((position) => (
          <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            width:'100%'
          }}
          >
            {players[position].map((player) => (
              <View style={{
                alignItems:'center',
                width:'100%'}}
              >
                <FontAwesome5 
                  name="tshirt"
                  size={35} 
                  color={player ? "#d170db" : "#5c5c5cbb"} 
                />
                <Text style={{
                  backgroundColor:"red",
                  padding:2,
                  paddingHorizontal:7,}}>{position}</Text>
              </View>
            ))}
          </View>
        ))}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
  },
});
