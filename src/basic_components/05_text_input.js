// ============================================
// COMPONENTE: TextInput
// ============================================
// TextInput captura texto digitado
// Sempre use com useState para controlar o valor
// ============================================

import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function TextInputExemplos() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TextInput - Exemplos</Text>

      {/* EXEMPLO 1: Input básico
          value + onChangeText */}
      <View style={styles.exemplo}>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />
        <Text>Digitado: {nome}</Text>
      </View>

      {/* EXEMPLO 2: keyboardType
          Troque: "default", "email-address", "numeric", "phone-pad" */}
      <View style={styles.exemplo}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* EXEMPLO 3: secureTextEntry
          Para senhas */}
      <View style={styles.exemplo}>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry
        />
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
});
