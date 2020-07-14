import React from 'react';
import AddMoneyScreen from '../screens/AddMoneyScreen';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HistoryScreen from '../screens/HistoryScreen';
import ShopsScreen from '../screens/ShopsScreen';
import CuisinesScreen from '../screens/CuisinesScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';
import PaymentScreen from '../screens/PaymentScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import GeneralScreen from '../drawerscreens/GeneralScreen';
import InitialScreen from '../screens/InitialScreen';
import ShopMenu from '../screens/shopMenuTest';
import OrderScreen from '../screens/orderScreen';
import ProfileScreen from '../drawerscreens/ProfileScreen';
import SettingsScreen from '../drawerscreens/SettingsScreen';
import { APP_NAME } from '../constants';
import LoginScreen from '../screens/LoginScreen';

const defOptions = {
    headerStyle: {
        backgroundColor: '#8b008b',
    },
    headerTitleStyle: {
        fontSize: 20
    },
    headerTintColor: 'white'
    
};


const Navigator = createStackNavigator({
    
    
    
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: APP_NAME,
            
        }
    },
    AddMoney: {
        screen: AddMoneyScreen,
    },
    History: {
        screen: HistoryScreen,
    },
    Payment: {
        screen: PaymentScreen,
        navigationOptions: {
            headerTitle: 'Payments'
        }
    },
    
    
},{
    defaultNavigationOptions: defOptions
});

Navigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "Home") {
          tabBarVisible = true;
        } else {
          tabBarVisible = false;
        }
      });
    }
  
    return {
      tabBarVisible
    };
  };

const ShopNavigator = createStackNavigator({
    ShopScreen: ShopsScreen,
    Shopmenu: ShopMenu,
    Order: OrderScreen
    
},{
    defaultNavigationOptions: {
        initialRouteName: 'ShopScreen', 
        headerShown: false
    }
});

ShopNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "ShopScreen") {
          tabBarVisible = true;
        } else {
          tabBarVisible = false;
        }
      });
    }
  
    return {
      tabBarVisible
    };
  };


const tabScreenConfig = {
    Wallet: { 
        screen: Navigator,
        navigationOptions: {
            
        tabBarIcon: (tabInfo) => {
            return <Icons name='wallet' size={25} color={tabInfo.tintColor} />;
        },
            tabBarColor: '#8b008b',
        
            
        }
    },
    Shops: {
        screen: ShopNavigator ,
        navigationOptions: {
            
            tabBarIcon: (tabInfo) => {
                return <Icon name='shop' size={25} color={tabInfo.tintColor} />;
            },
                tabBarColor: '#ffa500'
            }
    },
        
    Cuisines:  {
        screen: CuisinesScreen,
        navigationOptions: {
            
            tabBarIcon: (tabInfo) => {
                return <Icond name='food' size={25} color={tabInfo.tintColor} />;
            },
              
        }
    }
};


const TabNavigator = createBottomTabNavigator(tabScreenConfig, {
    activeTintColor: '#ff6f00',
    shifting: true,
    tabBarOptions: {
        
        activeBackgroundColor: '#8b008b',
        inactiveBackgroundColor: '#8b008b',
        activeTintColor: 'white'
    }
},{
    defaultNavigationOptions: defOptions
});

const GeneralNavigator = createStackNavigator({
    General: GeneralScreen
},{
    defaultNavigationOptions: defOptions
});

const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen
},{
    defaultNavigationOptions: defOptions
});

const SettingsNavigator = createStackNavigator({
    Settings: SettingsScreen
},{
    defaultNavigationOptions: defOptions
});




const MainNavigator = createDrawerNavigator({
    MainScreen : {
        screen: TabNavigator,
        navigationOptions: {
            drawerLabel: 'Home'
        },
    },
    General: GeneralNavigator,
    Profile: ProfileNavigator,
    Settings: SettingsNavigator

},{
    contentOptions: {
        activeTintColor: '#ff6f00'
    },
    defaultNavigationOptions: defOptions
});


const FirstNavigator = createSwitchNavigator({
    Initial: {
        screen: InitialScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    main: {
        screen: MainNavigator,
        navigationOptions: {
            headerShown: false
        }
    }

});

const LoginNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    First: {
        screen: FirstNavigator,
        navigationOptions: {
            headerShown: false
        }
    }
});

const AppContainer = createAppContainer(LoginNavigator)

export default AppContainer;

