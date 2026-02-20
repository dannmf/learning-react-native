import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.textStyle}>Vermelho</Text>
      </View>

      <View style={styles.blueBox}>
        <Text style={styles.textStyle}>Azul</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Verde</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    alignSelf: "stretch",
    height: 80,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    alignSelf: "stretch",
    height: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    alignSelf: "stretch",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
