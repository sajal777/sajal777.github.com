import React,{useState,useEffect} from 'react';
import {View, Text, Button,StyleSheet,Image,ScrollView, Alert,TouchableHighlight} from 'react-native';
//import {MedicalStore1} from '../constants/Data'



import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { servicesVersion } from 'typescript';

const SearchMedicine = (props) => {

  // console.log(props.route.params)

    // const Medicines = props.route.params;
    // let msg = "Hello";
    // let medicine = {};

    const[Medicines, setMedicines] = useState([
        {
          "id": 4,
          "brandName": "amlokind 5",
          "genericName": "amlokind",
          "manufactureDate": "2020-09-25",
          "expiryDate": "2020-09-30",
          "manufacturer": "mankind",
          "price": 9.9,
          "quantity": 999,
          "batchNumber": "671",
          "supplierId": 6
      }
    
    ]);
    

    // let medicineid = null;
   

    // let medicineDetails = () => {
    //    medicine = Medicines[medicineid-1];
       
    // }

    /////////////HOOKSSSSSSSSSS///////////////

    // console.warn(props.route.params)
    let medicine = props.route.params
    
    // console.log(typeof(search))
      
  

    const [loading,setLoading] = useState(false)
  

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(
            'https://stack-our-stock-inv.herokuapp.com/api/app/medicines/?name='+ medicine,
          ).then((response) => response.json())
          .then((json) => {
            setMedicines(json);
          })
          .catch((error) => {
            console.error(error);
          });
        };
        setLoading(true)
        fetchData();
      }, []);


    ////////////////HOOKS////////////////////



    // const SingleCardSreen = ()=> {
    //   navigation.navigate('List of Pharmacies')
    // }


    const ItemView = (item,key) => {
      
        return(
              
                 <TouchableOpacity onPress={() => {
                        // medicineid = item.id 
                        // medicineDetails()
                        // props.navigation.navigate('Details of Medicine',medicine)
                        const data = {
                          "id" : item.id,
                           "brandName": item.brandName,
                          "genericName": item.genericName,
                          "manufactureDate": item.manufactureDate,
                          "expiryDate": item.expiryDate,
                          "manufacturer": item.manufactureDate,
                          "price": item.price,
                          "quantity": item.quantity,
                          "batchNumber": item.batchNumber,
                          "supplierId": item.supplierId
                        }
                        props.navigation.navigate('Details of Medicine', {data})
                    }
                 }>
                  
                     
                    <View key={item.id} style={styles.card}>
                        <View style={styles.cardImgWrapper}>

                            <Image
                                source={require('../assets/Banners/Banner3.jpg')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={{flex: 2,padding:10,borderColor: '#ccc',borderWidth: 1,borderLeftWidth: 0,borderBottomRightRadius: 8,borderTopRightRadius: 8,backgroundColor: '#fff'}}>
                             <Text style={styles.cardTitle}>{item.id}. {item.brandName}</Text>
                              <Text style={styles.cardDetails}>Generic Name: {item.genericName} </Text>
                               {/* {isHover && (
                                  <View style={{left:100,top:35,width:110,zIndex:99,borderRadius:6,height:30,backgroundColor:'#C0C0C0'}}>
                                      <View style={{flexDirection:'row',padding:5}}>
                                          <TouchableOpacity onPress={handleClose}><Ionicons name='trash' size={20}></Ionicons></TouchableOpacity>
                                          <Text style={{paddingLeft:20,paddingRight:20}}>{qyt}</Text>
                                          <TouchableOpacity onPress={handleInc}><Icon name='plus' size={20}></Icon></TouchableOpacity>
                                      </View>
                                  </View>
                                )} 
                             <View style={{flexDirection:'row',marginLeft:140,marginTop:10}}>
                                {!isHover && (
                                  <TouchableOpacity onPress={handlePress}>
                                      <Icon style={{}} name='pluscircleo' size={30}/>
                                  </TouchableOpacity>
                                )}
                                <TouchableOpacity>
                                    <MaterialIcons style={{marginLeft:25}} name='add-shopping-cart' size={25}></MaterialIcons>
                                </TouchableOpacity>
                             </View> */}
                        </View>
                    </View>
            </TouchableOpacity>            
        )
    }

    return(
        <ScrollView style={StyleSheet.container}>
        {loading ? ( 
          <View style={styles.cardsWrapper}>
            <View style={styles.cardsWrapper}>
                 {Medicines.map(ItemView)} 
              </View>
            </View>
              ) : (
                <Text>loading.......................</Text>
              )
        }
            
       </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardsWrapper: {
        marginTop: 5,
        width: '90%',
        alignSelf: 'center',
      },
      card: {
        height: 120,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        fontWeight: 'bold',
      },
      cardDetails: {
        fontSize: 12,
        color: '#444',
        
      },
})

export default SearchMedicine;

