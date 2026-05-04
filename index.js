import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to your Shopee Cart!");

// como está usando await no topo, precisa de ES Modules (type: module no package.json)

const item1 = await createItem("Colar", 10.00, 1);
const item2 = await createItem("Pulseira", 12.00, 2);

// adicionando itens ao carrinho (senão não faz sentido remover)
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// removendo itens
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

// exibindo carrinho
await cartService.displayCart(myCart);

// calculando total
await cartService.calculateTotal(myCart);