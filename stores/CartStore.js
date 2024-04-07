import { defineStore } from 'pinia';

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItemToCart(itemAdded) {
      const existingItemIndex = this.items.findIndex(item => item.variantId === itemAdded.variantId);
      if (existingItemIndex !== -1) {
        // If an item with the same variantId exists, update its quantity
        this.items[existingItemIndex].quantity += 1;
        this.updateSessionStorage();
    } else {
        // Otherwise, add the new item to the cart
        this.items.push(itemAdded);
        this.updateSessionStorage();
    }
    },
    removeItemFromCart(index) {
      this.items.splice(index, 1);
      this.updateSessionStorage();
    },
    clearCart() {
      this.items = [];
      this.updateSessionStorage();
    },
    updateQuantity(sku, newQuantity) {
      const index = this.items.findIndex((item) => item.sku === sku);
      if (index !== -1) {
        this.items[index].quantity = newQuantity;
        this.updateSessionStorage();
      }
    },
    updateSessionStorage() {
      window.sessionStorage.setItem('cartItems', JSON.stringify(this.items));
    },
  },
  persist: {
    storage: persistedState.sessionStorage,
  },
});
