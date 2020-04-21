import React, { memo, useState } from 'react';
import { AsyncStorage,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import DatePicker from 'react-native-datepicker'
import { StatusBar } from 'react-native';

import HttpExample from '../models/http';

const LoginScreen = ({ navigation }) => {
  const [start, setStart] = useState({ value: '', error: '' });
  const [end, setEnd] = useState({ value: '', error: '' });
  const [date, setDate] = useState({ value: '', error: '' });
  state = {
    'name': 'nnnnn'
 }
  const _onLoginPressed = () => {
   
    AsyncStorage.setItem('start', 'start.value');
    AsyncStorage.setItem('end', 'end.value');
    AsyncStorage.setItem('date', 'date.value');
    var x='';
    AsyncStorage.getItem('start').then((value) =>{x=value;});
    console.log(x);
    // console.log(AsyncStorage.getItem('end'));
    // console.log(AsyncStorage.getItem('date'));
   navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

{/*     
<HttpExample/> */}

      <TextInput
        label="Start"
        returnKeyType="next"
        value={start.value}
        onChangeText={text => setStart({ value: text, error: '' })}
        error={!!start.error}
        errorText={start.error}
        autoCapitalize="none"
      
       
      />

      <TextInput
        label="End"
        returnKeyType="next"
        value={end.value}
        onChangeText={text => setEnd({ value: text, error: '' })}
        error={!!end.error}
        errorText={end.error}
        autoCapitalize="none"
      
       
      />

<DatePicker
        style={{width: 300, backgroundColor: theme.colors.surface,marginTop:25,marginBottom:25}}
        date={date.value}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => setDate({ value: date, error: '' })}
      />

      


      
      <Button mode="contained" onPress={_onLoginPressed}>
        Search
      </Button>

      
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
