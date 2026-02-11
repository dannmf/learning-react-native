// ============================================
// COMPONENTE: StyleSheet
// ============================================
// StyleSheet.create() e a forma recomendada de definir estilos.
// Vantagens: performance (validado uma vez), organizacao e auto-complete.
// Declare FORA do componente para evitar recriacao a cada render.
// ============================================

import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

// -- Por que usar StyleSheet.create em vez de objetos inline --
function ExemploInlineVsStyleSheet() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Inline vs StyleSheet</Text>

      {/* Inline: recria o objeto a cada render */}
      <View style={{ backgroundColor: "#FFF3E0", padding: 10, borderRadius: 4, marginBottom: 8 }}>
        <Text style={{ fontSize: 14 }}>Estilo inline (funciona, mas menos eficiente)</Text>
      </View>

      {/* StyleSheet: validado e criado uma unica vez */}
      <View style={styles.exemploBox}>
        <Text style={styles.texto}>StyleSheet.create (recomendado)</Text>
      </View>
    </View>
  );
}

// -- Combinando estilos com array --
function ExemploCombinacao() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Combinando Estilos</Text>

      {/* Array de estilos: o ultimo sobrescreve propriedades iguais */}
      <View style={[styles.caixa, styles.caixaDestacada]}>
        <Text style={styles.textoClaro}>styles.caixa + styles.caixaDestacada</Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "#2E7D32" }]}>
        <Text style={styles.textoClaro}>styles.caixa + estilo inline</Text>
      </View>
    </View>
  );
}

// -- Estilos condicionais --
function ExemploCondicional() {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Estilos Condicionais</Text>

      {/* selecionado && styles.ativo so aplica se selecionado for true */}
      <TouchableOpacity
        style={[styles.botao, selecionado && styles.botaoAtivo]}
        onPress={() => setSelecionado(!selecionado)}
      >
        <Text style={[styles.textoBotao, selecionado && { color: "#FFF" }]}>
          {selecionado ? "Selecionado" : "Nao selecionado"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// -- position: absolute vs relative --
function ExemploPosicionamento() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Posicionamento</Text>

      {/* position relative e o padrao */}
      <View style={{ position: "relative", width: 100, height: 100, backgroundColor: "#E3F2FD", borderRadius: 8 }}>
        <Text style={{ padding: 4 }}>Base</Text>

        {/* position absolute posiciona em relacao ao pai relativo */}
        <View style={{
          position: "absolute", top: -5, right: -5,
          backgroundColor: "#E53935", width: 24, height: 24,
          borderRadius: 12, justifyContent: "center", alignItems: "center",
        }}>
          <Text style={{ color: "#FFF", fontSize: 12, fontWeight: "bold" }}>3</Text>
        </View>
      </View>
      <Text style={styles.legenda}>
        Badge com position absolute no canto.
      </Text>
    </View>
  );
}

// -- StyleSheet.hairlineWidth --
function ExemploHairline() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>5. hairlineWidth</Text>
      <Text style={styles.texto}>Linha fina do dispositivo:</Text>
      <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#424242", marginVertical: 8 }} />
      <Text style={styles.legenda}>
        StyleSheet.hairlineWidth = menor linha visivel na tela.
      </Text>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import StyleSheetExemplos from "./basic_components/08_stylesheet";
export default function StyleSheetExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>StyleSheet.create()</Text>
      <ExemploInlineVsStyleSheet />
      <ExemploCombinacao />
      <ExemploCondicional />
      <ExemploPosicionamento />
      <ExemploHairline />
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
  legenda: { fontSize: 12, color: "#757575", fontStyle: "italic", marginTop: 4 },
  texto: { fontSize: 14, color: "#424242" },
  textoClaro: { color: "#FFF", fontSize: 14 },
  exemploBox: {
    backgroundColor: "#E8F5E9", padding: 10, borderRadius: 4,
  },
  caixa: {
    padding: 12, borderRadius: 8, marginBottom: 8,
    backgroundColor: "#1565C0",
  },
  caixaDestacada: {
    backgroundColor: "#E53935",
    borderWidth: 2,
    borderColor: "#B71C1C",
  },
  botao: {
    padding: 12, borderRadius: 8, alignItems: "center",
    backgroundColor: "#E0E0E0", borderWidth: 2, borderColor: "#1565C0",
  },
  botaoAtivo: {
    backgroundColor: "#1565C0",
  },
  textoBotao: { fontWeight: "bold", fontSize: 14, color: "#1565C0" },
});
