import React, {Component} from 'react';
import {Platform, Button,StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, ScrollView} from 'react-native';

import  firebase from 'firebase';
import { SHOPS } from '../data/dummy-data';
import DishDesc from '../shopMenusub/shopMenusub/DishDesc'
import AddToCart from '../shopMenusub/shopMenusub/AddToCart'
import RemoveAll from '../shopMenusub/shopMenusub/RemoveAll'  
import ShowFullMenu from '../shopMenusub/shopMenusub/ShowFullMenu'
import FoodType from '../shopMenusub/shopMenusub/FoodType'
import Con from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = ({
      dishes:{},
      all:true,
      order:[],
      catShow : [],
      curCat : ""
    });
     
  }
  
  
  componentDidMount()
  {
      this.state = {}
    var shopsFood = firebase.database().ref("shop1/food/");
    shopsFood.on('value', (snapshot)=> {
  this.setState({dishes:snapshot.val()});
});
  }

  readMenu(shop)
  {
    //var userId = firebase.auth().currentUser.uid;
  firebase.database().ref(shop + "/food/").once('value').then((snapshot)=> {
  this.setState({dishes:snapshot.val()});
  // ...
});

  }
  
  rateFood(shop,dish,rating,rate)
  {
    firebase.database().ref(shop + "/food/" + dish + "/rating").set({count:rating.count+1,rate:rating.rate+rate}).then(()=>{
        console.log("updated");
      }).catch((err)=>{
        console.log(err);
      });;
     
  }

  collapseCategory(val)
  {
    if(this.state.catShow[val[1].category] == undefined)
              {
                this.state.catShow[val[1].category] = true
                //alert(Object.entries(this.state.catShow))
              }
                else
              {
                delete this.state.catShow[val[1].category]
                //alert(Object.entries(this.state.catShow))
              }
                this.forceUpdate();
            
  }

  addToCart(val)
  {
    this.state.order[val[0]] = (this.state.order[val[0]]==undefined)?1:this.state.order[val[0]]+1;
    this.forceUpdate();
  }
  removeFromCart(val,x =1 )
  {
    this.state.order[val[0]] =(this.state.order[val[0]]!=undefined)?this.state.order[val[0]]-1:0; 
    if(this.state.order[val[0]]==0 || x==0)
    delete this.state.order[val[0]];
    this.forceUpdate();
  }
  rateFood(shop,dish,rating,rate)
  {
    firebase.database().ref(shop + "/food/" + dish + "/rating").set({count:rating.count+1,rate:rating.rate+rate}).then(()=>{
        console.log("updated");
      }).catch((err)=>{
        console.log(err);
      });;  
  }
  
  toggleMenu(val)
  {
    this.setState({all:val})
  }
  render() {
    //console.log((Object.entries(this.state.dishes)));
        return (
      <ScrollView>
        <View style={styles.viewStyle}>
                
          <Text style={styles.textOne}>Shops</Text>
        </View>

        <ShowFullMenu all={this.state.all} toggleMenu={this.toggleMenu.bind(this)}/>

        

      {
      Object.entries(this.state.dishes).sort((a,b)=>{
        //sort category wise
        return (a[1].category>b[1].category)
      }).map((val)=>{
        //to display the category title and update
        var catDis = (this.state.curCat!=val[1].category);
        if(catDis)
        {
          (this.state.curCat=val[1].category);
        }
        
        //case 1
        if(this.state.catShow[val[1].category]==undefined)
        {
        if(!this.state.all && !val[1].available  && this.state.order[val[0]]==undefined)  
        {
            return(<>
            {/*return category based on user wish*/}
            {(catDis)?<FoodType val={val} collapseCategory={this.collapseCategory.bind(this)}/>:<></>}
            </>);
        }

        //case 2
        else if(!val[1].available  && this.state.order[val[0]]!=undefined)
        {
          return(<View key = {val[0]}>
            {/*return category based on user wish*/}
            {(catDis)?<FoodType val={val} collapseCategory={this.collapseCategory.bind(this)}/>:<></>}
            
            {/*Desc about product*/}
            <DishDesc color="red" val={val} shopName="shop1"/>
            
          {/*Clear cart*/}
          <RemoveAll val={val} removeFromCart={this.removeFromCart.bind(this)}/>
            </View>);
        }

        //case 3
        else        
        return(
          <View key = {val[0]}>
            {/*return category based on user wish*/}
            {(catDis)?<FoodType val={val} collapseCategory={this.collapseCategory.bind(this)}/>:<></>}

            {/*return product desc*/}
            <DishDesc color="black" val={val} shopName="shop1" />
          {/*Add/remove based on the availability*/}
          
           {
              (val[1].available)?<AddToCart val={val} removeFromCart={this.removeFromCart.bind(this)} addToCart={this.addToCart.bind(this)}/>:<></>
           } 
          
          
           
          </View>
          )
        }
        else 
        {
            if(!val[1].available  && this.state.order[val[0]]!=undefined)
        {
          return(<View key = {val[0]}>
            {/*return category based on user wish*/}
            {(catDis)?<FoodType val={val} collapseCategory={this.collapseCategory.bind(this)}/>:<></>}
            
            {/*Desc about product*/}
            <DishDesc color="red" val={val} shopName="shop1"/>
                      {/*Clear cart*/}
          <RemoveAll val={val} />
            </View>)
        }   
        else
        {
            return(<>
                {/*return category based on user wish*/}
                {(catDis)?<FoodType val={val} collapseCategory={this.collapseCategory.bind(this)}/>:<></>}
                </>);
        }
        }
      })
      }
      
      <View style={{padding: 25, width: '100%'}}>
      <Button title="Show order" onPress={()=>{
        console.log("order:");
        console.log(Object.entries(this.state.order));
        
      }}/>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F7176',
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
});