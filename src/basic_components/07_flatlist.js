// ============================================
// COMPONENTE: FlatList
// ============================================
// FlatList renderiza listas longas com boa performance.
// Diferente de ScrollView, so renderiza itens visiveis na tela.
// Props obrigatorias: data, renderItem, keyExtractor.
// ============================================

import { View, Text, FlatList, StyleSheet } from "react-native";

// -- FlatList basico --
function ExemploBasico() {
  const dados = [
    { id: "1", nome: "React Native" },
    { id: "2", nome: "Expo" },
    { id: "3", nome: "JavaScript" },
    { id: "4", nome: "TypeScript" },
    { id: "5", nome: "Node.js" },
  ];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. FlatList Basico</Text>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemLista}>
            <Text style={styles.texto}>{item.nome}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}

// -- ListHeaderComponent, ListFooterComponent, ListEmptyComponent --
function ExemploExtras() {
  const dados = [
    { id: "1", nome: "Ana", pontos: 95 },
    { id: "2", nome: "Bruno", pontos: 87 },
    { id: "3", nome: "Carla", pontos: 92 },
  ];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Header, Footer e Separator</Text>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.linhaRanking}>
            <Text style={styles.texto}>{item.nome}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.pontos} pts</Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={{ fontWeight: "bold", color: "#FFF" }}>Ranking</Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.legenda}>Total: {dados.length} participantes</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        scrollEnabled={false}
      />
    </View>
  );
}

// -- ListEmptyComponent: quando a lista esta vazia --
function ExemploListaVazia() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Lista Vazia</Text>

      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
        ListEmptyComponent={
          <Text style={[styles.texto, { textAlign: "center", padding: 20 }]}>
            Nenhum item encontrado.
          </Text>
        }
        scrollEnabled={false}
      />
    </View>
  );
}

// -- numColumns: grid layout --
function ExemploGrid() {
  const cores = [
    { id: "1", cor: "#E53935" }, { id: "2", cor: "#1565C0" },
    { id: "3", cor: "#2E7D32" }, { id: "4", cor: "#FFA000" },
    { id: "5", cor: "#7B1FA2" }, { id: "6", cor: "#00838F" },
  ];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Grid com numColumns</Text>

      <FlatList
        data={cores}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={[styles.gridItem, { backgroundColor: item.cor }]}>
            <Text style={{ color: "#FFF", fontSize: 12 }}>{item.cor}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import FlatListExemplos from "./basic_components/07_flatlist";
export default function FlatListExemplos() {
  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <Text style={styles.titulo}>Componente: FlatList</Text>
      }
      ListFooterComponent={
        <View>
          <ExemploBasico />
          <ExemploExtras />
          <ExemploListaVazia />
          <ExemploGrid />
        </View>
      }
      style={styles.container}
    />
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
  legenda: { fontSize: 12, color: "#757575", fontStyle: "italic", marginTop: 4 },
  texto: { fontSize: 14, color: "#424242" },
  itemLista: { padding: 12, backgroundColor: "#FAFAFA", borderRadius: 4, marginBottom: 4 },
  linhaRanking: {
    flexDirection: "row", justifyContent: "space-between",
    padding: 10, backgroundColor: "#FAFAFA",
  },
  header: {
    backgroundColor: "#1565C0", padding: 10, borderRadius: 4,
    alignItems: "center", marginBottom: 4,
  },
  separador: { height: 1, backgroundColor: "#E0E0E0" },
  gridItem: {
    flex: 1, height: 60, margin: 4, borderRadius: 8,
    justifyContent: "center", alignItems: "center",
  },
});
