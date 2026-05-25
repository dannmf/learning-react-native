// ============================================
// ROUTES: HomeStack
// ============================================
//
// Responsavel pela pilha de telas da secao "Home".
// Exporta um componente que pode ser encaixado dentro
// de qualquer navigator externo (Tab, Drawer, etc.).

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../screens_app/HomeScreen";
import DetalheScreen from "../screens_app/DetalheScreen";

// Botao de hamburguer que abre o Drawer.
// Usa useNavigation porque nao e uma tela registrada — e um componente de UI interno.
function BotaoGaveta() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.hamburguer}>
      <Text style={styles.hamburguerTexto}>☰</Text>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => <BotaoGaveta />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhe" component={DetalheScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  hamburguer: {
    paddingHorizontal: 12,
  },
  hamburguerTexto: {
    fontSize: 22,
  },
});
