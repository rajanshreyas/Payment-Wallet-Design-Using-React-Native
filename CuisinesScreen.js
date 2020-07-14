import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { CUISINES } from '../data/dummy-data';
import GridTile from '../components/GridTile';

class CuisinesScreen extends React.Component {
      render(){
        
        const renderGridItem = (itemData) => {
            return (
                <GridTile 
                title={itemData.item.title} 
                image={itemData.item.image}
                onSelect = {() => {
                    this.props.navigation.navigate({
                        routeName: 'ShopScreen', 
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
                style= {styles.cardStyle} />
            );
        };

        return(
            <View>
                <Text style= {styles.textOne}>Cuisines</Text>
                <FlatList 
                keyExtractor = {(item , index) => item.id}
                data = {CUISINES} 
                renderItem = {renderGridItem} 
                numColumns = {2} 
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardStyle: {
        width: '100%',
        height: 150,
    },
    textOne: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 20
    },
});

export default CuisinesScreen;