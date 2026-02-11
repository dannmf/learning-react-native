// ============================================
// AULA 04: Template Literals
// ============================================
// Template literals usam crases (`) e ${} para interpolacao.
// Mais legivel que concatenacao com +.
// Permitem strings multilinhas e expressoes dentro de ${}.
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- Interpolacao basica com ${} --
function ExemploBasico() {
  const nome = "Carlos";
  const mensagens = 7;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Interpolacao</Text>
      <Text style={styles.texto}>{`Ola, ${nome}!`}</Text>
      <Text style={styles.texto}>{`Voce tem ${mensagens} mensagens.`}</Text>
      <Text style={styles.texto}>{`Nome em maiusculas: ${nome.toUpperCase()}`}</Text>
    </View>
  );
}

// -- Concatenacao (+) vs Template Literals --
function ExemploComparacao() {
  const produto = "Camiseta";
  const preco = 79.9;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Concatenacao vs Template</Text>
      {/* Antigo: dificil de ler */}
      <Text style={styles.texto}>
        {"Produto: " + produto + " - R$ " + preco.toFixed(2)}
      </Text>
      {/* Moderno: mais legivel */}
      <Text style={styles.texto}>
        {`Produto: ${produto} - R$ ${preco.toFixed(2)}`}
      </Text>
    </View>
  );
}

// -- Template literals em estilos dinamicos --
function ExemploEstilos() {
  const r = 33;
  const g = 150;
  const b = 243;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Estilos Dinamicos</Text>
      <View style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "#FFF" }}>{`rgb(${r}, ${g}, ${b})`}</Text>
      </View>
    </View>
  );
}

// -- Strings multilinhas --
function ExemploMultilinha() {
  const app = "MeuApp";
  const versao = "2.0";

  const sobre = `${app} v${versao}

Desenvolvido com React Native.
Exemplo de string multilinha.`;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Multilinha</Text>
      <Text style={styles.texto}>{sobre}</Text>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import StringTemplate from "./jsx_examples/04_string_template";
export default function StringTemplate() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Aula 04: Template Literals</Text>
      <ExemploBasico />
      <ExemploComparacao />
      <ExemploEstilos />
      <ExemploMultilinha />
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
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});
