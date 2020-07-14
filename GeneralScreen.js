import React, { Children } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IC from 'react-native-vector-icons/FontAwesome';
import Con from 'react-native-vector-icons/Ionicons'

class GeneralScreen extends React.Component {
    render(){
        return(
            <View style={styles.screen}>
                
                    <Card style= {styles.cardHolder}>
                    <TouchableOpacity onPress= {() => {
                        this.props.navigation.navigate({
                            routeName: 'History'
                        });
                    }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style= {styles.textHolder}>Transactions</Text>
                            <Icons name= "payment" size= {45} style= {{padding: 10}} />
                        </View>
                    </TouchableOpacity>
                    </Card>
                

                
                    <Card style= {styles.cardHolder}>
                        <TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style= {styles.textHolder}>F.A.Q's</Text>
                            <Icon name= "question" size= {45} style= {{padding: 10}} />
                        </View>
                        </TouchableOpacity>
                    </Card>
                

                
                    <Card style= {styles.cardHolder}>
                        <TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style= {styles.textHolder}>About Developers</Text>
                            <IC name= "code" size= {45} style= {{padding: 10}} />
                        </View>
                        </TouchableOpacity>
                    </Card>
                

                
                    <Card style= {styles.cardHolder}>
                        <TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style= {styles.textHolder}>Rate Us</Text>
                            <Icons name= "rate-review" size= {45} style= {{padding: 10}} />
                        </View>
                        </TouchableOpacity>
                    </Card>
                
            </View>
        );
    }
    
};

GeneralScreen.navigationOptions = navData => {
    return { 
        headerLeft: () => {
            return(
                <TouchableOpacity onPress = {() => {
                    navData.navigation.navigate({
                        routeName: 'Home'
                    });
                }} style={{width:'200%', marginLeft: 10}}>
                    <Con name= "md-arrow-back" size= {30} color= 'white' style={{marginLeft: 3}}  />
                </TouchableOpacity>
            );
        }
        
    };
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderBottomColor: 'black',
    },
    cardHolder: {
        borderBottomColor: '#8b008b',
        height: '15%',
        marginVertical: 15,
        shadowColor: '#8b008b'
    },
    textHolder: {
        fontSize: 23.5,
        fontWeight: 'bold',
        padding: 10,

    }
});

export default GeneralScreen;
