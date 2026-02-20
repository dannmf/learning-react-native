import { StatusBar, StyleSheet, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}></View>
      <View style={styles.cardsContainer}>
        <View style={styles.greenBox}></View>
        <View style={styles.orangeBox}></View>
        <View style={styles.blueBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  sidebar: {
    backgroundColor: "gray",
    width: 80,
  },

  cardsContainer: {
    padding: 10,
    flex: 1,
    gap: 8,
  },

  greenBox: {
    backgroundColor: "green",
    flex: 1,
  },
  orangeBox: {
    backgroundColor: "orange",
    flex: 1,
  },
  blueBox: {
    backgroundColor: "blue",
    flex: 1,
  },
});
