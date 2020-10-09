import React, {useState, useEffect} from 'react';

import {TextInput,Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCartIcon from './ShoppingCartIcon'
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { View } from 'react-native-animatable';
import { Avatar} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTheme, useIsFocused } from '@react-navigation/native';
import CardListScreen from './cardListScreen';
import SearchScreen from './SearchScreen';
import { readBuilderProgram } from 'typescript';
import MedicineCartScreen from './MedicineCartScreen';
import SearchMedicine from './SearchMedicine'

import useBeforeFirstRender from '../hooks/useBeforeFirstRender'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();



const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-cart-sharp" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = (props) => {
 
////////////////////Without HOOKS/////////////////////////////////
  // const[dataSource,setDataSource] = useState([]);

  // const[dataSource, setDataSource] = useState([
  //   {
  //     pharmaId : 1,
  //     name: "MedicalStore1"
  // },
  // {
  //   pharmaId : 2,
  //     name: "MedicalStore2"
  // },
  // {
  //   pharmaId : 3,
  //     name: "MedicalStore3"
  // },
  // {
  //   pharmaId : 4,
  //     name: "MedicalStore4"
  // },
  // {
  //   pharmaId : 5,
  //     name: "MedicalStore5"
  // },
  // {
  //   pharmaId : 6,
  //     name: "MedicalStore6"
  // },
  // {
  //   pharmaId : 7,
  //     name: "MedicalStore7"
  // },
  
  // ]);

  // const msg = dataSource[0].pharmaId;



//   const searchPharmacy =  () => {
    
//     // alert("List of Pharmacies a/c to Medicine and location-  \n Searched medicine:" + medicine + " \nSearched Location:" + global.loc );
//     fetch('https://stack-our-stock-inv.herokuapp.com/api/app/pharmas?pincode='+ global.loc, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "brand_name": medicine,
//       "pincode":global.myVar
//     })
//   })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //console.log(responseJson);
//         setDataSource(responseJson);
//         console.log(dataSource)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//       console.log('MainTab'+dataSource)
//       props.navigation.navigate('List of Pharmacies',[dataSource,medicine])
// }

////////////////////WithoutHOOKKSS/////////////////////////////////////////////

//////////HOOKS//////////
// useEffect(() => {
//   const fetchData = async () => {
//     const result = await fetch(
//       'https://stack-our-stock-inv.herokuapp.com/api/app/pharmas?pincode='+ global.loc,
//     ).then((response) => response.json())
//     .then((json) => {
//       setDataSource(json);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   };

