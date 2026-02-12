// ============================================
// COMPONENTE: Image
// ============================================
// Exibe imagens locais ou remotas
// Imagens remotas PRECISAM de width e height
// ============================================

import { View, Text, Image, StyleSheet } from "react-native";

export default function ImageExemplos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Image - Exemplos</Text>

      {/* EXEMPLO 1: Imagem remota
          URI precisa de width e height */}
      <View style={styles.exemplo}>
        <Image
          source={{ uri: "https://picsum.photos/200/100" }}
          style={{ width: 200, height: 100, borderRadius: 8 }}
        />
      </View>

      {/* EXEMPLO 2: resizeMode
          Troque: "cover", "contain", "stretch", "center" */}
      <View style={styles.exemplo}>
        <Image
          source={{ uri: "https://picsum.photos/300/150" }}
          style={{ width: "100%", height: 100, borderRadius: 8 }}
          resizeMode="cover"
        />
        <Text style={styles.legenda}>resizeMode: cover</Text>
      </View>

      {/* EXEMPLO 3: Imagem circular (avatar)
          borderRadius = width / 2 */}
      <View style={styles.exemplo}>
        <Image
          source={{ uri: "https://picsum.photos/100/100" }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={styles.legenda}>borderRadius: 40 (metade de 80)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  legenda: {
    fontSize: 12,
    color: "#757575",
    marginTop: 8,
  },
});
