import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

// Aunque no es necesario, es buena practica pq .tsx es un lenguaje tipado.
type FieldPlayerProps = {
    player: null;
    position: string

}

const styles = StyleSheet.create({
    viewContainer: {
        alignItems:'center',
        width:'100%'
    
    },
  
    textContainer: {
        backgroundColor: '#666666bb',
        color: 'white',
        fontSize: 12,
        padding:2,
        paddingHorizontal:7,
        fontWeight: 'bold',
    }
  });

const FieldPlayer = (props: FieldPlayerProps) => {
    

    // Recibimos player y position de <FieldPlayer /> en Field.tsx
    const { player, position} = props;

    return (
        <View style={ styles.viewContainer } >
            <FontAwesome5 
                name="tshirt"
                size={35} 
                color={player ? '#d170db' : '#5c5c5cbb'} 
            /> 
            <Text style={styles.textContainer} >
                {position}
            </Text>
        </View>
        )
    }

export default FieldPlayer