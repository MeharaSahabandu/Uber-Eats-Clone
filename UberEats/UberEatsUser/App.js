import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import RestourantItem from "./src/components/RestaurantItem";
import restourants from "./assets/data/restaurants.json";

export default function App() {
  return (
    <View style={styles.container}>
      {/*Restourant Item*/}
      <FlatList
        data={restourants}
        renderItem={({ item }) => <RestourantItem restourant={item} />}
        showsVerticalScrollIndicator={false}
      />
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
    paddingVertical: 30,
  },
});
