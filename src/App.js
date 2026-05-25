// ============================================
// AULA:
// ============================================
// SCAFFOLD - Arquivo base para a aula
// Os alunos recebem este arquivo ANTES da aula
// ============================================

import { StyleSheet, View } from "react-native";
import Cronometro from "./04_react_hooks/cronometro_example";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./06_navigation/examples/stack_navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
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
