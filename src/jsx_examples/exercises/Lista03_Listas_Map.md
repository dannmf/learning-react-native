# Lista 03 - Listas com .map()

**Desenvolvimento Mobile | React Native**

---

**Objetivo:** Praticar a renderização de listas dinâmicas utilizando métodos de array do JavaScript dentro do JSX.

---

## Exercício 1 — Lista de Frutas

Dado o array abaixo:

```js
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
```

Renderize cada fruta como um elemento de texto na tela. Cada item deve ser gerado dinamicamente a partir do array.

---

## Exercício 2 — Lista de Produtos

Dado o array de objetos abaixo:

```js
const produtos = [
  { id: 1, nome: "Camiseta", preco: 49.90 },
  { id: 2, nome: "Calça", preco: 89.90 },
  { id: 3, nome: "Tênis", preco: 199.90 },
];
```

Renderize na tela o **nome** e o **preço** de cada produto. Utilize o campo **id** de cada objeto para identificar os elementos da lista.

---

## Exercício 3 — Filtrar Números Pares

Dado o array abaixo:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Exiba na tela **apenas os números pares**. Primeiro filtre o array e depois renderize os itens resultantes.
