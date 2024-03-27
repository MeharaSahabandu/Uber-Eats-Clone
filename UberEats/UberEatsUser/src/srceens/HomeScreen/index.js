import { StyleSheet, FlatList } from "react-native";
import RestourantItem from "../../components/RestaurantItem";
import restourants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <FlatList
      data={restourants}
      renderItem={({ item }) => <RestourantItem restourant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
