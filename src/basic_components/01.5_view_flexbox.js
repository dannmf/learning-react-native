// ============================================
// VIEW: Flexbox Completo
// ============================================
// Propriedades principais do Flexbox
// Controla layout e posicionamento de elementos
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function ViewFlexbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View Flexbox - Exemplos</Text>

      {/* EXEMPLO 1: justifyContent
          Troque: "flex-start", "center", "flex-end", "space-between", "space-around" */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>justifyContent</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>

      {/* EXEMPLO 2: alignItems
          Troque: "flex-start", "center", "flex-end", "stretch" */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>alignItems</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", height: 80 }}
        >
          <View style={[styles.box, { height: 30 }]} />
          <View style={[styles.box, { height: 50 }]} />
          <View style={[styles.box, { height: 40 }]} />
        </View>
      </View>

      {/* EXEMPLO 3: flex (proporção)
          Troque os valores: 1, 2, 3 */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>flex</Text>
        <View style={{ flexDirection: "row", height: 60, gap: 8 }}>
          <View style={[styles.box, { flex: 1 }]}>
            <Text style={styles.textBox}>1</Text>
          </View>
          <View style={[styles.box, { flex: 2 }]}>
            <Text style={styles.textBox}>2</Text>
          </View>
          <View style={[styles.box, { flex: 1 }]}>
            <Text style={styles.textBox}>1</Text>
          </View>
        </View>
      </View>

      {/* EXEMPLO 4: flexWrap
          Troque: "nowrap" (padrão), "wrap" */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>flexWrap</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          <View style={[styles.box, { width: 80 }]} />
          <View style={[styles.box, { width: 80 }]} />
          <View style={[styles.box, { width: 80 }]} />
          <View style={[styles.box, { width: 80 }]} />
        </View>
      </View>

      {/* EXEMPLO 5: alignSelf
          Sobrescreve alignItems para um item específico
          Troque: "flex-start", "center", "flex-end", "stretch" */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>alignSelf</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            height: 80,
            gap: 8,
          }}
        >
          <View style={[styles.box, { height: 30 }]} />
          <View style={[styles.box, { height: 30, alignSelf: "center" }]}>
            <Text style={styles.textBox}>center</Text>
          </View>
          <View style={[styles.box, { height: 30 }]} />
        </View>
      </View>

      {/* EXEMPLO 6: gap
          Espaçamento entre itens
          Troque: 4, 8, 16, 24 */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>gap</Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>

      {/* EXEMPLO 7: position absolute
          Remove do fluxo normal e posiciona em relação ao pai
          Troque: top, right, bottom, left */}
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>position absolute</Text>
        <View
          style={{
            position: "relative",
            height: 100,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
          }}
        >
          <View
            style={[styles.box, { position: "absolute", top: 10, right: 10 }]}
          >
            <Text style={styles.textBox}>abs</Text>
          </View>
        </View>
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
  subtitulo: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 14,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
