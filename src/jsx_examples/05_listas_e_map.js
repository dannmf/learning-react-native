// ============================================
// AULA 05: Listas e o Metodo .map()
// ============================================
// .map() transforma array em JSX
// Cada elemento PRECISA de uma key única
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function ListasEMap() {
  const frutas = ["Maçã", "Banana", "Laranja"];

  const alunos = [
    { id: 1, nome: "Ana", nota: 9.5 },
    { id: 2, nome: "Bruno", nota: 7.8 },
    { id: 3, nome: "Carla", nota: 6.5 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listas e .map() - Exemplos</Text>

      {/* EXEMPLO 1: .map() com strings
          Cada item precisa de key */}
      <View style={styles.exemplo}>
        {frutas.map((fruta, indice) => (
          <Text key={indice}>
            {indice + 1}. {fruta}
          </Text>
        ))}
      </View>

      {/* EXEMPLO 2: .map() com objetos
          Use id como key */}
      <View style={styles.exemplo}>
        {alunos.map((aluno) => (
          <View key={aluno.id} style={styles.linha}>
            <Text>{aluno.nome}</Text>
            <Text style={{ fontWeight: "bold" }}>{aluno.nota}</Text>
          </View>
        ))}
      </View>

      {/* EXEMPLO 3: .filter() + .map()
          Filtre antes de mapear */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Aprovados (nota ≥ 7):</Text>
        {alunos
          .filter((a) => a.nota >= 7)
          .map((a) => (
            <Text key={a.id}>✓ {a.nome}</Text>
          ))}
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
  subtitulo: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
});
