import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewExemplos, { ExemploFlexDirection } from "./basic_components/01_view";
import TextExemplos from "./basic_components/02_text";

export default function App() {
  return (
    <>
      <TextExemplos />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
