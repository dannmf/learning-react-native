// ============================================
// COMPONENTE: Image
// ============================================
// Image exibe imagens locais ou remotas.
// Imagens remotas PRECISAM de width e height explicitos.
// resizeMode controla como a imagem se ajusta ao container.
// ============================================

import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

// -- Imagem remota (URI) - precisa de width e height --
function ExemploRemota() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>1. Imagem Remota</Text>

      {/* source com uri para imagens da internet */}
      <Image
        source={{ uri: "https://picsum.photos/300/150" }}
        style={{ width: "100%", height: 150, borderRadius: 8 }}
      />
      <Text style={styles.legenda}>
        Imagens remotas exigem width e height no style.
      </Text>
    </View>
  );
}

// -- resizeMode: como a imagem se ajusta --
function ExemploResizeMode() {
  const uri = "https://picsum.photos/400/200";
  const modos = ["cover", "contain", "stretch"];

  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>2. resizeMode</Text>

      {modos.map((modo) => (
        <View key={modo} style={{ marginBottom: 8 }}>
          <Text style={styles.legenda}>{modo}:</Text>
          <Image
            source={{ uri }}
            style={{ width: "100%", height: 100, borderRadius: 4, backgroundColor: "#E0E0E0" }}
            resizeMode={modo}
          />
        </View>
      ))}
    </View>
  );
}

// -- Imagem circular (avatar) --
function ExemploCircular() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>3. Imagem Circular</Text>

      <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
        {/* borderRadius = metade da largura/altura para ficar circular */}
        <Image
          source={{ uri: "https://picsum.photos/100/100" }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <Image
          source={{ uri: "https://picsum.photos/101/101" }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Image
          source={{ uri: "https://picsum.photos/102/102" }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
      <Text style={styles.legenda}>
        borderRadius = width / 2 para imagem circular.
      </Text>
    </View>
  );
}

// -- Imagem com borda e sombra --
function ExemploEstilizada() {
  return (
    <View style={styles.secao}>
      <Text style={styles.tituloSecao}>4. Imagem Estilizada</Text>

      <Image
        source={{ uri: "https://picsum.photos/300/180" }}
        style={{
          width: "100%",
          height: 180,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#1565C0",
        }}
      />
    </View>
  );
}

// -- Para testar, importe no App.js: --
// import ImageExemplos from "./basic_components/04_image";
export default function ImageExemplos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componente: Image</Text>
      <ExemploRemota />
      <ExemploResizeMode />
      <ExemploCircular />
      <ExemploEstilizada />
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
  legenda: { fontSize: 12, color: "#757575", fontStyle: "italic", marginTop: 4, marginBottom: 4 },
});
