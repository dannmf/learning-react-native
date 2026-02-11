# Learning React Native

Repositorio de exemplos educacionais de React Native para estudo.

## Pre-requisitos

- [Node.js](https://nodejs.org/) (versao 18 ou superior)
- [Expo Go](https://expo.dev/go) instalado no celular (Android ou iOS)

## Instalacao

```bash
npm install
```

## Execucao

```bash
npm start
```

Escaneie o QR Code exibido no terminal com o app Expo Go.

## Como usar os exemplos

Cada arquivo de exemplo e um componente independente. Para visualizar, importe no `src/App.js`:

```js
// Exemplo: ver a aula de View
import ViewExemplos from "./basic_components/01_view";

export default function App() {
  return <ViewExemplos />;
}
```

Troque o import para navegar entre os exemplos.

## Estrutura

```
src/
  App.js                          -- Componente raiz (altere o import aqui)

  jsx_examples/                   -- Fundamentos do JSX
    01_estrutura_jsx.js            -- Elemento raiz, Fragment, auto-fechamento
    02_expressoes_jsx.js           -- Variaveis, funcoes e operacoes no JSX
    03_condicionais.js             -- Ternario, && e variavel JSX
    04_string_template.js          -- Template literals e interpolacao
    05_listas_e_map.js             -- .map(), key e .filter()
    exercises/
      exercicio_01_jsx_basico.js
      exercicio_02_expressoes.js
      exercicio_03_condicionais_listas.js

  basic_components/               -- Componentes principais do React Native
    01_view.js                     -- View, Flexbox, padding, margin, bordas
    02_text.js                     -- Text, estilos de texto, aninhamento
    03_touchable_opacity.js        -- TouchableOpacity, onPress, botoes
    04_image.js                    -- Image, resizeMode, imagem circular
    05_text_input.js               -- TextInput, keyboardType, formulario
    06_scroll_view.js              -- ScrollView, horizontal, contentContainerStyle
    07_flatlist.js                 -- FlatList, renderItem, grid, lista vazia
    08_stylesheet.js               -- StyleSheet.create, combinacao, posicionamento
    exercises/
      exercicio_01_layout.js
      exercicio_02_estilizacao.js
      exercicio_03_inputs_e_listas.js
      exercicio_04_componente_completo.js
```

## Exercicios

Os arquivos dentro das pastas `exercises/` possuem marcadores `TODO` para os alunos completarem. Cada exercicio tem instrucoes nos comentarios.
