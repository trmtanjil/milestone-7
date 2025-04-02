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

const removeLocalStorage=id=>{
    const storageCart= getCartFromLocalStorage();
    const remainingeCart = storageCart.filter(storId=>storId !==id);
    saveCartToLocalStorage(remainingeCart);
}

export{
    getCartFromLocalStorage as getToStorCart, 
    AddItemToCartLocalStorage as addToStoreCart,
    removeLocalStorage as removFromCart
}