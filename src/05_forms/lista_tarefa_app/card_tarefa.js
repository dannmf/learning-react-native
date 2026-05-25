import { View, Text, StyleSheet } from "react-native";

export default function CardTarefa({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardNome}>{item.nome}</Text>
      <Text style={styles.cardPrioridade}>Prioridade: {item.prioridade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    // sombra Android
    elevation: 2,
    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  cardPrioridade: {
    fontSize: 13,
    color: "#666",
  },
});
