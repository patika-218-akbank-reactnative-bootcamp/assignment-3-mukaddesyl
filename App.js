/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {render} from 'react-dom';
import Login from './components/login';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedLanguage, setSelectedLanguage] = useState();
  const Item = Picker.Item;
  const [phone, setPhone] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [username, setUsername] = React.useState('');
  const Stack = createNativeStackNavigator();

  const pickerRef = useRef();
  function onPressLearnMore() {}
  return (
    <SafeAreaView>
      <Login></Login>
    </SafeAreaView>
  );
};

export default App;
