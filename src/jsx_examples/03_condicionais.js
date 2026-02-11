// ============================================
// AULA 03: Renderizacao Condicional
// ============================================
// 3 formas de renderizar condicionalmente no JSX:
// 1. Ternario: condicao ? <A /> : <B />
// 2. AND (&&): condicao && <Componente />
// 3. Variavel JSX: definir com if/else antes do return
// ============================================

import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

// -- Ternario: mostra UMA coisa OU OUTRA --
function ExemploTernario() {
  const [logado, setLogado] = useState(false);

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Ternario (? :)</Text>

      <Text style={styles.texto}>
        Status: {logado ? "Conectado" : "Desconectado"}
      </Text>

      {logado ? (
        <Text style={styles.sucesso}>Bem-vindo de volta!</Text>
      ) : (
        <Text style={styles.erro}>Faca login para acessar.</Text>
      )}

      <TouchableOpacity style={styles.botao} onPress={() => setLogado(!logado)}>
        <Text style={styles.textoBotao}>
          {logado ? "Sair" : "Entrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// -- AND (&&): mostra OU nao mostra --
function ExemploAnd() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Operador && </Text>

      {/* Se visivel for true, renderiza. Se false, nada aparece. */}
      {visivel && (
        <Text style={styles.destaque}>Este texto so aparece quando visivel!</Text>
      )}

      {/* CUIDADO: {0 && <Text>...</Text>} renderiza "0" na tela!
          Use sempre comparacao: {count > 0 && ...} */}

      <TouchableOpacity style={styles.botao} onPress={() => setVisivel(!visivel)}>
        <Text style={styles.textoBotao}>
          {visivel ? "Ocultar" : "Mostrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// -- Variavel JSX: para logica com muitas condicoes --
function ExemploVariavelJSX() {
  const [status, setStatus] = useState("pendente");

  // if/else ANTES do return
  let mensagem;
  if (status === "pendente") {
    mensagem = <Text style={[styles.texto, { color: "#FFA000" }]}>Pendente</Text>;
  } else if (status === "enviado") {
    mensagem = <Text style={[styles.texto, { color: "#1565C0" }]}>Enviado</Text>;
  } else {
    mensagem = <Text style={[styles.texto, { color: "#2E7D32" }]}>Entregue</Text>;
  }

  const proximoStatus = () => {
    const ordem = ["pendente", "enviado", "entregue"];
    const proximo = ordem[(ordem.indexOf(status) + 1) % ordem.length];
    setStatus(proximo);
  };

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Variavel com JSX</Text>
      {mensagem}
      <TouchableOpacity style={styles.botao} onPress={proximoStatus}>
        <Text style={styles.textoBotao}>Avancar Status</Text>
      </TouchableOpacity>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import Condicionais from "./jsx_examples/03_condicionais";
export default function Condicionais() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Aula 03: Condicionais</Text>
      <ExemploTernario />
      <ExemploAnd />
      <ExemploVariavelJSX />
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
  sucesso: { fontSize: 14, color: "#2E7D32", marginBottom: 8 },
  erro: { fontSize: 14, color: "#C62828", marginBottom: 8 },
  destaque: {
    fontSize: 14, color: "#E65100", fontWeight: "bold",
    backgroundColor: "#FFF3E0", padding: 8, borderRadius: 4, marginBottom: 8,
  },
  botao: {
    backgroundColor: "#1565C0", paddingVertical: 10, borderRadius: 8,
    alignItems: "center", marginTop: 8,
  },
  textoBotao: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
});
