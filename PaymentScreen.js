import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, ScrollView, TextInput} from 'react-native';
import Card from '../components/Card';
import Input from '../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { APP_NAME } from '../constants';

class PaymentScreen extends React.Component {
    render(){
        return(
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                <View style={styles.screen}>
                    
                    <Card style={styles.inputContainer}>
                        <Text style={styles.ftStyle}>Start your Payment through</Text>
                        <Text style={styles.textStyle}>{APP_NAME} WALLET</Text> 
   
                        <Input placeholder= "Enter Phone Number" keyboardType= "number-pad" style={styles.textInputStyle} />
                   
                        <View style= {styles.viewStyle}>
                            
                            <Icon name = 'rupee' size= {30} style= {styles.icon} />
                            <Input placeholder = "Pay"
                            style= {styles.input}
                            keyboardType= "number-pad"
                            autoCapitalize= "none"
                            />
                        </View>

                        <View style={styles.btn}><Button title="pay" /></View>
                        <TouchableWithoutFeedback onPress= {() => {
                            this.props.navigation.navigate({
                                routeName: 'History'
                            });
                        }}>
                            <Text style= {styles.clickText}>Check your balance</Text>
                        </TouchableWithoutFeedback>
                        
                        <TouchableWithoutFeedback onPress= {() => {
                            this.props.navigation.navigate({
                                routeName: 'AddMoney'
                            });
                        }}>
                            <Text style= {styles.clickText}>Not enough balance? Add more money</Text>
                        </TouchableWithoutFeedback>
    
                    </Card>
                    
                    
                </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        );
    }
    
};

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        width: 50,
        textAlign: 'center',
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    inputContainer: {
        width: '100%',
        maxWidth: '100%',
        height: "100%",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#8b008b',
        marginTop: 10
    },
    ftStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    icon: {
        padding: 0,
        marginLeft: 5
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    clickText: {
        marginTop: 20,
        color: '#6495ed'
    },
    btn: {
        marginTop: 20
    },
    textInputStyle: {
        borderBottomColor: 'black'
    }
});

export default PaymentScreen;