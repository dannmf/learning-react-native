// ============================================
// COMPONENTE: ScrollView
// ============================================
// Permite rolar conteúdo que não cabe na tela
// Para listas longas, prefira FlatList
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ScrollViewExemplos() {
  const itens = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);
  const cores = ["#e53935", "#1565c0", "#2e7d32", "#ffa000"];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ScrollView - Exemplos</Text>

      {/* EXEMPLO 1: Scroll vertical
          ScrollView dentro de View precisa de height fixo */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Vertical</Text>
        <ScrollView style={{ height: 120 }}>
          {itens.map((item) => (
            <View key={item} style={styles.item}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* EXEMPLO 2: Scroll horizontal
          horizontal + showsHorizontalScrollIndicator */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Horizontal</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cores.map((cor) => (
            <View key={cor} style={[styles.card, { backgroundColor: cor }]} />
          ))}
        </ScrollView>
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
  },
  subtitulo: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    padding: 12,
    backgroundColor: "#f5f5f5",
    marginBottom: 4,
    borderRadius: 4,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
});
