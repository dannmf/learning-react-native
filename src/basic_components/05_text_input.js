// ============================================
// COMPONENTE: TextInput
// ============================================
// TextInput captura texto digitado pelo usuario.
// Sempre use com useState para controlar o valor.
// keyboardType muda o teclado (numerico, email, etc).
// ============================================

import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";

// -- Input basico com value e onChangeText --
function ExemploBasico() {
  const [nome, setNome] = useState("");

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Input Basico</Text>

      {/* value: valor atual | onChangeText: funcao chamada ao digitar */}
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <Text style={styles.texto}>Digitado: {nome}</Text>
    </View>
  );
}

// -- keyboardType: tipo de teclado --
function ExemploKeyboardType() {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. keyboardType</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />
      <Text style={styles.legenda}>
        Outros: default, numeric, decimal-pad
      </Text>
    </View>
  );
}

// -- secureTextEntry: campo de senha --
function ExemploSenha() {
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Campo de Senha</Text>

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry
      />
    </View>
  );
}

// -- multiline: area de texto --
function ExemploMultiline() {
  const [bio, setBio] = useState("");

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Multiline</Text>

      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: "top" }]}
        value={bio}
        onChangeText={setBio}
        placeholder="Escreva sua bio..."
        multiline
        numberOfLines={4}
      />
    </View>
  );
}

// -- Formulario simples --
function ExemploFormulario() {
  const [form, setForm] = useState({ nome: "", email: "" });

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>5. Formulario</Text>

      <TextInput
        style={styles.input}
        value={form.nome}
        onChangeText={(texto) => setForm({ ...form, nome: texto })}
        placeholder="Nome"
      />

      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(texto) => setForm({ ...form, email: texto })}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.texto}>
        {`Nome: ${form.nome} | Email: ${form.email}`}
      </Text>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import TextInputExemplos from "./basic_components/05_text_input";
export default function TextInputExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componente: TextInput</Text>
      <ExemploBasico />
      <ExemploKeyboardType />
      <ExemploSenha />
      <ExemploMultiline />
      <ExemploFormulario />
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
  legenda: { fontSize: 12, color: "#757575", fontStyle: "italic", marginTop: 4 },
  texto: { fontSize: 14, color: "#424242", marginTop: 4 },
  input: {
    borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 8,
    padding: 12, fontSize: 14, marginBottom: 8,
  },
});
