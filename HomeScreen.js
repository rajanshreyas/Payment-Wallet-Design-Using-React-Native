import React, { Children } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import Card from '../components/Card';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from 'react-navigation';

class HomeScreen extends React.Component {
    
    
    render(){
        return(
            <View>
                <Card style={styles.outerCard}>
                    <View style={styles.screen}>
                        <Card style={styles.innerCard}>
                            <TouchableOpacity onPress= {() => {
                                this.props.navigation.navigate({
                                routeName: 'AddMoney'
                                });
                            }}
                            style={styles.Card}>
                                    <Image style={styles.image} source={require('../images/addmoney.png')}  />
                                    <Text style={styles.view}>Add</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card style={styles.innerCard}>
                            <TouchableOpacity onPress= {() => {
                            this.props.navigation.navigate({
                                routeName: 'Payment'
                            });
                            }}
                            style={styles.Card}>
                                <Icons name = "payment" size ={50} />
                                <Text style={styles.view}>Pay</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </Card>
    
               
                <Card style={styles.balanceCard}>
                    <Text style={styles.textScreen}>BALANCE: Rs. 250.00</Text>
                        <View style={styles.hisButton}>
                            <Button title="History" onPress={() => {
                                this.props.navigation.navigate({
                                    routeName: 'History'
                                });
                            }}/>
                        </View>
                </Card> 
                
            </View>
            
    
    
            
        );
    }
    
};



HomeScreen.navigationOptions = navData => {
    return { 
        headerLeft: () => {
            return(
                <TouchableOpacity onPress = {()=> {
                    navData.navigation.toggleDrawer()
                }} style={{width:'200%', marginLeft: 10}}>
                    <Icon name= "ios-menu" size= {30} color= 'white' style={{marginLeft: 3}}  />
                </TouchableOpacity>
            );
        }
        
    };
    
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Card: {
        textAlign: 'center',
        alignItems: 'center',
    },
    innerCard: {
        height: 100,
        padding: 20,
        fontWeight: 'bold',
        borderColor: '#f5fffa',
        backgroundColor: '#f5fffa'
    },
    view: {
        fontSize: 15,
        marginTop: 1,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50
    },
    outerCard: {
        height: 200,
        width: '95.5%',
        backgroundColor: '#f5fffa',
        alignContent: 'center',
        marginTop: 100,
        marginHorizontal: 10
    },
    balanceCard: {
        fontWeight: 'bold',
        borderColor: '#f5fffa',
        backgroundColor: '#f5fffa',
        width: '95.5%',
        maxWidth: '100%',
        height: 150,
        marginTop: 20,
        padding: 30,
        alignContent: 'center',
        marginHorizontal: 10
    },
    hisButton: {
        width: '50%',
        marginTop: 30,
        marginLeft: 80,
        
    },
    textScreen: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default HomeScreen;