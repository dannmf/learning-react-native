// ============================================
// COMPONENTE: View
// ============================================
// View e o container fundamental do React Native (como div na web).
// Usa Flexbox para layout. Padrao: flexDirection "column".
// Nao renderiza texto - use Text para isso.
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- flexDirection: column (padrao) vs row --
function ExemploFlexDirection() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. flexDirection</Text>

      <Text style={styles.legenda}>column (padrao):</Text>
      <View style={{ flexDirection: "column", gap: 4 }}>
        <View style={styles.caixaVermelha}>
          <Text style={styles.textoCaixa}>1</Text>
        </View>
        <View style={styles.caixaAzul}>
          <Text style={styles.textoCaixa}>2</Text>
        </View>
        <View style={styles.caixaVerde}>
          <Text style={styles.textoCaixa}>3</Text>
        </View>
      </View>

      <Text style={styles.legenda}>row:</Text>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View style={styles.caixaVermelha}>
          <Text style={styles.textoCaixa}>1</Text>
        </View>
        <View style={styles.caixaAzul}>
          <Text style={styles.textoCaixa}>2</Text>
        </View>
        <View style={styles.caixaVerde}>
          <Text style={styles.textoCaixa}>3</Text>
        </View>
      </View>
    </View>
  );
}

// -- justifyContent: alinha no eixo principal --
function ExemploJustifyContent() {
  const valores = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. justifyContent</Text>
      {valores.map((valor) => (
        <View key={valor}>
          <Text style={styles.legenda}>{valor}:</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: valor,
              backgroundColor: "#F5F5F5",
              padding: 4,
              borderRadius: 4,
            }}
          >
            <View style={styles.caixaPequena} />
            <View style={styles.caixaPequena} />
            <View style={styles.caixaPequena} />
          </View>
        </View>
      ))}
    </View>
  );
}

// -- alignItems: alinha no eixo cruzado --
function ExemploAlignItems() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. alignItems</Text>

      <Text style={styles.legenda}>flex-start:</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          height: 60,
          backgroundColor: "#F5F5F5",
          borderRadius: 4,
        }}
      >
        <View style={[styles.caixaPequena, { height: 20 }]} />
        <View style={[styles.caixaPequena, { height: 40 }]} />
        <View style={[styles.caixaPequena, { height: 30 }]} />
      </View>

      <Text style={styles.legenda}>center:</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          backgroundColor: "#F5F5F5",
          borderRadius: 4,
        }}
      >
        <View style={[styles.caixaPequena, { height: 20 }]} />
        <View style={[styles.caixaPequena, { height: 40 }]} />
        <View style={[styles.caixaPequena, { height: 30 }]} />
      </View>

      <Text style={styles.legenda}>stretch (padrao, sem height fixo):</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          height: 60,
          backgroundColor: "#F5F5F5",
          borderRadius: 4,
          gap: 4,
        }}
      >
        <View
          style={{ flex: 1, backgroundColor: "#1565C0", borderRadius: 4 }}
        />
        <View
          style={{ flex: 1, backgroundColor: "#1565C0", borderRadius: 4 }}
        />
        <View
          style={{ flex: 1, backgroundColor: "#1565C0", borderRadius: 4 }}
        />
      </View>
    </View>
  );
}

// -- flex: proporcao de espaco --
function ExemploFlex() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. flex (proporcao)</Text>
      <View style={{ flexDirection: "row", height: 50, gap: 4 }}>
        {/* flex 1 = 25%, flex 2 = 50%, flex 1 = 25% */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#E53935",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.textoCaixa}>1</Text>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "#1565C0",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.textoCaixa}>2</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#2E7D32",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.textoCaixa}>1</Text>
        </View>
      </View>
    </View>
  );
}

// -- padding, margin, bordas --
function ExemploEspacamento() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>5. Padding, Margin e Bordas</Text>

      {/* Margin = espaco externo, Padding = espaco interno */}
      <View
        style={{
          backgroundColor: "#BBDEFB",
          padding: 16,
          marginBottom: 8,
          borderRadius: 4,
        }}
      >
        <Text style={styles.texto}>padding: 16 (espaco interno)</Text>
      </View>

      <View
        style={{
          backgroundColor: "#C8E6C9",
          marginHorizontal: 20,
          padding: 12,
          borderRadius: 4,
          marginBottom: 8,
        }}
      >
        <Text style={styles.texto}>marginHorizontal: 20 (espaco externo)</Text>
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: "#1565C0",
          borderRadius: 12,
          padding: 12,
        }}
      >
        <Text style={styles.texto}>borderWidth, borderColor, borderRadius</Text>
      </View>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import ViewExemplos from "./basic_components/01_view";
export default function ViewExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componente: View</Text>
      <ExemploFlexDirection />
      <ExemploJustifyContent />
      <ExemploAlignItems />
      <ExemploFlex />
      <ExemploEspacamento />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  secao: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
  },
  legenda: {
    fontSize: 12,
    color: "#757575",
    fontStyle: "italic",
    marginTop: 8,
    marginBottom: 4,
  },
  texto: { fontSize: 14, color: "#424242" },
  textoCaixa: { color: "#FFF", fontWeight: "bold", fontSize: 12 },
  caixaVermelha: {
    backgroundColor: "#E53935",
    padding: 8,
    borderRadius: 4,
    width: 40,
    alignItems: "center",
  },
  caixaAzul: {
    backgroundColor: "#1565C0",
    padding: 8,
    borderRadius: 4,
    width: 40,
    alignItems: "center",
  },
  caixaVerde: {
    backgroundColor: "#2E7D32",
    padding: 8,
    borderRadius: 4,
    width: 40,
    alignItems: "center",
  },
  caixaPequena: {
    width: 30,
    height: 30,
    backgroundColor: "#1565C0",
    borderRadius: 4,
    margin: 2,
  },
});
