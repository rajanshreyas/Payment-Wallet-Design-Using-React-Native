import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { SHOPS } from '../data/dummy-data';

class ShopsScreen extends React.Component {
    render(){
        const renderGridItem = (itemData) => {
            return (
                <CategoryGridTitle 
                image= {itemData.item.image}
                title={itemData.item.title}
                status= {itemData.item.status}
                rating= {itemData.item.rating}
                 
                onSelect = {() => {
                    this.props.navigation.navigate({
                        routeName: 'Shopmenu', 
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
                <View style={styles.viewStyle}>
                    <Text style={styles.textOne}>Shops</Text>
                </View>
                <FlatList 
                keyExtractor = {(item , index) => item.id}
                data = {SHOPS} 
                renderItem = {renderGridItem} 
                numColumns = {1} 
                />
            </View> 
            
        );
    }
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderBottomColor: '#8b008b',
        borderBottomWidth: 0.35,
      },
      textOne: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyle: {
        width: '100%',
        height: 150,
    }
});

export default ShopsScreen;
