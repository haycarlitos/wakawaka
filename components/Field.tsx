import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import field2 from '../assets/images/field2.jpg'
import FieldPlayer from './FieldPlayer'

  

const players: { [key: string]: null[]} = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
}



const Field = () => {

 
  return (
    <ImageBackground 
    source={field2}
    resizeMode='cover'
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
                    <FieldPlayer player={player} position={position} />
                  ))}
                </View>


      ))}
    </ImageBackground>
  )
}

export default Field