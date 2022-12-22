import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, errors} = useForm();
  const onSendPressed = () => {
    console.warn('onConfirmPressed Up');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password </Text>
        <CustomInput
          name={'username'}
          placeholder={'Enter your username'}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Username is required',
            },
          }}
        />
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
        <CustomButton
          text={'Back to Sign In'}
          onPress={onSignInPressed}
          type={'TERTAIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
