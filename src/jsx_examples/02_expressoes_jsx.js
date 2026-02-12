// ============================================
// AULA 02: Expressoes JavaScript no JSX
// ============================================
// Use chaves {} para inserir JavaScript no JSX
// Apenas expressões funcionam (não if/for)
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function ExpressoesJSX() {
  const nome = "Maria";
  const idade = 25;
  const preco = 49.9;

  const usuario = {
    nome: "Ana",
    cidade: "Rio de Janeiro",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Expressões JSX - Exemplos</Text>

      {/* EXEMPLO 1: Variáveis
          Coloque variáveis dentro de {} */}
      <View style={styles.exemplo}>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
      </View>

      {/* EXEMPLO 2: Funções
          Chame funções dentro de {} */}
      <View style={styles.exemplo}>
        <Text>Maiúsculas: {nome.toUpperCase()}</Text>
        <Text>Soma: {2 + 2}</Text>
      </View>

      {/* EXEMPLO 3: Operações
          Troque: +, -, *, /, toFixed(2) */}
      <View style={styles.exemplo}>
        <Text>Preço: R$ {preco.toFixed(2)}</Text>
        <Text>Dobro: R$ {(preco * 2).toFixed(2)}</Text>
      </View>

      {/* EXEMPLO 4: Objetos
          Acesse propriedades com . */}
      <View style={styles.exemplo}>
        <Text>{usuario.nome}</Text>
        <Text>{usuario.cidade}</Text>
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
