// ============================================
// COMPONENTE: Text
// ============================================
// Text é o ÚNICO componente que renderiza texto
// Texto direto em View causa erro
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function TextExemplos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Text - Exemplos</Text>

      {/* EXEMPLO 1: fontSize
          Troque: 12, 16, 20, 24 */}
      <View style={styles.exemplo}>
        <Text style={{ fontSize: 12 }}>fontSize: 12</Text>
        <Text style={{ fontSize: 18 }}>fontSize: 18</Text>
        <Text style={{ fontSize: 24 }}>fontSize: 24</Text>
      </View>

      {/* EXEMPLO 2: fontWeight e fontStyle
          Troque: "normal", "bold", "italic" */}
      <View style={styles.exemplo}>
        <Text style={{ fontWeight: "bold" }}>fontWeight: bold</Text>
        <Text style={{ fontStyle: "italic" }}>fontStyle: italic</Text>
      </View>

      {/* EXEMPLO 3: textAlign
          Troque: "left", "center", "right" */}
      <View style={styles.exemplo}>
        <Text style={{ textAlign: "left" }}>left</Text>
        <Text style={{ textAlign: "center" }}>center</Text>
        <Text style={{ textAlign: "right" }}>right</Text>
      </View>

      {/* EXEMPLO 4: textTransform
          Troque: "uppercase", "lowercase", "capitalize" */}
      <View style={styles.exemplo}>
        <Text style={{ textTransform: "uppercase" }}>uppercase</Text>
        <Text style={{ textTransform: "capitalize" }}>capitalize aqui</Text>
      </View>

      {/* EXEMPLO 5: Text aninhado
          Estilos inline dentro de Text */}
      <View style={styles.exemplo}>
        <Text>
          Palavra <Text style={{ fontWeight: "bold" }}>negrito</Text> e{" "}
          <Text style={{ color: "#e53935" }}>colorida</Text>
        </Text>
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
});
