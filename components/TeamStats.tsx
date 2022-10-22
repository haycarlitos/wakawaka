import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TeamStats = () => {
  return (
    <View style={styles.statsContainer} >
        <View style={styles.valueContainer}>
            <Text style={styles.label} >Players</Text>
            <Text style={styles.value}>0 / 15</Text>
        </View>
        <View style={styles.valueContainer}>
            <Text style={styles.label}>Remaining</Text>
            <Text style={styles.value}>$100 m</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    statsContainer: {
        borderWidth: 4,
        borderColor: '#38abd1',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10
    },
    valueContainer: {
        marginRight: 25,
    },
    label: {
        color: '#333'
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold'


    }
})

export default TeamStats