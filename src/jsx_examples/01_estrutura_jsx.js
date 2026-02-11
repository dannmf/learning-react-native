// ============================================
// AULA 01: Estrutura Basica do JSX
// ============================================
// JSX e uma extensao do JavaScript que permite escrever
// estruturas visuais semelhantes a HTML dentro do codigo.
// No React Native, usamos componentes como View e Text (nao div/span).
// ============================================

import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- Regra: todo componente deve retornar UM unico elemento raiz --
function ExemploElementoRaiz() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Elemento Raiz Unico</Text>
      <Text style={styles.texto}>Sempre envolva tudo em uma View.</Text>
      <Text style={styles.texto}>Dois elementos soltos causam erro.</Text>
    </View>
  );
}

// -- Fragment: agrupa elementos sem criar View extra --
// Duas formas: <Fragment>...</Fragment> ou <>...</>
function ExemploFragment() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Fragment</Text>
      <>
        <Text style={styles.texto}>Dentro de um Fragment.</Text>
        <Text style={styles.texto}>Sem View extra no layout.</Text>
      </>
    </View>
  );
}

// -- Tags de auto-fechamento: tags sem conteudo usam /> --
function ExemploAutoFechamento() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Auto-Fechamento</Text>
      {/* View sem conteudo: auto-fechamento */}
      <View style={styles.caixaVazia} />
      <Text style={styles.legenda}>View vazia acima usa auto-fechamento</Text>
    </View>
  );
}

// -- No JSX, atributos usam camelCase (fontSize, backgroundColor) --
function ExemploCamelCase() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Atributos em camelCase</Text>
      <View
        style={{ backgroundColor: "#E8F5E9", padding: 12, borderRadius: 8 }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }}>
          backgroundColor, fontSize, fontWeight, textAlign
        </Text>
      </View>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import EstruturaJSX from "./jsx_examples/01_estrutura_jsx";
export default function EstruturaJSX() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Aula 01: Estrutura do JSX</Text>
      <ExemploElementoRaiz />
      <ExemploFragment />
      <ExemploAutoFechamento />
      <ExemploCamelCase />
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
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
  legenda: {
    fontSize: 12,
    color: "#757575",
    fontStyle: "italic",
    marginTop: 4,
  },
  caixaVazia: { height: 40, backgroundColor: "#BBDEFB", borderRadius: 4 },
});
