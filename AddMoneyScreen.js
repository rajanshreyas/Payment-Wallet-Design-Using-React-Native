import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, Button, Image, ScrollView} from 'react-native';
import Card from '../components/Card';
import Input from '../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import PayBitch from './paybitch';
import FloatInput from './../components/floatInput';
import RazorpayCheckout from 'react-native-razorpay';
import { APP_NAME,KIOSK } from '../constants';

class AddMoneyScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            amt:''
        }
    }
    render()
    {
    return(
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Card style={styles.inputContainer}>
                    <Text style={styles.ftStyle}>Add Money to your</Text>
                    <Text style={styles.textStyle}>{APP_NAME} WALLET</Text>
                    <View style= {styles.viewStyle}>
                        <Icon name = 'rupee' size= {30} style= {styles.icon} />
                        {/*<Input 
                        
                        blurOnSubmit
                        keyboardType= "number-pad"
                        autoCapitalize= "none"
                        />
                        */}
                        <TextInput placeholder="Amount" onChangeText={(val)=>{//val = parseInt(val);
                            //alert(typeof(val))
                            this.setState({amt:val})}}
                            style= {styles.input}
                            keyboardType= "numeric"  />
                    </View>
                

                    <View style={styles.btn}><Button title="add money" onPress={() => {
                        if(this.state.amt == '')
                        {
                            alert("Enter a valid amount")
                            return;
                        }
  var options = {
    description: 'Omale sooru thinathuku',
    image: 'https://i.ytimg.com/vi/C7mC4jUU8js/hqdefault.jpg',
    currency: 'INR',
    key: 'rzp_test_Ivx1lvbraLqLpG',
    amount: this.state.amt*100,
    name: 'Pubsec dawww',
    prefill: {
      email: 'ppubsec@gmail.com',
      contact: '919962231987',
      name: 'Paymate by pubsec dawwww'
    },
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}/></View>

                </Card>
                <Card style={styles.inputContainers}>
                    <Text style={styles.kiosk}>Or visit our nearest <Text style={{color: '#8b008b'}}>{KIOSK}</Text></Text>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image} 
                            source={{uri: 'https://pngimage.net/wp-content/uploads/2018/06/kiosk-icon-png-6.png'}}
                            resizeMode="cover"
                        />
                    </View>
                </Card>
                
            </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};
}

const dim = Dimensions.get("screen").height/3;
const dim2 = dim*2

const styles= StyleSheet.create({
    screen: {
        flex: 1,
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
        height: dim,
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
        backgroundColor: '#fff',
    },
    inputContainers: {
        width: '100%',
        maxWidth: '100%',
        height: dim2,
        marginTop: 10,
        padding: 30,
        alignContent: 'center'
    },
    kiosk: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '30%'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 1.5,
        borderColor: 'black',
        width: 135,
        height: 135,
        overflow: 'hidden',
        marginVertical: 20,
        marginHorizontal: 105
    },
    input: {
        height: 30,
        width: 350,
        borderBottomColor: '#8b008b',
        borderBottomWidth: 1,
        marginVertical: 50,
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 0
    }
});

export default AddMoneyScreen;