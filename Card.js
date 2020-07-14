import React, { Children } from 'react';
import { View, StyleSheet,Text } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
           {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: '#0000',
        //shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
       
    },
});

export default Card;