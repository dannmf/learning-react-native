// IMPORTANTE: react-native-gesture-handler deve ser o primeiro import do app
// O Drawer Navigator depende dele e o modulo nativo precisa ser inicializado
// antes de qualquer outro codigo ser executado
import "react-native-gesture-handler";

import { registerRootComponent } from "expo";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
