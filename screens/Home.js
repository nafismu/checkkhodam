import { ImageBackground, StyleSheet, Text,TextInput,TouchableOpacity,View } from "react-native"
import React, { useState } from 'react';
import { BlurView } from "expo-blur";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
export default function Home({navigation}) {
    const [randomItem, setRandomItem] = useState('');
    // const navigation = useNavigation();
    const [text, setText] = useState('');
    const getRandomItem = () => {
        const randomIndex = generateRandomNumber(listKhodam);
        setRandomItem(listKhodam[randomIndex]);
    };

    const handlePress = () => {
        getRandomItem();
        navigation.navigate('Hasil',{text});
    };
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
                    <Text style={{color:'white', fontSize:20,marginBottom:120,fontFamily:'Poppins_400Regular'}}>Sudah Cek Kodam Hari Ini?</Text>
                <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
                    <BlurView intensity={20}  style={{borderRadius:30}}>
                    <View style={{borderWidth:1, borderColor:'gray',borderRadius:20,gap:10}}>
                    <TextInput
                    style={{
                        borderWidth:2,
                        borderColor:'white',
                        marginHorizontal:20,
                        marginVertical:10,
                        marginTop:20,
                        width:310,
                        color:'white', 
                        borderRadius:20,
                        padding:10}}
                    placeholder="Masukkan Nama Kamu"
                    placeholderTextColor={'white'}
                    onChangeText={newText =>setText(newText)}
                    value={text}
                    /> 
                    <TouchableOpacity 
                    style={{
                        backgroundColor:'red', 
                        borderRadius:20,
                        alignItems:'center',
                        justifyContent:'center', 
                        marginBottom:20,
                        marginHorizontal:20,
                        marginVertical:10,
                        height:50}}
                        onPress={() => navigation.navigate('Hasil', {text})}
                        >
                        <Text style={{color:'white', fontSize:20,fontFamily:'Poppins_400Regular'}}>Cek</Text>
                    </TouchableOpacity>
                    </View>
                </BlurView>
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