import React from 'react'
import { StyleSheet, Image, Dimensions, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {width,height} = Dimensions.get('window')
export default function FullScreen({source}) {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
        <Image
            source={source}
            resizeMode='cover'
            style={styles.screen}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        width:width,
        height:height,
        position:'absolute',
        top:0,
        left:0,
        opacity:0.1
    }
})
