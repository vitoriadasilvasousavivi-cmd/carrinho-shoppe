// ações do carrinho

// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// calcular total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL:");

    const result = userCart.reduce(
        (total, item) => total + item.subtotal(),
        0
    );

    console.log(`\nTotal: R$ ${result}`);
}

// deletar item pelo nome
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover item (diminui quantidade ou remove 1 unidade)
async function removeItem(userCart, name) {
    const item = userCart.find((item) => item.name === name);

    if (!item) return;

    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        const index = userCart.indexOf(item);
        userCart.splice(index, 1);
    }
}

// exibir carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");

    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: ${item.subtotal()}`
        );
    });
}

// export correto
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};