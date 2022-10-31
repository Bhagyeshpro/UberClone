import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Let's build Uber! DEv</Text>
        <Image source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} style={styles.image} />
        <Image source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} style={styles.image} />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: "cover",
    width: 200,
    height: 200
  }
});
