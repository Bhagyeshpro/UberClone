import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
        <View style={tw`px-10`} >
          <Image
            style={{width: 100, height: 100, resizeMode: "contain"}}
            source={{uri: "https://links.papareact.com/gzs"}}
          />
        </View>
      <Text style={tw`text-red-500 px-10 `}>HomeScreen Here!</Text>
        <NavOptions navigation={navigation}/>
    </SafeAreaView>
  )
}

export default HomeScreen
