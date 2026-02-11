// ============================================
// COMPONENTE: ScrollView
// ============================================
// ScrollView permite rolar conteudo que nao cabe na tela.
// Use para conteudo finito e previsivel (formularios, paginas).
// Para listas longas, prefira FlatList (melhor performance).
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- ScrollView vertical basico --
function ExemploVertical() {
  const itens = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`);

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Scroll Vertical</Text>

      {/* ScrollView dentro de View precisa de height fixo */}
      <ScrollView style={{ height: 150 }}>
        {itens.map((item) => (
          <View key={item} style={styles.itemLista}>
            <Text style={styles.texto}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// -- ScrollView horizontal --
function ExemploHorizontal() {
  const cores = ["#E53935", "#1565C0", "#2E7D32", "#FFA000", "#7B1FA2", "#00838F"];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Scroll Horizontal</Text>

      {/* horizontal: ativa scroll na horizontal */}
      {/* showsHorizontalScrollIndicator: oculta a barra de scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cores.map((cor) => (
          <View key={cor} style={[styles.card, { backgroundColor: cor }]}>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>{cor}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// -- contentContainerStyle vs style --
function ExemploContentContainer() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. contentContainerStyle</Text>
      <Text style={styles.legenda}>
        style: define o container externo do ScrollView.
      </Text>
      <Text style={styles.legenda}>
        contentContainerStyle: define o container interno (o conteudo).
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // style afeta o ScrollView por fora
        style={{ height: 60, backgroundColor: "#F5F5F5", borderRadius: 8 }}
        // contentContainerStyle afeta o conteudo por dentro
        contentContainerStyle={{ alignItems: "center", gap: 8, padding: 8 }}
      >
        {["A", "B", "C", "D", "E"].map((letra) => (
          <View key={letra} style={styles.circulo}>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>{letra}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// -- Quando usar ScrollView vs FlatList --
function ExemploComparacao() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. ScrollView vs FlatList</Text>

      <Text style={styles.texto}>ScrollView:</Text>
      <Text style={styles.legenda}>
        - Renderiza TODOS os filhos de uma vez
      </Text>
      <Text style={styles.legenda}>
        - Bom para conteudo fixo (formularios, paginas)
      </Text>

      <Text style={[styles.texto, { marginTop: 8 }]}>FlatList:</Text>
      <Text style={styles.legenda}>
        - Renderiza apenas os itens visiveis na tela
      </Text>
      <Text style={styles.legenda}>
        - Bom para listas longas ou dinamicas
      </Text>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import ScrollViewExemplos from "./basic_components/06_scroll_view";
export default function ScrollViewExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componente: ScrollView</Text>
      <ExemploVertical />
      <ExemploHorizontal />
      <ExemploContentContainer />
      <ExemploComparacao />
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
  legenda: { fontSize: 12, color: "#757575", fontStyle: "italic", marginBottom: 2 },
  texto: { fontSize: 14, color: "#424242" },
  itemLista: {
    padding: 12, borderBottomWidth: 1, borderBottomColor: "#E0E0E0",
    backgroundColor: "#FAFAFA",
  },
  card: {
    width: 100, height: 80, borderRadius: 8, marginRight: 8,
    justifyContent: "center", alignItems: "center",
  },
  circulo: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: "#1565C0",
    justifyContent: "center", alignItems: "center",
  },
});
