import { defineStore } from 'pinia';

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
  }),
  actions: {
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
