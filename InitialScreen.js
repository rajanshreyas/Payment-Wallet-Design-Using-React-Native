import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import Card from '../components/Card';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';

class InitialScreen extends React.Component {
    render(){
        return(
            <View style={styles.screen}>
                <TouchableHighlight onPress= {() => {
                    this.props.navigation.navigate({
                        routeName: 'Home'
                    });
                }}>
                    <Card style= {styles.cardOne}>
                        <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'flex-start' }}>
                            <Icons name='wallet' size={50} color='white' />
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Text style= {styles.textOne}>  Wallet</Text>
                                <Icon name= 'chevron-small-right' size= {50} color= 'white' style={{marginLeft: 150}}  />
                            </View>
                        </View>
                        <Text style= {styles.smallText}>Click here to jump to Wallet</Text>
                        
                    </Card>
                </TouchableHighlight>
    
                <TouchableHighlight onPress= {() => {
                    this.props.navigation.navigate({
                        routeName: 'Shops'
                    });
                }}>
                    <Card style= {styles.cardTwo}>
                        <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'flex-start' }}>
                            <Icon name='shop' size={50} color='white' />
                            <Text style= {styles.textTwo}>  Shops</Text>
                            <Icon name= 'chevron-small-right' size= {50} color= 'white' style={{marginLeft: 150}}  />
                        </View>
                        <Text style= {styles.smallText}>Click here to jump to Shops</Text>
                    </Card>
                </TouchableHighlight>
    
                <TouchableHighlight onPress= {() => {
                    this.props.navigation.navigate({
                        routeName: 'Cuisines'
                    });
                }}>
                    <Card style= {styles.cardThree}>
                        <View style={{flexDirection: 'row', marginTop: 50 }}>
                            <Icond name='food' size={50} color='white' />
                            <Text style= {styles.textThree}>  Cuisines</Text>
                            <Icon name= 'chevron-small-right' size= {50} color= 'white' style= {{marginLeft: 115}} />
                        </View>
                        <Text style= {styles.smallText}>Click here to jump to Cuisines</Text>
                    </Card>
                </TouchableHighlight>
            </View>
        );
    }
    
};

const dim = Dimensions.get("screen").height/3; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    cardOne: {
        width: '100%',
        maxWidth: '100%',
        height: dim,
        borderRadius: 0,
        backgroundColor: '#8b008b',
    },
    cardTwo: {
        width: '100%',
        maxWidth: '100%',
        height: dim,
        borderRadius: 0,
        backgroundColor: '#ffa500'
    },
    cardThree: {
        width: '100%',
        maxWidth: '100%',
        height: dim,
        borderRadius: 0,
        backgroundColor: 'blue',
    },
    textOne: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    textTwo: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    textThree: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    smallText: {
        marginHorizontal: 78,
        color: 'white'
    }
});

export default InitialScreen;
