// ============================================
// ROUTES: HomeTabs
// ============================================
//
// Responsavel pelas abas inferiores do app.
// Cada aba pode conter um Stack ou uma tela simples.
// O headerShown: false evita duplo cabecalho quando
// este Tab for encaixado dentro de um Drawer.

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import PerfilScreen from "../screens_app/PerfilScreen";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
