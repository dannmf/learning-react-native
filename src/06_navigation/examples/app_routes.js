// ============================================
// AULA: Aninhamento de Navegadores
// ============================================
//
// ESTRUTURA DESTE EXEMPLO:
//
//   NavigationContainer
//   └── Drawer (gaveta lateral — navegador mais externo)
//         ├── "Inicio"  --> TabNavigator (abas inferiores)
//         │     ├── aba "Home"   --> StackNavigator (pilha de telas)
//         │     │     ├── HomeScreen  (tela inicial da pilha)
//         │     │     └── DetalheScreen (empilhada ao navegar)
//         │     └── aba "Perfil" --> PerfilScreen (tela simples)
//         └── "Config"  --> ConfigScreen (tela simples)
//
// REGRA CHAVE: o NavigationContainer so pode aparecer UMA vez no app.
// Todos os navegadores aninhados ficam dentro dele.

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import DetalheScreen from "../screens/DetalheScreen";
import PerfilScreen from "../screens/PerfilScreen";
import ConfigScreen from "../screens/ConfigScreen";

function BotaoGaveta() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.hamburguer}
    >
      <Text style={styles.hamburguerTexto}>☰</Text>
    </TouchableOpacity>
  );
}

// ============================================
// ETAPA 1: Stack — navegador mais interno
// Gerencia a pilha Home -> Detalhe dentro da aba "Home"
// ============================================
const Stack = createNativeStackNavigator();

function HomeStack() {
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

// ============================================
// ETAPA 2: Tab — navegador intermediario
// Cada aba pode conter um Stack ou uma tela simples
// ============================================
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

// ============================================
// ETAPA 3: Drawer — navegador mais externo
// Envolve tudo: as abas e as telas extras da gaveta
// ============================================
const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen
          name="Inicio"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Config" component={ConfigScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
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
