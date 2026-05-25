// ============================================
// AULA: Stack Navigator
// ============================================

// createNativeStackNavigator cria o objeto Stack com dois componentes:
// - Stack.Navigator: o container que gerencia o historico de telas
// - Stack.Screen: registra cada tela dentro do navegador
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetalheScreen from "../screens/DetalheScreen";

// ETAPA 1: Chamar createNativeStackNavigator() como funcao para obter o objeto Stack
// Erro comum: esquecer os parenteses, o que resulta em um objeto de funcao em vez do navigator
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhe" component={DetalheScreen} />
    </Stack.Navigator>
  );
}

// IMPORTANTE: Este componente deve ser envolvido por <NavigationContainer> no App.js
// O NavigationContainer gerencia o estado de navegacao e deve existir apenas UMA vez no app
