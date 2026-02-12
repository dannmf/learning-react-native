// ============================================
// AULA 03: Renderizacao Condicional
// ============================================
// Ternário: condicao ? <A /> : <B />
// AND (&&): condicao && <Componente />
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Condicionais() {
  // Troque os valores para ver o efeito
  const logado = true;
  const temNotificacoes = false;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Condicionais - Exemplos</Text>

      {/* EXEMPLO 1: Ternario (? :)
          Troque: true/false na variavel "logado" para ver o efeito */}
      <View style={styles.exemplo}>
        <Text>Status: {logado ? "Logado" : "Deslogado"}</Text>
        <Text>
          {logado ? "Bem-vindo de volta!" : "Faca login para continuar"}
        </Text>
      </View>

      {/* EXEMPLO 2: Operador &&
          Mostra OU nao mostra */}
      <View style={styles.exemplo}>
        <Text>Notificacoes:</Text>
        {temNotificacoes && (
          <Text style={styles.destaque}>Voce tem novas notificacoes!</Text>
        )}
        {!temNotificacoes && <Text>Nenhuma notificacao</Text>}
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
  destaque: {
    padding: 8,
    backgroundColor: "#fff3e0",
    borderRadius: 4,
    marginBottom: 8,
    fontWeight: "bold",
  },
});
