# 🛒 Shopee Cart (Simulador de Carrinho)

Este projeto é um simulador simples de carrinho de compras inspirado na Shopee, desenvolvido em **Node.js com JavaScript (ES Modules)**. Ele permite adicionar, remover, listar itens e calcular o total do carrinho.

---

## 🚀 Tecnologias utilizadas

- JavaScript (ES6+)
- Node.js
- ES Modules (`import` / `export`)
- `async / await`
- Manipulação de arrays (`push`, `find`, `findIndex`, `reduce`, `splice`)

---

## 📁 Estrutura do projeto

O projeto é dividido em dois módulos principais:

### `item.js`

Responsável por criar os itens do carrinho.

```js
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}

export default createItem;
