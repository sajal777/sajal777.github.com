import React, { useState , useEffect} from 'react';

import {View, Text, Button,StyleSheet,Image,ScrollView, Alert,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';


///HOOKSS////

// const useFetch = (url) => {
//           const [dataSource,setDataSource] = useState(null)
//           const [loading,setLoading] = useState(true)
          
//           useEffect(async () => {
//             const response = await fetch(url);
//             const dataSource = await response.json();
//             const [ item ]  = data
//             setDataSource(item);
//           },[])
    
//           console.log(dataSource);
    
//           return {dataSource}
//     }




///HOOKKSS///

const SearchScreen = (props) => {

    // //coming from search screen
    

    // //passTo Details Of Medicine
    // let direct_medicine = {};

  //const [MedicalStore1, setMedicalStore1] = useState([]);
//   const [MedicalStore1,setMedicalStore1] = useState([
//     {
//         id: 1,
//         brand_name: 'BrandName1',
//         manufacturer_name:'manufacturer_name1',
//         generic_name:'generic_name1',
//         batch_number:'batch_number1',
//         manufacture_date:'1/1/2020',
//         expiry_date: '1/1/2020',
//         supplier_id: 1,
//         price: 100,
//         quantity: 1
//     },

//     {
//         id: 2,
//         brand_name: 'BrandName2',
//         manufacturer_name:'manufacturer_name2',
//         generic_name:'generic_name2',
//         batch_number:'batch_number2',
//         manufacture_date:'1/1/2020',
//         expiry_date: '1/1/2020',
//         supplier_id: 1,
//         price: 100,
//         quantity: 1
//     },

//     {
//         id: 3,
//         brand_name: 'BrandName3',
//         manufacturer_name:'manufacturer_name1',
//         generic_name:'generic_name1',
//         batch_number:'batch_number1',
//         manufacture_date:'1/1/2020',
//         expiry_date: '1/1/2020',
//         supplier_id: 1,
//         price: 100,
//         quantity: 1
//     }

// ])


    // const arr_of_props = props.route.params;
    // const listPharmacies = arr_of_props[0];
    
    // medicinepresent = arr_of_props[1];

    // setMedicinePresent(arr_of_props[1])
    // console.log(arr_of_props[1]);
    // console.log(arr_of_props[0]);
    
    
   //  console.warn(props.route.params)

    // console.log("" + listPharmacies);

    // let direct_medicine = {};
    // let pharma_id = null;


    // let direct_medicine = {
    //     id: 1,
    //     brand_name: 'BrandName1',
    //     manufacturer_name:'manufacturer_name1',
    //     generic_name:'generic_name1',
    //     batch_number:'batch_number1',
    //     manufacture_date:'1/1/2020',
    //     expiry_date: '1/1/2020',
    //     supplier_id: 1,
    //     price: 100,
    //     quantity: 1
    // };

    // const findMedicine = () => {
    //     MedicalStore1.map((item,key) => {
    //         if(item.brand_name === medicinepresent) {
    //             direct_medicine = item;
    //             props.navigation.navigate('Details of Medicine',direct_medicine)
    //         }else {
    //             console.log("###" + item.brand_name + " " + medicinepresent + "#####");
    //         }
    //     })
    // }


    // const[listPharmacies, setListPharmacies] = useState([
    //     {
    //       pharmaId : 1,
    //       name: "MedicalStore1"
    //   },
    //   {
    //     pharmaId : 2,
    //       name: "MedicalStore2"
    //   },
    //   {
    //     pharmaId : 3,
    //       name: "MedicalStore3"
    //   },
    //   {
    //     pharmaId : 4,
    //       name: "MedicalStore4"
    //   },
    //   {
    //     pharmaId : 5,
    //       name: "MedicalStore5"
    //   },
    //   {
    //     pharmaId : 6,
    //       name: "MedicalStore6"
    //   },
    //   {
    //     pharmaId : 7,
    //       name: "MedicalStore7"
    //   },
      
    //   ]);


    // const pharmacyClicked = () => {
        // fetch('https://jsonplaceholder.typicode.com/posts'){
        //   method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     pharma_id : pharma_id
        //   })
        // })
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     console.log(responseJson);
        //     setMedicalStore1(responseJson);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        
    //     alert('All the medicines of this Pharmacy will get listed'+ listPharmacies);
    // }

    ///HOOOKKSSSS///////////
    const[listPharmacies, setListPharmacies] = useState([])
    const [loading,setLoading] = useState(false)
    const [medicine,setMedicine] = useState("");

    

    let id = null

    // let medicine = ""
    // medicine = props.route.params

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(
            'https://stack-our-stock-inv.herokuapp.com/api/app/pharmas?pincode='+ global.loc,
          ).then((response) => response.json())
          .then((json) => {
            setListPharmacies(json);
          })
          .catch((error) => {
            console.error(error);
          });
          setLoading(true)
        };
        fetchData();
      }, []);


    ///////HOOKSS////////

    


    const ItemView = (item,key) => {
        return(
            <TouchableOpacity onPress= {() => {
                //     pharma_id = item.id;
                //     pharmacyClicked();
                //   //  props.navigation.navigate('PharmacyDetails',MedicalStore1)
                //     if(medicinepresent === "") {
                //         props.navigation.navigate('PharmacyDetails',MedicalStore1)
                //     }else {
                //         findMedicine()
                //         console.log(medicinepresent)
                //     }
                    
                        props.navigation.navigate('PharmacyDetails',[item.pharmaId,medicine])

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
                        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.pharmaId} {global.loc}</Text>
              
                            <Text style={styles.cardDetails}> Best Store to buy medicins</Text>
                            <Text>hello</Text>
                        </View>    
                    </View>
            </TouchableOpacity>
        )
    }
    
    return(
        <ScrollView style={StyleSheet.container}>
            <View style={{width:100,height:50,backgroundColor:'white',flexDirection:'row',padding:5,alignItems:"center",marginLeft:70}}>
                    <Icon name="ios-search" style={{fontSize:24, marginTop:10}}/>
                    <TextInput onSubmitEditing={() => {props.navigation.navigate('Medicines List',medicine)}} onChangeText={(value) => setMedicine(value)} returnKeyType='done' placeholder="Search Medicines" style={{marginTop:10,width:230,height:50,borderColor:'gray',marginLeft:10}}/>
            </View>
        {loading ? ( 
            <View style={styles.cardsWrapper}>
                 {listPharmacies.map(ItemView)} 
            </View>
        ) : (
            <Text>loading.......................</Text>
        )
        }
         </ScrollView>
        )
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    cardsWrapper: {
        marginTop: 5,
        width: '90%',
        alignSelf: 'center',
        marginTop:50
      },
      card: {
        height: 100,
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

export default SearchScreen;