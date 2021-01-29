import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, TextInput, } from 'react-native';
import image from './bg.png';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image}>
       <Text style={styles.title}>BMI Calculator</Text>

      <View style={styles.innerContainer}>  
        

            <TextInput 
               style={styles.textInput}  
               placeholder = "Height"
               keyboardType="numeric"
               value = {height}
               onChangeText={
                text=> setHeight(text)
              }
            />
            <TextInput 
               style={styles.textInput}  
               placeholder = "Weight"
               keyboardType="numeric"
               value = {weight}
               onChangeText={
                text=> setWeight(text)
              }
            />

      </View>
      <TouchableOpacity 
      onPress={() => {
        let message = (weight/(height*height)).toFixed(2)
        setMessage(message)
        if (message <= 18.5){
          setAnswer('Underweight')
        }else if(message <= 25){
          setAnswer('Normal')
        }else if(message <= 30){
          setAnswer('Overweight ')
        }else{
          setAnswer('Obese ')
        }
      }
      }
      >
      <Text style={styles.title}>Calculate</Text>
      </TouchableOpacity>
      

      <Text style={styles.textbmi}>{message}</Text>
      <Text style={styles.textbmi}>{answer}</Text>



    </ImageBackground>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
    textAlign:'center',
    padding:15,

  },
  innerContainer:{  
    // flex: 1,  
     width: "100%",  
     flexDirection: "row",  
     alignItems: "center",
 },  
 textInput:{
  width: "50%",
  height:80,  
  fontSize: 22,
  color: "yellow",
 },
 textbmi:{

  fontSize: 22,
  color: "yellow",
  fontWeight: "bold",
  textAlign:'center',

 }
});
