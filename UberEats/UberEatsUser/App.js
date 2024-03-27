import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import RestourantItem from "./src/components/RestaurantItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/*Restourant Item*/}
      <RestourantItem title="Res 1" />
      <RestourantItem title="Res 2" />
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
});