//   fetchData();
// }, []);

 //////////HOOKS//////////

 const {colors} = useTheme();
 const [medicine, setMedicine] = useState("");

  return(
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor:colors.background,
          elevation:0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft:10,flexDirection:'row',marginTop:5}}>
              <Icon.Button
                name="ios-menu"
                size={30}
                color= {colors.text}
                backgroundColor={colors.background}
                style={{marginLeft:5,marginTop:5}}
                onPress={() => props.navigation.openDrawer()}></Icon.Button>
                <View style={{width:250,height:50,backgroundColor:'white',flexDirection:'row',padding:5,alignItems:"center"}}>
                  <Icon name="ios-search" style={{fontSize:24, marginTop:10}}/>
          <TextInput onSubmitEditing={() => {
           alert(`you searched for medicine ${medicine}`)
           props.navigation.navigate('Medicines List',medicine)}} onChangeText={(value) => setMedicine(value)} returnKeyType='done' placeholder="Search Medicine" style={{marginTop:10,width:230,height:50,borderColor:'gray',marginLeft:10}}></TextInput>
                </View>
              </View>
            
          ),
          headerRight: () => (
          <View style={{flexDirection:'row', marginRight:10 ,marginTop:10}}>
            {/* <TouchableOpacity onPress = {() => {navigation.navigate('SearchScreen')}}>
            <Icon.Button
              name="ios-search"
              size={30}
              color={colors.text}
              backgroundColor={colors.background}
              onPress={() => {}}></Icon.Button>
              </TouchableOpacity> */}
              <TouchableOpacity style={{paddingHorizontal:10,marginTop:5}} onPress = {() => {props.navigation.navigate('Profile')}}>
                <Avatar.Image
                  source={{
                    uri : 'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={30}
                  />
                </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="PharmacyDetails"
        component={CardListScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft:10,flexDirection:'row',marginTop:5}}>
              <Icon.Button
                name="ios-menu"
                size={30}
                color= {colors.text}
                backgroundColor={colors.background}
                style={{marginLeft:5,marginTop:5}}
                onPress={() => props.navigation.openDrawer()}></Icon.Button>
              </View>
            
          ),
          headerRight: () => (
            <TouchableOpacity onPress = {() => {props.navigation.navigate('Explore')}}>
              <ShoppingCartIcon />
            </TouchableOpacity>
              
          ),
        }}
        />

      <HomeStack.Screen
        name="List of Pharmacies"
        component={SearchScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft:10,flexDirection:'row',marginTop:5}}>
              <Icon.Button
                name="ios-menu"
                size={30}
                color= {colors.text}
                backgroundColor={colors.background}
                style={{marginLeft:5,marginTop:5}}
                onPress={() => props.navigation.openDrawer()}></Icon.Button>
                <View>
                  <View style={{width:100,height:50,backgroundColor:'white',flexDirection:'row',padding:5,alignItems:"center"}}>
                    <Icon name="ios-search" style={{fontSize:24, marginTop:10}}/>
                    <TextInput onSubmitEditing={() => {}} onChangeText={(value) => setMedicine(value)} returnKeyType='done' placeholder="Search Pharmacies" style={{marginTop:10,width:230,height:50,borderColor:'gray',marginLeft:10}}/>
                  </View>
                </View>
              </View>
            
          ),
          headerRight: () => (
          <View style={{flexDirection:'row', marginRight:10 ,marginTop:10}}>
            {/* <TouchableOpacity onPress = {() => {navigation.navigate('SearchScreen')}}>
            <Icon.Button
              name="ios-search"
              size={30}
              color={colors.text}
              backgroundColor={colors.background}
              onPress={() => {}}></Icon.Button>
              </TouchableOpacity> */}
              <TouchableOpacity style={{paddingHorizontal:10,marginTop:5}} onPress = {() => {props.navigation.navigate('Profile')}}>
                <Avatar.Image
                  source={{
                    uri : 'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={30}
                  />
                </TouchableOpacity>
            </View>
          ),
        }}
        />

        <HomeStack.Screen
        name="Details of Medicine"
        component={MedicineCartScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft:10,flexDirection:'row',marginTop:5}}>
              <Icon.Button
                name="ios-menu"
                size={30}
                color= {colors.text}
                backgroundColor={colors.background}
                style={{marginLeft:5,marginTop:5}}
                onPress={() => props.navigation.openDrawer()}></Icon.Button>
                {/* <View style={{width:100,height:50,backgroundColor:'white',flexDirection:'row',padding:5,alignItems:"center"}}>
                  <Icon name="ios-search" style={{fontSize:24, marginTop:10}}/>
                  <TextInput onSubmitEditing={() => {}} onChangeText={(value) => setMedicine(value)} returnKeyType='done' placeholder="Search Pharmacies" style={{marginTop:10,width:230,height:50,borderColor:'gray',marginLeft:10}}/>
                </View> */}
              </View>
            
          ),
          headerRight: () => (
          <View style={{flexDirection:'row', marginRight:10 ,marginTop:10}}>
            {/* <TouchableOpacity onPress = {() => {navigation.navigate('SearchScreen')}}>
            <Icon.Button
              name="ios-search"
              size={30}
              color={colors.text}
              backgroundColor={colors.background}
              onPress={() => {}}></Icon.Button>
              </TouchableOpacity> */}
              <TouchableOpacity style={{paddingHorizontal:10,marginTop:5}} onPress = {() => {props.navigation.navigate('Profile')}}>
                <Avatar.Image
                  source={{
                    uri : 'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={30}
                  />
                </TouchableOpacity>
            </View>
          ),
        }}
        />

<HomeStack.Screen
        name="Medicines List"
        component={SearchMedicine}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft:10,flexDirection:'row',marginTop:5}}>
              <Icon.Button
                name="ios-menu"
                size={30}
                color= {colors.text}
                backgroundColor={colors.background}
                style={{marginLeft:5,marginTop:5}}
                onPress={() => props.navigation.openDrawer()}></Icon.Button>
                <View style={{width:100,height:50,backgroundColor:'white',flexDirection:'row',padding:5,alignItems:"center"}}>
                  <Icon name="ios-search" style={{fontSize:24, marginTop:10}}/>
                  <TextInput onSubmitEditing={() => {}} onChangeText={(value) => setMedicine(value)} returnKeyType='done' placeholder="Search Pharmacies" style={{marginTop:10,width:230,height:50,borderColor:'gray',marginLeft:10}}/>
                </View>
              </View>
            
          ),
          headerRight: () => (
          <View style={{flexDirection:'row', marginRight:10 ,marginTop:10}}>
            {/* <TouchableOpacity onPress = {() => {navigation.navigate('SearchScreen')}}>
            <Icon.Button
              name="ios-search"
              size={30}
              color={colors.text}
              backgroundColor={colors.background}
              onPress={() => {}}></Icon.Button>
              </TouchableOpacity> */}
              <TouchableOpacity style={{paddingHorizontal:10,marginTop:5}} onPress = {() => {props.navigation.navigate('Profile')}}>
                <Avatar.Image
                  source={{
                    uri : 'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={30}
                  />
                </TouchableOpacity>
            </View>
          ),
        }}
        />

    </HomeStack.Navigator>
  )
  };

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
