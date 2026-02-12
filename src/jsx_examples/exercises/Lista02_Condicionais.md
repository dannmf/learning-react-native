# Lista 02 - Renderização Condicional

**Desenvolvimento Mobile | React Native**

---

**Objetivo:** Praticar renderização condicional no JSX utilizando operador ternário e operador lógico de curto-circuito, com base em variáveis já definidas.

---

## Exercício 1 — Operador Ternário

Dado a variável abaixo:

```js
const loja_aberta = true;
```

Exiba o texto **"Status: Aberto"** se a variável for verdadeira, ou **"Status: Fechado"** se for falsa. Utilize o operador ternário para decidir qual texto renderizar.

---

## Exercício 2 — Operador &&

Dado a variável abaixo:

```js
const tem_promocao = true;
```

Quando **tem_promocao** for verdadeiro, renderize um texto com a mensagem **"Promoção ativa! Aproveite os descontos."**. Quando for falso, nada deve aparecer naquele espaço.

---

## Exercício 3 — Condicional com Múltiplas Condições

Dado a variável abaixo:

```js
const nota = 7.5;
```

Exiba na tela uma mensagem de acordo com o valor da nota:

- Se a nota for maior ou igual a **7**, exiba **"Aprovado"** (com cor verde).
- Se a nota for maior ou igual a **5** e menor que 7, exiba **"Recuperação"** (com cor amarela/laranja).
- Se a nota for menor que **5**, exiba **"Reprovado"** (com cor vermelha).

Teste alterando o valor da variável **nota** para verificar se as três situações funcionam corretamente.
