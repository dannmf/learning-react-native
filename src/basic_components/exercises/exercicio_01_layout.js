// ============================================
// EXERCICIO 01: Layout com View e Flexbox
// ============================================
// Substitua os "TODO" pelo codigo correto.
// Teste importando no App.js:
//   import Exercicios01 from "./basic_components/exercises/exercicio_01_layout";
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// EXERCICIO 1: Crie 3 caixas coloridas em LINHA (flexDirection row) com flex igual
function Exercicio1() {
  // TODO: crie uma View com flexDirection "row" e 3 Views filhas
  // Cada View filha deve ter: flex 1, height 60, cores diferentes
  return null;
}

// EXERCICIO 2: Crie um layout de header + conteudo + footer
function Exercicio2() {
  // TODO: crie um layout com 3 secoes:
  // - Header: height 50, backgroundColor "#1565C0", texto "Header" centralizado (branco)
  // - Conteudo: flex 1, backgroundColor "#FAFAFA", texto "Conteudo" centralizado
  // - Footer: height 40, backgroundColor "#424242", texto "Footer" centralizado (branco)
  // Dica: o container pai precisa de height (ex: 200)
  return null;
}

// EXERCICIO 3: Centralize um "card" no meio de um container
function Exercicio3() {
  // TODO: crie uma View container com height 200 e backgroundColor "#F5F5F5"
  // Use justifyContent e alignItems para centralizar um "card" dentro
  // O card deve ter: width 150, height 80, backgroundColor "#1565C0",
  // borderRadius 8, com texto "Card" centralizado
  return null;
}

// Componente que renderiza todos (nao modifique)
export default function Exercicios01Layout() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Exercicios 01 - Layout</Text>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 1: 3 Colunas</Text>
        <Exercicio1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 2: Header/Conteudo/Footer</Text>
        <Exercicio2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 3: Centralizar Card</Text>
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
});
