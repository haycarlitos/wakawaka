import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import field2 from '../assets/images/field2.jpg'


const players = {
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
      style={{width:'100%', 
      aspectRatio: 2 / 3
      }}>
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
