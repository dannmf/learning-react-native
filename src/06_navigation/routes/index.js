// ============================================
// ROUTES: index — ponto de entrada da navegacao
// ============================================
//
// Este e o unico arquivo que conhece o NavigationContainer.
// No App.js basta importar AppRoutes daqui:
//
//   import AppRoutes from "./06_navigation/routes";
//   export default function App() { return <AppRoutes />; }
//
// ESTRUTURA:
//
//   NavigationContainer
//   └── AppDrawer  (gaveta lateral)
//         ├── "Inicio"  -->  HomeTabs  (abas inferiores)
//         │     ├── "Home"   -->  HomeStack  (pilha)
//         │     │     ├── HomeScreen
//         │     │     └── DetalheScreen
//         │     └── "Perfil" -->  PerfilScreen
//         └── "Config"  -->  ConfigScreen

import { NavigationContainer } from "@react-navigation/native";
import AppDrawer from "./AppDrawer";

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
