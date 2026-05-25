// ============================================
// Exemplo da Aula — TextInput + FlatList
// src/forms_and_lists/ListaDeTarefas.js
// ============================================
//
// Evolução do RecadosScaffold da aula passada:
// antes -> um campo, exibia um texto
// agora -> dois campos, adiciona numa lista dinâmica com FlatList
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
import CardTarefa from "./card_tarefa";

export default function ListaDeTarefas() {
  // Um estado por campo do formulário — mesmo padrão do RecadosScaffold
  const [tarefa, setTarefa] = useState("");
  const [prioridade, setPrioridade] = useState("");

  // O array de tarefas começa vazio — cada item é um objeto { id, nome, prioridade }
  const [tarefas, setTarefas] = useState([]);

  function handleAdicionar() {
    // Validação: trim() remove espaços soltos antes de checar se está vazio
    if (tarefa.trim() === "") {
      Alert.alert("Atenção", "O nome da tarefa não pode ficar vazio!");
      return; // interrompe a função aqui, não executa o que vem abaixo
    }

    // Montamos um objeto com os dados do formulário + um ID único
    // Date.now() retorna o timestamp atual em ms — suficientemente único aqui
    const novaTarefa = {
      id: Date.now().toString(),
      nome: tarefa,
      prioridade: prioridade.trim() || "normal", // se vazio, usa 'normal' como padrão
    };

    // NUNCA faça tarefas.push(novaTarefa) — isso muta o array e o React não re-renderiza
    // Sempre crie um novo array: [...array_antigo, novo_item]
    setTarefas([...tarefas, novaTarefa]);

    // Limpa os campos após adicionar — mesmo padrão do RecadosScaffold
    setTarefa("");
    setPrioridade("");
  }

  // Componente para renderizar cada item da lista
  // Extraído fora do JSX principal para deixar o código mais organizado

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      {/* Formulário — dois campos controlados */}
      <TextInput
        style={styles.input}
        placeholder="Nome da tarefa"
        value={tarefa}
        onChangeText={setTarefa} // shorthand: equivale a (texto) => setTarefa(texto)
      />

      <TextInput
        style={styles.input}
        placeholder="Prioridade (alta, média, baixa)"
        value={prioridade}
        onChangeText={setPrioridade}
      />

      <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
        <Text style={styles.botaoTexto}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      {/* Contador dinâmico — atualiza sozinho quando tarefas muda */}
      <Text style={styles.contador}>
        {tarefas.length} {tarefas.length === 1 ? "tarefa" : "tarefas"} na lista
      </Text>

      {/* FlatList — as 3 props obrigatórias: data, keyExtractor, renderItem */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id} // ID único e estável — nunca usar index
        renderItem={({ item }) => <CardTarefa item={item} />}
        // ListEmptyComponent aparece quando data=[] (lista vazia)
        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Nenhuma tarefa ainda. Adicione a primeira acima!
          </Text>
        }
        // Garante que a lista não fique embaixo do teclado
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: "#cc0000",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contador: {
    fontSize: 13,
    color: "#888",
    marginBottom: 12,
  },

  listaVazia: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
    fontSize: 15,
  },
});
