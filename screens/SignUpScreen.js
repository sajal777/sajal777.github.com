import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    mobile: '',
    check_textInputChange: false,
    secureTextEntry: true,
    check_mobile_len: false,
    isValidUser: true,
    isValidmobile: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  const textInputChange = (val) => {
    let rjxMail = /^[^]+@[^]+\.[a-z]{2,3}$/;
    let mailValid = val.match(rjxMail);
    if (mailValid) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const mobile_change = (val) => {
    if (val.trim().length === 10) {
      setData({
        ...data,
        mobile: val,
        check_mobile_len: true,
        isValidmobile: true,
      });
    } else {
      setData({
        ...data,
        mobile: val,
        check_mobile_len: false,
        isValidmobile: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const SignUp = async () => {

    const regis = await fetch('https://mr-medicine-man.herokuapp.com/api/registration', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userName": "sajal3",
      "userEmail": "saxena@gmail.com",
      "userPassword": "12345",
      "userPhoneNo": "1234567899"
    })
  })
  .then(response => response.text())
   .then((response) => {
       console.log(response)
  }).catch(err => console.log(err))

}


    // console.log("#################################");
    // console.log(regis.body());


    // return fetch('https://frozen-anchorage-64305.herokuapp.com/api/')
    // .then((response) => response.json())
    // .then((json) => {
    //   return json.movies;
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // const response =await fetch('https://frozen-anchorage-64305.herokuapp.com/api/');
    // const result = await response;
    // console.log(result);
  
    // return fetch('https://frozen-anchorage-64305.herokuapp.com/api/')
    //     .then(response => response.text())
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch(err => console.log(err))


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <ScrollView>
          <Text style={[styles.text_footer, {color: colors.text}]}>
            Full Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Full Name"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                color: colors.text,
              },
            ]}>
            Mobile Number
          </Text>
          <View style={styles.action}>
            <Feather name="phone" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Mobie  number"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(val) => mobile_change(val)}
            />
            {data.check_mobile_len ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidmobile ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Invalid Number</Text>
            </Animatable.View>
          )}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                color: colors.text,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Enter email in proper format</Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text
              style={[
                styles.color_textPrivate,
                {fontWeight: 'bold'},
                {
                  color: colors.text,
                },
              ]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text
              style={[
                styles.color_textPrivate,
                {fontWeight: 'bold'},
                {
                  color: colors.text,
                },
              ]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => SignUp()}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#009387',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 4 : 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
