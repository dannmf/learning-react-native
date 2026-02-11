// ============================================
// EXERCICIO 02: Estilizacao de Text e Estilos
// ============================================
// Substitua os "TODO" pelo codigo correto.
// Teste importando no App.js:
//   import Exercicios02 from "./basic_components/exercises/exercicio_02_estilizacao";
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// EXERCICIO 1: Estilize o texto com fontSize 18, cor azul, negrito e centralizado
function Exercicio1() {
  return (
    <View>
      {/* TODO: adicione style com fontSize 18, color "#1565C0",
          fontWeight "bold" e textAlign "center" */}
      <Text>Estilize este texto</Text>
    </View>
  );
}

// EXERCICIO 2: Crie um texto com partes em negrito e coloridas usando Text aninhado
function Exercicio2() {
  return (
    <View>
      {/* TODO: crie um Text com a frase:
          "React Native e incrivel para criar apps"
          onde "React Native" esteja em negrito e azul,
          e "incrivel" esteja em vermelho */}
      <Text style={{ fontSize: 14 }}>Implemente aqui</Text>
    </View>
  );
}

// EXERCICIO 3: Combine estilos usando array [styles.a, styles.b]
function Exercicio3() {
  return (
    <View>
      {/* TODO: aplique styles.caixa + styles.caixaVerde usando array de estilos */}
      <View>
        <Text style={{ color: "#FFF" }}>Combine os estilos</Text>
      </View>
    </View>
  );
}

// Componente que renderiza todos (nao modifique)
export default function Exercicios02Estilizacao() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Exercicios 02 - Estilizacao</Text>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 1: Estilizar Texto</Text>
        <Exercicio1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 2: Text Aninhado</Text>
        <Exercicio2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.label}>Exercicio 3: Combinar Estilos</Text>
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
  // Estilos para o exercicio 3:
  caixa: {
    padding: 16, borderRadius: 8, alignItems: "center",
  },
  caixaVerde: {
    backgroundColor: "#2E7D32",
  },
});
