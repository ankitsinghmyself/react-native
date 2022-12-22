import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Config} from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit, errors} = useForm();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('Home');
      }
    };
    checkToken();
  }, [navigation]);

  const onSignIn = data => {
    console.warn(`${Config.API_URL}/auth/login`);
    axios
      .post(`${Config.API_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      })
      .then(async response => {
        await AsyncStorage.setItem('token', response.data.access_token);
        navigation.navigate('Home');
      })
      .catch(error => {
        Alert.alert('Error', error.response.data.message);
      });
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          name={'email'}
          placeholder={'Email'}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Email is required',
            },
          }}
        />
        <CustomInput
          name={'password'}
          placeholder={'Password'}
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />
        <CustomButton text="Sign In" onPress={handleSubmit(onSignIn)} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPassword}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Sign Up"
          type="TERTIARY"
          onPress={onSignUp}
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 400,
    maxHeight: 200,
  },
});
