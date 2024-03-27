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
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restourant.name}</Text>
          <Text style={styles.subtitle}>
            $ {restourant.deliveryFee} &#8226; {restourant.minDeliveryTime}-
            {restourant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restourant.rating}</Text>
        </View>
      </View>
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

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 35,
    height: 35,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
