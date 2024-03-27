import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const RestourantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subtitle}>$1.99 15-30 minutes</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/*Restourant Item*/}
      <RestourantItem />
      <RestourantItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },

  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },

  subtitle: {
    color: "grey",
  },
});
