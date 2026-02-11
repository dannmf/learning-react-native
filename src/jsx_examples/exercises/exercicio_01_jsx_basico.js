// ============================================
// EXERCICIO 01: Estrutura JSX e Expressoes
// ============================================
// Substitua os "TODO" pelo codigo correto.
// Teste importando no App.js:
//   import Exercicios01 from "./jsx_examples/exercises/exercicio_01_jsx_basico";
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// EXERCICIO 1: Retorne uma View com 2 Text: "Ola" e "Mundo"
function Exercicio1() {
  // TODO: retorne uma View com 2 Text dentro
  return null;
}

// EXERCICIO 2: Exiba o valor das variaveis usando {}
function Exercicio2() {
  const linguagem = "JavaScript";
  const ano = 2025;

  return (
    <View>
      {/* TODO: exiba linguagem e ano usando {} */}
      <Text style={styles.texto}>Linguagem: </Text>
      <Text style={styles.texto}>Ano: </Text>
    </View>
  );
}

// EXERCICIO 3: Use uma funcao para formatar o preco e exiba no JSX
function Exercicio3() {
  const preco = 49.9;

  // TODO: crie uma funcao formatarPreco que recebe um numero
  // e retorna uma string no formato "R$ XX.XX"

  return (
    <View>
      {/* TODO: chame a funcao dentro de {} */}
      <Text style={styles.texto}>Preco: </Text>
    </View>
  );
}

// Componente que renderiza todos os exercicios (nao modifique)
export default function Exercicios01() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Exercicios 01 - JSX e Expressoes</Text>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 1: View com Text</Text>
        <Exercicio1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 2: Variaveis no JSX</Text>
        <Exercicio2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 3: Funcao no JSX</Text>
        <Exercicio3 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22, fontWeight: "bold", textAlign: "center",
    marginBottom: 20, color: "#212121",
  },
  exercicio: {
    backgroundColor: "#FFF", marginHorizontal: 16, marginBottom: 16,
    padding: 16, borderRadius: 8, borderWidth: 1, borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14, fontWeight: "bold", color: "#1565C0",
    marginBottom: 8, borderBottomWidth: 1, borderBottomColor: "#E0E0E0", paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});
