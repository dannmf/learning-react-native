// ============================================
// EXERCICIO 02: Condicionais e Template Literals
// ============================================
// Substitua os "TODO" pelo codigo correto.
// Teste importando no App.js:
//   import Exercicios02 from "./jsx_examples/exercises/exercicio_02_expressoes";
// ============================================

import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

// EXERCICIO 1: Use ternario para exibir "Aberto" ou "Fechado"
function Exercicio1() {
  const [aberto, setAberto] = useState(false);

  return (
    <View>
      {/* TODO: use ternario para exibir "Aberto" ou "Fechado" */}
      <Text style={styles.texto}>Status: </Text>

      <TouchableOpacity style={styles.botao} onPress={() => setAberto(!aberto)}>
        <Text style={styles.textoBotao}>Alternar</Text>
      </TouchableOpacity>
    </View>
  );
}

// EXERCICIO 2: Use && para mostrar uma mensagem apenas quando visivel
function Exercicio2() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View>
      {/* TODO: use && para renderizar um Text "Mensagem secreta!" quando visivel */}

      <TouchableOpacity style={styles.botao} onPress={() => setVisivel(!visivel)}>
        <Text style={styles.textoBotao}>{visivel ? "Ocultar" : "Mostrar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

// EXERCICIO 3: Use template literal para montar uma frase
function Exercicio3() {
  const cidade = "Curitiba";
  const temperatura = 22;

  return (
    <View>
      {/* TODO: use template literal para exibir:
          "Hoje em Curitiba a temperatura e de 22 graus" */}
      <Text style={styles.texto}></Text>
    </View>
  );
}

// Componente que renderiza todos os exercicios (nao modifique)
export default function Exercicios02() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Exercicios 02 - Condicionais e Templates</Text>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 1: Ternario</Text>
        <Exercicio1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 2: Operador &&</Text>
        <Exercicio2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 3: Template Literal</Text>
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
  botao: {
    backgroundColor: "#1565C0", paddingVertical: 10, borderRadius: 8,
    alignItems: "center", marginTop: 8,
  },
  textoBotao: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
});
