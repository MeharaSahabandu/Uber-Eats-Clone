import { StyleSheet, Text, View, Image } from "react-native";

//function to display the restaurant
const RestourantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        $ ${restaurant.deliveryFee} {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

export default RestourantItem;

const styles = StyleSheet.create({
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
