import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import 'firebase/firestore';
import  firebase from 'firebase';

// class DispOrder extends Component{
//   constructor(props)
//   {
//     super(props);
//     this.state ={
//       order : this.props.order,
//       dishes : this.props.dishes,
//     }
//   }
//   render()
//   {
//     alert(Object.entries(this.state.dishes));
//     return(
//       <>
      
//       {
        
//         Object.entries(this.state.order).map((val)=>{
//       return(
//       <>
//         <Text style={(true)?{color:"red"}:{}}>{val[0]} : {val[1]}</Text>
//       </>
//       )
//       })
//     }
//       </>
//     );
//   }
// }

export default class OrderScreen extends Component {

    
    constructor(props)
    {
      super(props);
      this.state = {
        order : [],
        dishes : [],
        place : true,
        yourOrder : [],
        placed : false,
    };
    this.state.order = this.props.navigation.state.params.orders
        
    }

   componentDidMount()
  {
    var shopsFood = firebase.database().ref("shop1/food/");
    shopsFood.on('value', (snapshot)=> {
    this.state.dishes=snapshot.val();
    this.setState({loaded:true})
    this.updateStatus();
    });
  }
  /**/

  updateStatus()
  {
    var tmp = true;
    Object.keys(this.state.order).map((val)=>{
        if(!this.state.dishes[val].available)
        {
            this.setState({place:false})
            tmp = false;
        }
    })
    if(tmp)
    this.setState({place:true})
  }

    placeOrder(shop)
    {
        if(this.state.place)
        {
          firebase.database().ref(shop + "/orders/" ).once('value').then((snapshot)=> {
            this.setState({orderNo: "order:" + (snapshot.numChildren()+1)}); 
                firebase.database().ref(shop + "/orders/" + this.state.orderNo ).set({"id":this.state.orderNo,"pay":"paytm","dishes":this.state.order,"status":"requested"}).then(()=>{
                    console.log("updated");
                    this.setState({placed:true})
                    var orderFood = firebase.database().ref(shop+"/"+"orders"+"/"+this.state.orderNo);
                    orderFood.on('value', (snapshot)=> {
                    this.setState({yourOrder:snapshot.val()});
                    });
                  }).catch((err)=>{
                    console.log(err);
                  });
            });     
             
        }
        else
        {
            alert("Item not available");
        }
    }
    removeFromCart(val,x =1 )
  {
    this.state.order[val[0]] =(this.state.order[val[0]]!=undefined)?this.state.order[val[0]]-1:0; 
    if(this.state.order[val[0]]==0 || x==0)
    delete this.state.order[val[0]];
    this.forceUpdate();
    this.updateStatus();
  }
    render() {
    return (
      <>
      {
        
                Object.entries(this.state.order).map((val)=>{
                {/* Should be commented after using proper props */}
                  if(this.state.loaded)
                  {var chk = (!this.state.dishes[val[0]].available);
              return(
              <>
                <Text style={(chk)?{color:"red"}:{}}>{val[0]} : {val[1]}</Text>
               {(chk)? <Text onPress={()=>{this.removeFromCart(val,0)}}> Clear</Text>:<></>}
              </>
              )}
              })
            }
      {(!this.state.placed)?
        <Button title="Place order" onPress={()=>{
            this.placeOrder("shop1")
        }}></Button>:<>
    <Text>Status:{this.state.yourOrder.status} </Text>
    <Text>Order id:{this.state.yourOrder.id} </Text>
      </>}
      </>
    );
  }
}