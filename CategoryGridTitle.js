import React, { version } from 'react';
import {Platform, TouchableOpacity, View, Text ,StyleSheet, TouchableNativeFeedback, ImageBackground} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

const CategoryGridTile = props => {
    /*let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }*/
    
    return(
        <View style = {styles.gridItem}>
            <TouchableOpacity style= {{flex: 1}}
                 
                onPress = {props.onSelect}>
                    <Card style={{...styles.container, ...props.style}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.imageContainer}>
                                <ImageBackground 
                                source={{uri: props.image}}
                                style = {styles.bgImage} 
                                />
                            </View>
                            <View>
                                <Text style={styles.title} numberOfLines = {1}>
                                {props.title}
                                </Text>
                                <Text style={styles.status}>
                                {props.status}
                                </Text>
                                <Text style={styles.status}>
                                    {props.rating}
                                </Text>
                                <Icon name= "star" size= {15} />
                            </View>
                        </View>
                    </Card>
            </TouchableOpacity>
        </View>
    );
};
 
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: '10%',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#8b008b',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        padding: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    status: {
        fontSize: 15,
        color: 'black'
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        width: 110,
        height: 110,
        overflow: 'hidden',
    }
});

export default CategoryGridTile;