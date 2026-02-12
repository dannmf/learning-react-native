// ============================================
// COMPONENTE: View
// ============================================
// View é o container básico do React Native
// Equivalente à <div> na web
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function ViewExemplos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View - Exemplos</Text>

      {/* EXEMPLO 1: flexDirection
          Troque: "column" por "row" */}
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "column", gap: 8 }}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>

      {/* EXEMPLO 2: justifyContent
          Troque: "center" por "flex-start", "flex-end", "space-between" */}
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 8 }}>
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>

      {/* EXEMPLO 3: alignItems
          Troque: "center" por "flex-start", "flex-end", "stretch" */}
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "row", alignItems: "center", height: 80 }}>
          <View style={[styles.box, { height: 30 }]} />
          <View style={[styles.box, { height: 50 }]} />
        </View>
      </View>

      {/* EXEMPLO 4: flex (proporção)
          Troque os valores de flex: 1, 2, 3 */}
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={[styles.box, { flex: 1 }]} />
          <View style={[styles.box, { flex: 2 }]} />
        </View>
      </View>

      {/* EXEMPLO 5: padding e margin
          Troque os valores: 0, 10, 20, 30 */}
      <View style={styles.exemplo}>
        <View style={{ backgroundColor: "#ddd", padding: 20 }}>
          <View style={[styles.box, { margin: 10 }]} />
        </View>
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
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 4,
  },
});
