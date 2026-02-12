// ============================================
// AULA 04: Template Literals
// ============================================
// Template literals usam crases (`) e ${}
// Mais legível que concatenação com +
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function StringTemplate() {
  const nome = "Carlos";
  const preco = 79.9;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Template Literals - Exemplos</Text>

      {/* EXEMPLO 1: Interpolação básica
          Use ${} para inserir variáveis */}
      <View style={styles.exemplo}>
        <Text>{`Olá, ${nome}!`}</Text>
        <Text>{`Preço: R$ ${preco.toFixed(2)}`}</Text>
      </View>

      {/* EXEMPLO 2: Comparação
          Template vs Concatenação */}
      <View style={styles.exemplo}>
        <Text>{"Antigo: " + nome + " - R$ " + preco}</Text>
        <Text>{`Moderno: ${nome} - R$ ${preco}`}</Text>
      </View>

      {/* EXEMPLO 3: Expressões
          Troque: toUpperCase(), toLowerCase() */}
      <View style={styles.exemplo}>
        <Text>{`Maiúsculas: ${nome.toUpperCase()}`}</Text>
        <Text>{`Cálculo: ${2 + 2}`}</Text>
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
