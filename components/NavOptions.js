import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "948",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },

]

const NavOptions = () => {

  const navigation = useNavigation();
  return (
    <View>
      {/* Flatlist - Render the newest item and update it quickly */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}

            style={tw`p-4 pl-4 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
              <Image
                style={{ width: 100, height: 100, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text style={tw`mt-3 text-lg font-semibold`}>{item.title}</Text>
              <AntDesign
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright" size={23} color="white" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default NavOptions