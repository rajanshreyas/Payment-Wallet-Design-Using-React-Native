import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

class HistoryScreen extends React.Component {
    render(){
        return(
            <ScrollView>
                <View style={styles.screen}>
                    <Card style= {styles.outerCard}>
                        <Text style= {styles.textStyle}>Your Balance:  <Icon name = 'rupee' size= {30} /> 250</Text>
                        <TouchableWithoutFeedback onPress= {() => {
                            this.props.navigation.navigate({
                                routeName: 'AddMoney'
                            });
                        }}>
                            <Text style= {styles.clickStyle}>Add more money</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress= {() => {
                            this.props.navigation.navigate({
                                routeName: 'Payment'
                            });
                        }}>
                            <Text style= {styles.clickStyle}>Use Balance for Payments</Text>
                        </TouchableWithoutFeedback>
                    </Card>
    
                    <Card style= {styles.cards}>
                        <Text style= {styles.textStyle}>Recent Transactions:</Text>
                    </Card>
    
                    <Card style= {styles.card}>
                        <View style= {{flexDirection: 'row'}}>
                            <Text style= {{fontSize: 15, marginTop: 10}}>Payment Received to Wallet </Text>
                            <Text style= {styles.moneyStyle}>+ <Icon name = 'rupee' size= {20} /> 110 </Text>
                        </View>
                        <Text style= {{color: 'green', marginTop: 10, fontSize: 15}}>From Mr. Shreyas Rajan</Text>
                        <Text numberOfLines= {1} style= {{color:'#dcdcdc'}}>
                                ___________________________________________________________________________________
                        </Text>
                    
                        <View style= {{flexDirection: 'row'}}>
                            <Text style= {{fontSize: 15, marginTop: 10}}>Paid to SRM canteens </Text>
                            <Text style= {styles.moneyzStyle}>- <Icon name = 'rupee' size= {20} /> 100 </Text>
                        </View>
                        <Text style= {{color: 'red', marginTop: 10, fontSize: 15}}>To Subway Foods</Text>
                        <Text numberOfLines= {1} style= {{color:'#dcdcdc'}}>
                                ___________________________________________________________________________________
                        </Text>
    
                        <View style= {{flexDirection: 'row'}}>
                            <Text style= {{fontSize: 15, marginTop: 10}}>Payment Received to Wallet </Text>
                            <Text style= {styles.moneyStyle}>+ <Icon name = 'rupee' size= {20} /> 350 </Text>
                        </View>
                        <Text style= {{color: 'red', marginTop: 10, fontSize: 15}}>From Mr. Shreyas Rajan</Text>
                        <Text numberOfLines= {1} style= {{color:'#dcdcdc'}}>
                                ___________________________________________________________________________________
                        </Text>
    
                        <View style= {{flexDirection: 'row'}}>
                            <Text style= {{fontSize: 15, marginTop: 10}}>Paid to SRM canteens</Text>
                            <Text style= {styles.moneyzStyle}>- <Icon name = 'rupee' size= {20} /> 110 </Text>
                        </View>
                        <Text style= {{color: 'red', marginTop: 10, fontSize: 15}}>To Chai Kingz</Text>
                        <Text numberOfLines= {1} style= {{color:'#dcdcdc'}}>
                                ___________________________________________________________________________________
                        </Text>
                    </Card>
                </View>
            </ScrollView>
        );
    }
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    outerCard: {
        height: 200
    },
    clickStyle: {
        marginTop: 20,
        color: '#6495ed'
    },
    card: {
        marginTop: 10
    },
    moneyStyle: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'right',
        marginHorizontal: 110
    },
    cards: {
        marginVertical: 10,
        borderRadius: 0
    },
    moneyzStyle: {
        textAlign: 'right',
        marginHorizontal: 155,
        fontSize: 20,
        marginTop: 10
        
    }
});

export default HistoryScreen;