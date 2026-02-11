// ============================================
// AULA 05: Listas e o Metodo .map()
// ============================================
// .map() transforma cada item de um array em JSX.
// Cada elemento gerado DEVE ter uma prop "key" unica.
// Prefira IDs como key. Evite indice quando a lista muda de ordem.
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- .map() com array de strings --
function ExemploMapSimples() {
  const tecnologias = ["React Native", "Expo", "JavaScript"];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. .map() com Strings</Text>
      {tecnologias.map((item, indice) => (
        <Text key={indice} style={styles.texto}>
          {indice + 1}. {item}
        </Text>
      ))}
    </View>
  );
}

// -- .map() com array de objetos (use id como key) --
function ExemploMapObjetos() {
  const alunos = [
    { id: 1, nome: "Ana", nota: 9.5 },
    { id: 2, nome: "Bruno", nota: 7.8 },
    { id: 3, nome: "Carla", nota: 6.5 },
  ];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. .map() com Objetos</Text>
      {alunos.map((aluno) => (
        <View key={aluno.id} style={styles.linha}>
          <Text style={styles.texto}>{aluno.nome}</Text>
          <Text style={{ color: aluno.nota >= 7 ? "#2E7D32" : "#C62828" }}>
            {aluno.nota.toFixed(1)}
          </Text>
        </View>
      ))}
    </View>
  );
}

// -- .filter() + .map() combinados --
function ExemploFilterMap() {
  const tarefas = [
    { id: 1, titulo: "Estudar JSX", concluida: true },
    { id: 2, titulo: "Aprender Flexbox", concluida: false },
    { id: 3, titulo: "Criar projeto", concluida: true },
    { id: 4, titulo: "Fazer exercicios", concluida: false },
  ];

  const pendentes = tarefas.filter((t) => !t.concluida);
  const concluidas = tarefas.filter((t) => t.concluida);

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. .filter() + .map()</Text>

      <Text style={styles.subtitulo}>Concluidas:</Text>
      {concluidas.map((t) => (
        <Text key={t.id} style={styles.concluida}>[x] {t.titulo}</Text>
      ))}

      <Text style={styles.subtitulo}>Pendentes:</Text>
      {pendentes.map((t) => (
        <Text key={t.id} style={styles.texto}>[ ] {t.titulo}</Text>
      ))}
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import ListasEMap from "./jsx_examples/05_listas_e_map";
export default function ListasEMap() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Aula 05: Listas e .map()</Text>
      <ExemploMapSimples />
      <ExemploMapObjetos />
      <ExemploFilterMap />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22, fontWeight: "bold", textAlign: "center",
    marginBottom: 20, color: "#212121",
  },
  secao: {
    backgroundColor: "#FFF", marginHorizontal: 16, marginBottom: 16,
    padding: 16, borderRadius: 8, borderWidth: 1, borderColor: "#E0E0E0",
  },
  tituloSecao: { fontSize: 16, fontWeight: "bold", color: "#1565C0", marginBottom: 8 },
  subtitulo: { fontSize: 14, fontWeight: "bold", color: "#424242", marginTop: 8, marginBottom: 4 },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
  concluida: { fontSize: 14, color: "#2E7D32", textDecorationLine: "line-through", lineHeight: 22 },
  linha: {
    flexDirection: "row", justifyContent: "space-between",
    paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: "#E0E0E0",
  },
});
