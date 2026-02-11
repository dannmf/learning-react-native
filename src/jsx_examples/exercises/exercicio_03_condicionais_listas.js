// ============================================
// EXERCICIO 03: Listas com .map()
// ============================================
// Substitua os "TODO" pelo codigo correto.
// Teste importando no App.js:
//   import Exercicios03 from "./jsx_examples/exercises/exercicio_03_condicionais_listas";
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// EXERCICIO 1: Renderize a lista de frutas usando .map()
function Exercicio1() {
  const frutas = ["Maca", "Banana", "Laranja", "Uva"];

  return (
    <View>
      {/* TODO: use .map() para renderizar cada fruta em um Text
          Lembre-se da prop key */}
    </View>
  );
}

// EXERCICIO 2: Renderize a lista de produtos mostrando nome e preco
function Exercicio2() {
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.9 },
    { id: 2, nome: "Calca", preco: 89.9 },
    { id: 3, nome: "Tenis", preco: 199.9 },
  ];

  return (
    <View>
      {/* TODO: use .map() para renderizar nome e preco de cada produto
          Use o id como key */}
    </View>
  );
}

// EXERCICIO 3: Filtre e renderize apenas numeros pares
function Exercicio3() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View>
      {/* TODO: use .filter() para pegar apenas pares,
          depois .map() para renderizar */}
    </View>
  );
}

// Componente que renderiza todos os exercicios (nao modifique)
export default function Exercicios03() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Exercicios 03 - Listas</Text>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 1: Lista de Frutas</Text>
        <Exercicio1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 2: Lista de Produtos</Text>
        <Exercicio2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 3: Filtrar Pares</Text>
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
