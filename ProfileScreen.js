import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends React.Component{
    render(){
        return(
            <View style= {styles.screen}>
                <Card style={styles.inputContainers}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image} 
                            source={{uri: 'https://www.marketingmuses.com/wp-content/uploads/2018/01/invis-user-600x600.png'}}
                            resizeMode="stretch"
                        />
                    </View>
                    <Text style={styles.kiosk}>Welcome, User!</Text>
                </Card>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textStyle}>Update Phone Number</Text>
                    <Icon name="ios-arrow-forward" size={25} color="black" />
                </Card>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textStyle}>Update Phone Number</Text>
                    <Icon name="ios-arrow-forward" size={25} color="black" />
                </Card>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textStyle}>Notification Settings</Text>
                    <Icon name="ios-arrow-forward" size={25} color="black" />
                </Card>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textStyle}>Logout</Text>
                    <Icon name="ios-arrow-forward" size={25} color="black" />
                </Card>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 0.5,
        borderColor: 'black',
        width: 135,
        height: 135,
        overflow: 'hidden',
        marginVertical: 20,
        marginHorizontal: '30%'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    kiosk: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8b008b'
    },
    inputContainer: {
        marginTop: 15,
        shadowOpacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 16.5,
        fontWeight: 'bold',
    }
});

export default ProfileScreen;