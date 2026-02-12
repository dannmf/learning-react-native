// ============================================
// AULA 03: Renderizacao Condicional
// ============================================
// Ternário: condicao ? <A /> : <B />
// AND (&&): condicao && <Componente />
// ============================================

import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Condicionais() {
  const [logado, setLogado] = useState(false);
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Condicionais - Exemplos</Text>

      {/* EXEMPLO 1: Ternário (? :)
          Troque: true/false para ver o efeito */}
      <View style={styles.exemplo}>
        <Text>Status: {logado ? "Logado" : "Deslogado"}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setLogado(!logado)}
        >
          <Text style={styles.textoBotao}>
            {logado ? "Sair" : "Entrar"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* EXEMPLO 2: Operador &&
          Mostra OU não mostra */}
      <View style={styles.exemplo}>
        {visivel && <Text style={styles.destaque}>Texto visível!</Text>}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setVisivel(!visivel)}
        >
          <Text style={styles.textoBotao}>
            {visivel ? "Ocultar" : "Mostrar"}
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
  destaque: {
    padding: 8,
    backgroundColor: "#fff3e0",
    borderRadius: 4,
    marginBottom: 8,
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#4285f4",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
