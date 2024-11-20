import { Link, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ImageBackground, BlurView,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import getRandomindex from './RandomNumber';
import listKhodam from './listKhodam';
import { useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
export default function Hasil({route}) { 
const navigation = useNavigation();
const {text} = route.params;
const randomIndex = getRandomindex();
const randomkhodam = listKhodam[randomIndex];
const onpress =() =>{
    navigation.goBack();
  }
let [fontsLoaded] = useFonts({
    Poppins_400Regular,
});

if (!fontsLoaded) {
    return null;
}
return(
    <View style={styles.container}>
        <ImageBackground
        source={require('../assets/singa.png')}
        resizeMode="cover"
        style={styles.image}>
            <View style={{alignItems:'center', justifyContent:'center', gap:10}}>
                <View style={{alignItems:'center', flexDirection:'row', gap:10}}>
                    <Text style={{color:'white',fontSize:50,fontFamily:'Poppins_400Regular'}}>Cek</Text>
                    <Text style={{color:'red',fontSize:50,fontFamily:'Poppins_400Regular'}}>Khodam</Text>
                </View>
            <Text style={{color:'white', fontSize:20,marginBottom:20,fontFamily:'Poppins_400Regular'}}>Sudah Cek Kodam Hari Ini?</Text>
            <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
                    <View style={{borderWidth:1, borderColor:'gray',borderRadius:20,gap:10}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:20, marginHorizontal:20, marginVertical:10,fontFamily:'Poppins_400Regular'}}>Khodam {text} hari ini adalah :</Text>
                    <Text style={{color:'white', fontSize:40, marginHorizontal:20, marginVertical:10,fontFamily:'Poppins_400Regular'}}>
                        {randomkhodam}
                    </Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity 
                    style={{
                        borderWidth:1,
                        borderColor:'gray',
                        borderRadius:20,
                        alignItems:'center',
                        justifyContent:'center', 
                        marginHorizontal:20,
                        marginVertical:10,
                        height:50,
                        width:310}}
                        onPress={onpress}
                        >
                        <Text style={{color:'white', fontSize:20,fontFamily:'Poppins_400Regular'}}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        backgroundColor:'red', 
                        borderRadius:20,
                        alignItems:'center',
                        justifyContent:'center', 
                        marginBottom:20,
                        marginHorizontal:20,
                        marginVertical:10,
                        height:50,
                        width:310}}
                        onPress={onpress}
                        >
                        <Text style={{color:'white', fontSize:20,fontFamily:'Poppins_400Regular'}}>Kembali</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center',marginTop:120}}>
                <Text style={{color:'gray',fontSize:20,fontFamily:'Poppins_400Regular'}}>By Wong</Text>
            </View>
            </ImageBackground>
    </View>
);
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black',
},image:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
}
})
