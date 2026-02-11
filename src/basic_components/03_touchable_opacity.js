// ============================================
// COMPONENTE: TouchableOpacity
// ============================================
// Detecta toques e diminui a opacidade como feedback visual.
// E o componente mais comum para criar botoes.
// Alternativa moderna: Pressable (mais customizavel).
// ============================================

import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

// -- onPress e onLongPress --
function ExemploBasico() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. onPress e onLongPress</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => Alert.alert("Toque", "Voce tocou!")}
        onLongPress={() => Alert.alert("Longo", "Voce segurou!")}
      >
        <Text style={styles.textoBotao}>Toque ou segure</Text>
      </TouchableOpacity>
    </View>
  );
}

// -- activeOpacity: nivel de transparencia ao tocar --
function ExemploActiveOpacity() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. activeOpacity</Text>
      <View style={{ gap: 8 }}>
        {[0.2, 0.5, 0.8].map((valor) => (
          <TouchableOpacity
            key={valor}
            style={styles.botao}
            activeOpacity={valor}
          >
            <Text style={styles.textoBotao}>activeOpacity: {valor}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// -- disabled: desabilita interacao --
function ExemploDisabled() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. disabled</Text>

      <TouchableOpacity style={styles.botao} onPress={() => Alert.alert("OK")}>
        <Text style={styles.textoBotao}>Ativo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, styles.botaoDesabilitado]}
        disabled
      >
        <Text style={[styles.textoBotao, { color: "#999" }]}>Desabilitado</Text>
      </TouchableOpacity>
    </View>
  );
}

// -- Contador interativo com useState --
function ExemploContador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Contador com useState</Text>
      <Text style={{ fontSize: 32, textAlign: "center", marginBottom: 12 }}>
        {contador}
      </Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={[styles.botao, { flex: 1, backgroundColor: "#E53935" }]}
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.textoBotao}>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { flex: 1, backgroundColor: "#2E7D32" }]}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBotao}>+ 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -- Padroes de botao estilizado --
function ExemploBotoesEstilizados() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>5. Padroes de Botao</Text>
      <View style={{ gap: 8 }}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#1565C0" }]}
        >
          <Text style={styles.textoBotao}>Primario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#757575" }]}
        >
          <Text style={styles.textoBotao}>Secundario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#E53935" }]}
        >
          <Text style={styles.textoBotao}>Perigo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoContorno}>
          <Text style={{ color: "#1565C0", fontWeight: "bold" }}>Contorno</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import TouchableExemplos from "./basic_components/03_touchable_opacity";
export default function TouchableExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componente: TouchableOpacity</Text>
      <ExemploBasico />
      <ExemploActiveOpacity />
      <ExemploDisabled />
      <ExemploContador />
      <ExemploBotoesEstilizados />
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
  botao: {
    backgroundColor: "#1565C0",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  textoBotao: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
  botaoDesabilitado: { backgroundColor: "#E0E0E0", marginTop: 8 },
  botaoContorno: {
    borderWidth: 2,
    borderColor: "#1565C0",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
