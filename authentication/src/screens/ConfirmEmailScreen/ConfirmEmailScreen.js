import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, errors} = useForm();
  const onConfirmPressed = () => {
    console.warn('onConfirmPressed Up');

    navigation.navigate('Home');
  };
  const onResendCode = () => {
    console.warn(' onResendCode');
  };
  const onSignInPressed = () => {
    console.warn(' onSignInPressed');

    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email </Text>
        <CustomInput
          name={'code'}
          placeholder={'Enter your Confirmation Code'}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Code is required',
            },
          }}
        />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton
          text={'Resend Code'}
          onPress={onResendCode}
          type={'SECONDARY'}
        />

        <CustomButton
          text={'Back to Sign In'}
          onPress={onSignInPressed}
          type={'TERTAIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#051C60',
  },
  text: {
    fontSize: 14,
    color: '#051C60',
    marginTop: 20,
  },
  link: {
    color: '#fdb075',
    fontWeight: 'bold',
  },
});
