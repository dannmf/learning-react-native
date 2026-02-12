// ============================================
// AULA 01: Estrutura Basica do JSX
// ============================================
// JSX permite escrever estruturas visuais no código
// Sempre retorna UM elemento raiz
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function EstruturaJSX() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estrutura JSX - Exemplos</Text>

      {/* EXEMPLO 1: Elemento raiz único
          Tudo deve estar dentro de uma View */}
      <View style={styles.exemplo}>
        <Text>Linha 1</Text>
        <Text>Linha 2</Text>
      </View>

      {/* EXEMPLO 2: Fragment (<>...</>)
          Agrupa elementos sem criar View extra */}
      <View style={styles.exemplo}>
        <>
          <Text>Com Fragment</Text>
          <Text>Sem View adicional</Text>
        </>
      </View>

      {/* EXEMPLO 3: Auto-fechamento
          Tags vazias usam /> */}
      <View style={styles.exemplo}>
        <View style={styles.box} />
        <Text>Box vazia acima</Text>
      </View>

      {/* EXEMPLO 4: camelCase
          Atributos usam camelCase: backgroundColor, fontSize */}
      <View style={styles.exemplo}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          fontSize, fontWeight
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 4,
    marginBottom: 8,
  },
});
