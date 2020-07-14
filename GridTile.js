import React, { version } from 'react';
import {Platform, TouchableOpacity, View, Text ,StyleSheet, ImageBackground} from 'react-native';
import Card from '../components/Card';

const CategoryGridTile = props => {
    /*let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }*/
    
    return(
        <View style = {styles.gridItem}>
            <TouchableOpacity style= {{flex: 1}}
                 
                onPress = {props.onSelect}>
                    <Card style={{...styles.container,...props.style}}>
                        <View style={{...styles.mealRow, ...styles.mealHeader}}>
                            <ImageBackground 
                            source={{uri: props.image}}
                            style = {styles.bgImage} 
                            >
                            </ImageBackground>
                        </View>
                        <Text style={styles.title} numberOfLines = {2}>{props.title}</Text>
                    </Card>
            </TouchableOpacity>
        </View>
    );
};
 
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 15,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',
    },
});

export default CategoryGridTile;