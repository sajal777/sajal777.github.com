import React ,{useState} from 'react';
import {View, Text, Button, Image, StyleSheet, StatusBar, ScrollView, Picker} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'


import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
  const {colors} = useTheme();
  const theme = useTheme();
  //let data = {text: 'Hello from screen 1'}
  const [medicine, setMedicine] = useState("");
  let loc = global.loc;
  const [selectedValue, setSelectedValue] = useState("250005");
  global.loc = selectedValue;

  const[data, setData] = useState([
    {
      id : 1,
      name: "MedicalStore1"
  },
  {
      id : 2,
      name: "MedicalStore2"
  },
  {
      id : 3,
      name: "MedicalStore3"
  },
  {
      id : 4,
      name: "MedicalStore4"
  },
  {
      id : 5,
      name: "MedicalStore5"
  },
  {
      id : 6,
      name: "MedicalStore6"
  },
  {
      id : 7,
      name: "MedicalStore7"
  }

  ]);


  //const[datasource,setDataSource] = useState([]);
  

  const SearchPharmacyByLocation = () => {
    alert("List of Pharmacies a/c to location:" + global.loc );
  //   // fetch('https://jsonplaceholder.typicode.com/posts') {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //      "pincode":global.myVar
  //   })
  // })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       setDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
    props.navigation.navigate('List of Pharmacies',medicine)
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Bhopal" value="250005" />
          <Picker.Item label="Delhi" value="250005" />
          <Picker.Item label="Mumbai" value="250005" />
          <Picker.Item label="Pune" value="250005" />
        </Picker> 
        {/* {/* <Button title="Location" onPress={() => {
            const data = selectedValue;
          alert(data);
        }} /> */}
        <Swiper autoplay height={150}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/Banners/Banner1.1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/Banners/Banner2.2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/Banners/Banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/Banners/Banner4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper> 
      </View>
        
      <View style={styles.categoryContainer}>
      <TouchableOpacity onPress={SearchPharmacyByLocation}>
        <View style={styles.categoryIcon}>
          <MaterialCommunityIcons name="pharmacy" size={35} color="#009387" />
          <Text style={styles.categoryBtnTxt}>Pharmacy</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.categoryIcon}>
          <Ionicons name="cart-outline" size={35} color="#009387" />
          <Text style={styles.categoryBtnTxt}>Cart</Text>        
        </View>
        <View style={styles.categoryIcon}>
          <Ionicons name="location" size={35} color="#009387" />
          <Text style={styles.categoryBtnTxt}>location</Text>
        </View>
        <View style={styles.categoryIcon}>
          <MaterialCommunityIcons name="help-circle-outline" size={45} color="#009387" />
          <Text style={styles.categoryBtnTxt}>help</Text>
        </View>
      </View>

       <View style={styles.cardsWrapper}>
        {/* <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Popular Pharmacies in {global.myVar}
        </Text>
        <TouchableOpacity  
          onPress= {() => props.navigation.navigate('PharmacyDetails')}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Banners/Banner3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Medical Store 1</Text> 
              <Text style={styles.cardDetails}>
                Best Store to buy medicines
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View> 

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
   // backgroundColor: 'transparent',
    borderRadius: 8
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },

  categoryContainer: {
    flexDirection:'row',
    width: '100%',
    alignSelf: 'center',
    marginTop : 30,
    marginBottom : 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth : 0,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft : 10,
    marginRight: 15,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 1,
    color: '#009387',
    marginBottom: 3,
  },
  cardsWrapper: {
    marginTop: 5,
    width: '90%',
    alignSelf: 'center',
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
});
