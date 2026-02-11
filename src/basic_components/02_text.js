// ============================================
// COMPONENTE: Text
// ============================================
// Text e o UNICO componente que renderiza texto no React Native.
// Texto direto em View causa erro.
// Text aninhado herda estilos do pai (como span na web).
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- Estilos de texto basicos --
function ExemploEstilosBasicos() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Estilos de Texto</Text>

      <Text style={{ fontSize: 12, color: "#424242" }}>fontSize: 12</Text>
      <Text style={{ fontSize: 18, color: "#424242" }}>fontSize: 18</Text>
      <Text style={{ fontSize: 24, color: "#424242" }}>fontSize: 24</Text>

      <Text style={{ fontWeight: "bold", marginTop: 8 }}>fontWeight: bold</Text>
      <Text style={{ fontStyle: "italic" }}>fontStyle: italic</Text>
      <Text style={{ color: "#1565C0" }}>color: azul</Text>
      <Text style={{ color: "#E53935" }}>color: vermelho</Text>
    </View>
  );
}

// -- textAlign e textTransform --
function ExemploAlinhamento() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Alinhamento e Transformacao</Text>

      <Text style={{ textAlign: "left" }}>textAlign: left</Text>
      <Text style={{ textAlign: "center" }}>textAlign: center</Text>
      <Text style={{ textAlign: "right" }}>textAlign: right</Text>

      <Text style={{ textTransform: "uppercase", marginTop: 8 }}>
        uppercase
      </Text>
      <Text style={{ textTransform: "capitalize" }}>texto capitalizado</Text>
      <Text style={{ textDecorationLine: "underline" }}>underline</Text>
      <Text style={{ textDecorationLine: "line-through" }}>line-through</Text>
    </View>
  );
}

// -- Text aninhado para estilizacao inline --
function ExemploAninhado() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Text Aninhado</Text>

      {/* Text dentro de Text herda estilos e permite estilos inline */}
      <Text style={{ fontSize: 14, color: "#424242" }}>
        Este texto tem uma{" "}
        <Text style={{ fontWeight: "bold" }}>palavra em negrito</Text> e uma{" "}
        <Text style={{ color: "#E53935" }}>palavra colorida</Text>.
      </Text>
    </View>
  );
}

// -- numberOfLines e selectable --
function ExemploProps() {
  const textoLongo =
    "Este e um texto muito longo que sera truncado porque usamos a prop numberOfLines para limitar a quantidade de linhas exibidas na tela do dispositivo.";

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Props Uteis</Text>

      {/* numberOfLines trunca o texto */}
      <Text style={styles.legenda}>numberOfLines={"{1}"}:</Text>
      <Text numberOfLines={1} style={styles.texto}>
        {textoLongo}
      </Text>

      <Text style={styles.legenda}>numberOfLines={"{2}"}:</Text>
      <Text numberOfLines={2} style={styles.texto}>
        {textoLongo}
      </Text>

      {/* selectable permite copiar o texto */}
      <Text style={styles.legenda}>selectable (pressione e segure):</Text>
      <Text selectable style={styles.texto}>
        Este texto pode ser selecionado!
      </Text>
    </View>
  );
}

// -- lineHeight e letterSpacing --
function ExemploEspacamento() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>5. Espacamento</Text>

      <Text style={{ lineHeight: 28, fontSize: 14, color: "#424242" }}>
        lineHeight: 28 - aumenta o espaco entre linhas. Util para textos longos
        que precisam de mais respiro visual.
      </Text>

      <Text
        style={{
          letterSpacing: 4,
          fontSize: 14,
          color: "#424242",
          marginTop: 8,
        }}
      >
        letterSpacing: 4
      </Text>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import TextExemplos from "./basic_components/02_text";
export default function TextExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componente: Text</Text>
      <ExemploEstilosBasicos />
      <ExemploAlinhamento />
      <ExemploAninhado />
      <ExemploProps />
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
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});
