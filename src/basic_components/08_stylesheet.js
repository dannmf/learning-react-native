// ============================================
// COMPONENTE: StyleSheet
// ============================================
// StyleSheet.create() é a forma recomendada
// Melhor performance e organização
// ============================================

import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StyleSheetExemplos() {
  const [ativo, setAtivo] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>StyleSheet - Exemplos</Text>

      {/* EXEMPLO 1: StyleSheet vs inline
          StyleSheet é mais eficiente */}
      <View style={styles.exemplo}>
        <View style={{ backgroundColor: "#fff3e0", padding: 10, marginBottom: 8 }}>
          <Text>Inline (menos eficiente)</Text>
        </View>
        <View style={styles.box}>
          <Text>StyleSheet (recomendado)</Text>
        </View>
      </View>

      {/* EXEMPLO 2: Combinando estilos
          Use array [...] */}
      <View style={styles.exemplo}>
        <View style={[styles.box, styles.boxDestacado]}>
          <Text>Estilos combinados</Text>
        </View>
      </View>

      {/* EXEMPLO 3: Estilos condicionais
          ativo && styles.ativo */}
      <View style={styles.exemplo}>
        <TouchableOpacity
          style={[styles.botao, ativo && styles.botaoAtivo]}
          onPress={() => setAtivo(!ativo)}
        >
          <Text style={styles.textoBotao}>
            {ativo ? "Ativo" : "Inativo"}
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "#e8f5e9",
    padding: 10,
    borderRadius: 4,
  },
  boxDestacado: {
    backgroundColor: "#4285f4",
    borderWidth: 2,
    borderColor: "#1565c0",
  },
  botao: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderWidth: 2,
    borderColor: "#4285f4",
  },
  botaoAtivo: {
    backgroundColor: "#4285f4",
  },
  textoBotao: {
    fontWeight: "bold",
    color: "#333",
  },
});
