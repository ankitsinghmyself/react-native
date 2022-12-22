import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Axios} from 'react-native-axios/lib/axios';
import {Config} from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation();
  // const axios = Axios.create({
  //   baseURL: Config.API_URL,
  //   headers: {
  //     Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
  //   },
  // });
  const onSignOut = () => {
    AsyncStorage.removeItem('token');
    navigation.navigate('SignIn');
  };

  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <CustomButton text="Sign Out" title="Sign Out" onPress={onSignOut} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#051C60',
  },
});
