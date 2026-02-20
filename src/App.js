// ============================================
// AULA:
// ============================================
// SCAFFOLD - Arquivo base para a aula
// Os alunos recebem este arquivo ANTES da aula
// ============================================

import { View, Text, StyleSheet } from "react-native";
import ExercicioView09 from "./basic_components/exercises/view_exercises/exercicio_09";
import ExercicioView10 from "./basic_components/exercises/view_exercises/exercicio_10";
import ExercicioView01 from "./basic_components/exercises/view_exercises/exercicio_01";
import ExercicioView02 from "./basic_components/exercises/view_exercises/exercicio_02";
import ExercicioView03 from "./basic_components/exercises/view_exercises/exercicio_03";
import ExercicioView04 from "./basic_components/exercises/view_exercises/exercicio_04";
import ExercicioView05 from "./basic_components/exercises/view_exercises/exercicio_05";
import ExercicioView07 from "./basic_components/exercises/view_exercises/exercicio_07";
import ExercicioView08 from "./basic_components/exercises/view_exercises/exercicio_08";

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView10 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
