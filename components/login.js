
 import React, {useRef, useState} from 'react';
 import {Picker} from '@react-native-picker/picker';
 
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
 
 const Login = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const [selectedLanguage, setSelectedLanguage] = useState();
   const Item = Picker.Item;
   const [phone, setPhone] = React.useState('');
   const [fullname, setFullname] = React.useState('');
   const [username, setUsername] = React.useState('');
 
   const pickerRef = useRef();
   function onPressLearnMore() {}
   return (

       <View style={styles.container}>
         <Text style={styles.title}>Your Phone Number</Text>
         <Text style={styles.subText}>
           Please confirm your country code and enter your phone number{' '}
         </Text>
 
         <View style={styles.picker}>
           <Picker
             ref={pickerRef}
             selectedValue={selectedLanguage}
             onValueChange={(itemValue, itemIndex) =>
               setSelectedLanguage(itemValue)
             }>
             <Picker.apply fontSize="2" label="+93 Afghanistan" value="+93" />
             <Picker.apply label="+355 Albania" value="+355" />
             <Picker.apply label="+213 Algeria" value="+213" />
             <Picker.apply label="+1-684 American Samoa" value="+1-684" />
             <Picker.apply label="+90 Turkey " value="+90" />
             <Picker.apply label="+993 Turkmenistan" value="+993" />
           </Picker>
 
           <Text style={styles.inputTitle}>Telefon Numarası</Text>
           <TextInput
             style={styles.input}
             placeholder="Telefon Numarası"
             onChangeText={setPhone}
             value={phone}
           />
           <Text style={styles.inputTitle}>İsim</Text>
 
           <TextInput
             style={styles.input}
             placeholder="İsim-Soyisim"
             onChangeText={setFullname}
             value={fullname}
           />
           <Text style={styles.inputTitle}>Kullanıcı Adı</Text>
 
           <TextInput
             keyboardType="numeric"
             style={styles.input}
             placeholder="Kullanıcı Adı"
             onChangeText={setUsername}
             value={username}
           />
           <Pressable onPress={()=>console.log("Pressed")}>
           <View style={styles.button}>
           <Button
             title="Giriş Yap"
           
           /> 
           </View></Pressable> 
 
         </View>
           <Text>
            Telefon Numarası: {selectedLanguage+phone} 
            İsim-soyisim : {fullname}
            Kullanıcı Adı : {fullname}
           </Text>
       </View>
  
   );
 };
 
 const styles = StyleSheet.create({
   button: {
     backgroundColor: '#32CD32',
     overflow: 'hidden',
     borderRadius:25,
     color:'#ffffff',
     marginTop:20,
   },
   inputTitle: {
     fontWeight: '600',
     textAlign: 'left', // <-- the magic
     fontWeight: 'bold',
     fontSize: 12,
     marginTop: 20,
     marginLeft: 12,
     width: 200,
   },
   input: {
     borderRadius: 12,
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   container: {
     alignItems: 'center',
     textAlign: 'center',
   },
   picker: {
     fontSize: 10,
     width: 250,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   title: {
     fontWeight: '900',
     textAlign: 'center', // <-- the magic
     fontWeight: 'bold',
     fontSize: 18,
     marginTop: 50,
     width: 200,
   },
   subText: {
     fontWeight: '600',
     textAlign: 'center', // <-- the magic
     fontWeight: '200',
     fontSize: 12,
     marginTop: 10,
     width: 200,
   },
   pickerText: {
     fontWeight: '200',
     textAlign: 'center',
     fontSize: 12,
   },
 });
 
 export default Login;
 