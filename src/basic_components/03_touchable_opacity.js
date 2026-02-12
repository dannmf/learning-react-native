// ============================================
// COMPONENTE: TouchableOpacity
// ============================================
// Detecta toques e diminui opacidade
// Componente mais comum para botões
// ============================================

import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function TouchableExemplos() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TouchableOpacity - Exemplos</Text>

      {/* EXEMPLO 1: onPress
          Executado ao tocar */}
      <View style={styles.exemplo}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => Alert.alert("Toque", "Você tocou!")}
        >
          <Text style={styles.textoBotao}>Toque aqui</Text>
        </TouchableOpacity>
      </View>

      {/* EXEMPLO 2: activeOpacity
          Troque: 0.2, 0.5, 0.8 (padrão: 0.2) */}
      <View style={styles.exemplo}>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Text style={styles.textoBotao}>activeOpacity: 0.7</Text>
        </TouchableOpacity>
      </View>

      {/* EXEMPLO 3: Contador com useState
          Clique para incrementar */}
      <View style={styles.exemplo}>
        <Text style={styles.contador}>{contador}</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => setContador(contador - 1)}
          >
            <Text style={styles.textoBotao}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.textoBotao}>+1</Text>
          </TouchableOpacity>
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
  botao: {
    backgroundColor: "#4285f4",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  contador: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
});
