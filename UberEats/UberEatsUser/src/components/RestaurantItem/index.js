import { StyleSheet, Text, View, Image } from "react-native";

//function to display the restaurant
const RestourantItem = ({ restourant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restourant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restourant.name}</Text>
      <Text style={styles.subtitle}>
        $ ${restourant.deliveryFee} {restourant.minDeliveryTime}-
        {restourant.maxDeliveryTime} minutes
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
