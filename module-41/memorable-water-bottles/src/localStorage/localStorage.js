const getCartFromLocalStorage = ()=>{
    const storedCardString = localStorage.getItem('cart');

    if(storedCardString){
        const storage = JSON.parse(storedCardString);
        return storage
    }
    return []
}

const saveCartToLocalStorage= cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const AddItemToCartLocalStorage = id=>{
    const cart = getCartFromLocalStorage();
    // cart.push(id);
    const newCart = [...cart, id];

    // save new cart to the local storage
    saveCartToLocalStorage(newCart)

}

export{
    getCartFromLocalStorage as getToStorCart, 
    AddItemToCartLocalStorage as addToStoreCart
}