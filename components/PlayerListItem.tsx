import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Player } from '../types'; // Declarado en types.txt


interface Props {
    player: Player;
}

const PlayerListItem = ({ player }: Props) => {
  return (
    <View style={styles.playerListContainer}>
        <Image style={styles.image} />

        <View style={{flexGrow: 1}}>
            <Text style={styles.name}> { player.name } </Text>
            <Text> {player.match} </Text>
        </View>

        <View style={styles.colContainer}>
            <Text style={styles.name}> ${player.price} </Text>
            <Text> {player.position} </Text>
        </View>
        <Text style={styles.points}> {player.totalPoints} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    playerListContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    colContainer: {
        marginHorizontal: 15,
        alignItems: 'flex-end',
    },
    image: {

    },
    name: {
        fontWeight: 'bold',


    },
    points: {
        fontWeight: 'bold',
        fontSize: 18

    }
})

export default PlayerListItem