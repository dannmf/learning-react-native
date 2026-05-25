// ============================================
// EXERCICIO 21: Lista Vazia (ListEmptyComponent)
// ============================================
// Evolua o exercicio 20 adicionando ListEmptyComponent:
// - Exibir um Text centralizado: "Sua lista esta vazia. Adicione um produto!"
// - Estilizar com cor cinza e marginTop
// ============================================

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";

function CardProduto({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.quantidadeProduto}>
        Quantidade: {item.quantidade}
      </Text>
    </View>
  );
}

export default function ListaDeComprasCompleta() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [listaProdutos, setlistaProdutos] = useState([]);

  function handleAdicionar() {
    if (produto.trim() === "") {
      Alert.alert("Atencao", "Digite o nome do produto antes de adicionar.");
      return;
    }

    if (quantidade.trim() === "") {
      Alert.alert("Atencao", "Digite a quantidade do produto.");
      return;
    }

    const novoProduto = {
      id: Date.now().toString(),
      nome: produto,
      quantidade: quantidade,
    };

    setProdutos([...produtos, novoProduto]);
    setProduto("");
    setQuantidade("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          value={produto}
          onChangeText={setProduto}
          placeholder="Nome do produto"
        />
        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Quantidade"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduto item={item} />}
        style={styles.lista}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Sua lista esta vazia. Adicione um produto!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formulario: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  botao: {
    backgroundColor: "#4285f4",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  lista: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  quantidadeProduto: {
    fontSize: 14,
    color: "#666",
  },
  listaVazia: {
    textAlign: "center",
    color: "#999",
    marginTop: 60,
    fontSize: 16,
  },
});
