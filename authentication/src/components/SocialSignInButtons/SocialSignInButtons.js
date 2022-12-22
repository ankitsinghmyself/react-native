import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
const SocialSignInButtons = () => {
  const signInGoogle = () => {
    console.warn('Sign In with Google');
  };
  const signInFacebook = () => {
    console.warn('Sign In with Facebook');
  };
  const signInApple = () => {
    console.warn('Sign In with Apple');
  };
  return (
    <>
      <CustomButton
        text="Sign In with Google"
        type="PRIMARY"
        onPress={signInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Facebook"
        type="PRIMARY"
        onPress={signInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Apple"
        type="PRIMARY"
        onPress={signInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
