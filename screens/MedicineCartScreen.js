import React, {useState,useEffect} from 'react';
import {View, Text, Button, StyleSheet, StatusBar,TouchableWithoutFeedback,Dimensions,Image} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';





const MedicineCartScreen = (props) => {

  /////HOOOOKKSSSSS//////////////
  const {colors} = useTheme();
  const [loading,setLoading] = useState(false)
 const [singlemedicine,setSingleMedicine] = useState([])

  let medicine_obj = props.route.params.data;
  //console.warn(props.route.params)

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const result = await fetch(
    //         'https://stack-our-stock-inv.herokuapp.com/api/app/pharma/'+id +'/medicines',
    //       ).then((response) => response.json())
    //       .then((json) => {
    //           setSingleMedicine(json);
            
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //       setLoading(true)
    //     };
    //         fetchData();
    //   }, []);


      // singlemedicine.some((item,key) => {
      //   if(item.id === 42) {
      //     console.log("HIIIIIIIIIIIIIIIIIII")
      //     medicine_obj = item;
      //     return medicine_obj
      //   }else {
      //     console.log("Id ###################" + id)
      //   }
      // })




  /////////HOOKKKSSSSS//////////


  const [fetchdata, setFetchData] = useState({})
  const [isHover, setisHover] = useState(false);
  const [qyt, setqyt] = useState(1);

  const handlePress = () => {
    setisHover(true);
  }

  const handleInc = () => {
    
    setqyt(qyt + 1);
  }

  const handleDec = () => {
    console.log(qyt);
    setqyt(qyt - 1);
  }

  const handleClose = () => {
    setisHover(false);
  }
  //#C0C0C0
  const AddToCart = () => {
          fetch('https://mr-medicine-man.herokuapp.com/api/cart?user_id=1&medicine_id=1', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "quantity":"100",
            "price" : "2"
      })
        })
            .then((response) => response.json())
            .then((responseJson) => {
              //console.log(responseJson);
              setFetchData(responseJson);
              console.log(fetchdata)
            })
            .catch((error) => {
              console.error(error);
            });
  }
    

  return (
  
    <View style={styles.container}>
    <StatusBar backgroundColor="#009387" barStyle="light-content" />
    <View style={styles.header}>
      <Animatable.Image
        animation="bounceIn"
        duraton="1500"
        source={require('../assets/Banners/Banner3.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
    </View>
    <Animatable.View
      style={[
        styles.footer,
        {
          backgroundColor: colors.background,
        },
      ]}
      animation="fadeInUpBig">
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}>
        Medicine Details
      </Text>
      <TouchableWithoutFeedback onPress = {handleClose}>
    <View style={{height:200,width:300,backgroundColor:'white',marginTop:20}}>
        <Text>BatchNumber : {medicine_obj.batchNumber}</Text>
        <Text>BrandName : {medicine_obj.brandName}</Text>
        <Text>ExpiryDate : {medicine_obj.expiryDate}</Text>
        <Text>GenericName : {medicine_obj.genericName}</Text>
        <Text>ManufactureDate : {medicine_obj.manufactureDate}</Text>
        <Text>Manufacturer : {medicine_obj.manufacturer}</Text>
        <Text>Price : ₹ {medicine_obj.price}</Text>
        <Text>Available : {medicine_obj.quantity}</Text>
        {/* <Text>{medicine_obj.supplier_id}</Text> */}
      </View>
      </TouchableWithoutFeedback>
      {isHover && (
            <View style={{width:320,height:90,zIndex:200,borderRadius:6,backgroundColor:'#009387',marginTop:20}}>
                <View style={{flexDirection:'row',padding:5}}>
                  {qyt > 1 ? (
                    
                     <TouchableOpacity onPress={handleDec}><Icon style={{padding:10}} name='minus' size={55} ></Icon></TouchableOpacity>
                  ): (
                    <TouchableOpacity onPress={handleClose}><Ionicons style={{padding:10}} name='trash' size={55} ></Ionicons></TouchableOpacity>
                  )}
                    <Text style={{paddingLeft:50,paddingRight:30,fontSize:55}}>{qyt}</Text>
                    <TouchableOpacity onPress={handleInc}><Icon style={{padding:10,left:20}} name='plus' size={55}></Icon></TouchableOpacity>
                </View>
            </View> 
        )}

        {!isHover && (
            <View style={{flexDirection:'row',width:300,marginLeft:30,marginTop:20}}> 
              <TouchableOpacity onPress={handlePress}>
                { qyt > 1 ? (
                  <View style={{backgroundColor:'#009387',width:70,alignItems:'center',borderRadius:35,height:70,marginTop:10}}>
                    <Text style={{fontSize:40,padding:5}}>{qyt}</Text>
                  </View>
                ) : (
                  <View>
                    <Icon style={{}} name='pluscircleo' size={60} color="#009387"/>
                    <Text style={{paddingTop:10,left:17,color:'#009387'}}>QTY</Text>
                  </View>
                )
                }
                  

              </TouchableOpacity>
            
              <TouchableOpacity style={{width:200}}>
                <View style={{marginLeft:120}}>

                  <TouchableOpacity onPress={AddToCart}><MaterialIcons style={{}} name='add-shopping-cart' size={60} color="#009387"></MaterialIcons></TouchableOpacity>
                </View>
                  <Text selectionColor="red" style={{marginTop:10,left:110,color:'#009387'}} >ADD TO CART</Text>
              </TouchableOpacity>          
          </View> 
       )}
    </Animatable.View>
  </View>
);
};
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

export default MedicineCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  logo: {
    width: 400,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
