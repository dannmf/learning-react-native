// ============================================
// EXERCICIO 03: Inputs e Listas
// ============================================
// Substitua os "TODO" pelo codigo correto.
// Teste importando no App.js:
//   import Exercicios03 from "./basic_components/exercises/exercicio_03_inputs_e_listas";
// ============================================

import { useState } from "react";
import { View, Text, TextInput, FlatList, ScrollView, StyleSheet } from "react-native";

// EXERCICIO 1: Crie um input que mostra o texto digitado abaixo
function Exercicio1() {
  // TODO: crie um estado com useState para armazenar o texto
  // TODO: adicione um TextInput com value, onChangeText e placeholder
  // TODO: exiba o texto digitado em um Text abaixo

  return (
    <View>
      {/* TODO: implemente aqui */}
    </View>
  );
}

// EXERCICIO 2: Renderize a lista de contatos usando FlatList
function Exercicio2() {
  const contatos = [
    { id: "1", nome: "Ana", telefone: "11 9999-0001" },
    { id: "2", nome: "Bruno", telefone: "11 9999-0002" },
    { id: "3", nome: "Carla", telefone: "11 9999-0003" },
    { id: "4", nome: "Diego", telefone: "11 9999-0004" },
  ];

  return (
    <View>
      {/* TODO: use FlatList com data, keyExtractor e renderItem
          Cada item deve mostrar nome e telefone */}
    </View>
  );
}

// EXERCICIO 3: Crie um input de busca que filtra a lista
function Exercicio3() {
  const frutas = ["Maca", "Banana", "Laranja", "Uva", "Morango", "Abacaxi", "Manga"];
  // TODO: crie um estado para o texto de busca
  // TODO: filtre as frutas com base no texto digitado
  // TODO: renderize com FlatList ou .map()

  return (
    <View>
      {/* TODO: implemente aqui */}
    </View>
  );
}

// Componente que renderiza todos (nao modifique)
export default function Exercicios03Inputs() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Exercicios 03 - Inputs e Listas</Text>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 1: Input com Estado</Text>
        <Exercicio1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 2: FlatList de Contatos</Text>
        <Exercicio2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 3: Busca com Filtro</Text>
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
  input: {
    borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 8,
    padding: 12, fontSize: 14, marginBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242" },
});
