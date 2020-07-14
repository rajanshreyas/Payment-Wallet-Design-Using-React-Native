import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';

class LoginScreen extends React.Component {
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                
                <Card style={styles.cardStyle}>
                    <View style={styles.tiStyle}>
                        <Icon name= "user" size= {25} color= "grey" style={styles.icon} />
                        <TextInput placeholder= "username" style={styles.textStyle}/>
                    </View>

                    <View style={styles.tiStyle}>
                        <Icons name= "key" size= {25} color= "grey" style={styles.icon} />  
                        <TextInput placeholder= "password" secureTextEntry={true} style={styles.textStyle}/>
                    </View>

                    <View style={styles.buttonStyle}>
                        <View style={{width: '40%', marginTop: 15}}>
                            <Button title="Login" onPress={() => {
                                this.props.navigation.navigate({
                                    routeName: 'First'
                                })
                            }} color= "#8b008b"/>
                        </View>
                        
                        <View style={{marginTop: 10, width: '100%'}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>OR</Text>
                        </View>

                        <View style={{width: '40%', marginTop: 10,}}>
                            <Button title= "Sign Up" color= "#ffa500" />
                        </View>
                    </View>
                </Card>

                
                
            </View>

            
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffe0'
    },
    cardStyle: {
        width: '75%',
    },
    buttonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width: 50,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
    tiStyle: {
        flexDirection: 'row'
    },
    icon: {
        padding: 0,
        marginTop: 10
    },
});

export default LoginScreen;