import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.styles}} />

    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 350,
        borderBottomColor: '#8b008b',
        borderBottomWidth: 1,
        marginVertical: "10%",
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 0
    }
});

export default Input;