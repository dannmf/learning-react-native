// ============================================
// EXERCICIO 04: Componente Completo - Card de Produto
// ============================================
// Exercicio integrador: combine tudo que aprendeu.
// Teste importando no App.js:
//   import Exercicios04 from "./basic_components/exercises/exercicio_04_componente_completo";
// ============================================

import { View, Text, Image, TouchableOpacity, FlatList, Alert, StyleSheet } from "react-native";

const produtos = [
  { id: "1", nome: "Camiseta React", preco: 79.9, emEstoque: true, imagem: "https://picsum.photos/200/200?random=1" },
  { id: "2", nome: "Caneca Dev", preco: 39.9, emEstoque: false, imagem: "https://picsum.photos/200/200?random=2" },
  { id: "3", nome: "Adesivo JS", preco: 9.9, emEstoque: true, imagem: "https://picsum.photos/200/200?random=3" },
];

// TODO: Implemente o componente CardProduto
// Deve receber: nome, preco, emEstoque, imagem
// Requisitos:
// - Exibir a imagem (Image com width 80, height 80, borderRadius 8)
// - Exibir nome e preco formatado (R$ XX.XX)
// - Exibir "Em estoque" (verde) ou "Indisponivel" (vermelho)
// - Botao "Comprar" que mostra Alert. Desabilitado se fora de estoque.
function CardProduto({ nome, preco, emEstoque, imagem }) {
  // TODO: implemente o layout do card
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>TODO: implemente o CardProduto</Text>
    </View>
  );
}

// Componente principal: renderiza a lista de produtos (nao modifique)
export default function Exercicios04Completo() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardProduto
          nome={item.nome}
          preco={item.preco}
          emEstoque={item.emEstoque}
          imagem={item.imagem}
        />
      )}
      ListHeaderComponent={
        <Text style={styles.titulo}>Exercicio 04 - Card de Produto</Text>
      }
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 60, paddingBottom: 40, backgroundColor: "#F5F5F5" },
  titulo: {
    fontSize: 22, fontWeight: "bold", textAlign: "center",
    marginBottom: 20, color: "#212121",
  },
  card: {
    backgroundColor: "#FFF", marginHorizontal: 16, marginBottom: 12,
    padding: 16, borderRadius: 8, borderWidth: 1, borderColor: "#E0E0E0",
  },
  texto: { fontSize: 14, color: "#424242" },
  // Estilos uteis para a implementacao:
  cardRow: { flexDirection: "row", gap: 12 },
  nomeProduto: { fontSize: 16, fontWeight: "bold", color: "#212121" },
  preco: { fontSize: 14, color: "#424242", marginTop: 4 },
  estoque: { fontSize: 12, marginTop: 4 },
  botaoComprar: {
    backgroundColor: "#1565C0", paddingVertical: 8, paddingHorizontal: 16,
    borderRadius: 6, alignItems: "center", marginTop: 8,
  },
  botaoDesabilitado: { backgroundColor: "#E0E0E0" },
  textoBotao: { color: "#FFF", fontWeight: "bold", fontSize: 13 },
});
