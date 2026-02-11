// ============================================
// AULA 02: Expressoes JavaScript no JSX
// ============================================
// Use chaves {} para inserir JavaScript dentro do JSX.
// Apenas EXPRESSOES funcionam (valores, variaveis, funcoes).
// Statements como if/for NAO funcionam dentro de {}.
// ============================================

import { View, Text, ScrollView, StyleSheet } from "react-native";

// -- Variaveis dentro do JSX --
function ExemploVariaveis() {
  const nome = "Maria";
  const idade = 25;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Variaveis</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      {/* Booleanos nao aparecem na tela. Para exibir, converta: */}
      <Text style={styles.texto}>Ativo: {String(true)}</Text>
    </View>
  );
}

// -- Chamadas de funcao --
function ExemploFuncoes() {
  const formatarNome = (primeiro, ultimo) => `${primeiro} ${ultimo}`;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. Funcoes</Text>
      <Text style={styles.texto}>
        Nome: {formatarNome("Joao", "Silva")}
      </Text>
      <Text style={styles.texto}>
        Maiusculas: {"react native".toUpperCase()}
      </Text>
    </View>
  );
}

// -- Operacoes matematicas --
function ExemploOperacoes() {
  const preco = 49.9;
  const quantidade = 3;

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Operacoes</Text>
      <Text style={styles.texto}>Soma: 2 + 2 = {2 + 2}</Text>
      <Text style={styles.texto}>
        Total: R$ {(preco * quantidade).toFixed(2)}
      </Text>
    </View>
  );
}

// -- Propriedades de objetos --
function ExemploObjetos() {
  const usuario = {
    nome: "Ana",
    endereco: { cidade: "Rio de Janeiro", estado: "RJ" },
    hobbies: ["Leitura", "Corrida"],
  };

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Objetos</Text>
      <Text style={styles.texto}>Nome: {usuario.nome}</Text>
      <Text style={styles.texto}>
        Local: {usuario.endereco.cidade}/{usuario.endereco.estado}
      </Text>
      <Text style={styles.texto}>
        Hobbies: {usuario.hobbies.join(", ")}
      </Text>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import ExpressoesJSX from "./jsx_examples/02_expressoes_jsx";
export default function ExpressoesJSX() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Aula 02: Expressoes no JSX</Text>
      <ExemploVariaveis />
      <ExemploFuncoes />
      <ExemploOperacoes />
      <ExemploObjetos />
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
