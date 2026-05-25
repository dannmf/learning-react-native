// ============================================
// ROUTES: AppDrawer
// ============================================
//
// Navigator mais externo — a gaveta lateral.
// Cada item da gaveta pode apontar para um navigator
// inteiro (HomeTabs) ou para uma tela simples (ConfigScreen).
// headerShown: false na rota "Inicio" evita cabecalho
// duplicado, pois o HomeStack ja fornece o seu.

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeTabs from "./HomeTabs";
import ConfigScreen from "../screens_app/ConfigScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen
        name="Inicio"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Config" component={ConfigScreen} />
    </Drawer.Navigator>
  );
}
