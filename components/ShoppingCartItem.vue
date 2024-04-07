<script setup>
// import { useRouter } from 'vue-router';
// const router = useRouter()
import { createCheckoutMutation } from '../graphql/createCheckoutMutation';

const cartItems = useCartStore().items
const { mutate: createCheckout } = useMutation(createCheckoutMutation);

const cartStore = useCartStore();

const removeItemFromCart = (sku) => {
  const index = cartItems.findIndex(item => item.sku === sku);
  if (index !== -1) {
    cartStore.removeItemFromCart(index)
    window.location.href = '/shoppingCart'
    }
  }

  const clearCart = () => {
    cartStore.clearCart();
    window.location.href = '/shoppingCart';
      navigateToHome();
  }

  const navigateToHome = () => {
    window.location.href = '/'
  }

// Add the updateQuantity function to your script setup
const updateQuantity = (sku, newQuantity) => {
  cartStore.updateQuantity(sku, newQuantity);
};

// Define totalQuantity as a computed property that depends on cartItems
const totalQuantity = computed(() => {
    return cartItems.reduce((total, item) => total + parseInt(item.quantity), 0);
  });

// Update your getTotalPrice function to consider the quantity of each item
const getTotalPrice = () => {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
    totalPrice += numericPrice * item.quantity; // Multiply price by quantity
  });
  return totalPrice.toFixed(2);
};

const redirectToPayment = async () => {
  const lineItems = cartItems.map(item => ({
    variantId: item.variantId,
    quantity: parseInt(item.quantity)
  }));
  
  const { data } = await createCheckout({ lineItems })
  const url = data.checkoutCreate.checkout.webUrl;
  window.location.href = url;
}

cartItems.forEach(item => {
  const sku = item.sku;
})

</script>


<template>
  <div v-if="cartItems.length < 1" class="">
    <p class="font-bold bg-amber-300 pb-5 rounded-bl-xl rounded-br-xl w-60 text-center">Your Cart is Empty</p>
  </div>
  <div v-else class="">
    <div class="w-60 bg-amber-300 text-xl font-bold text-center mb-5 py-2 px-3 rounded-bl-xl rounded-br-xl">
      <p class="text-slate-900"><span class="font-normal text-md">Subtotal:</span> {{ getTotalPrice() }}</p>
      <p class="text-sm font-normal">
        <span v-if="totalQuantity == 1">({{ totalQuantity }} item)</span>
        <span v-else>({{ totalQuantity }} items)</span>
      </p>
    </div>
    <!-- --------------- -->
    <div v-for="id in cartItems" :key="id">
      {{ id.variantId }}<br>
      cartItems: {{ id.sku }}
    </div>
    
    <!-- --------------- -->
    <div class="">
      <button @click="clearCart" class="text-right pr-5 w-full font-bold text-red-500">X Clear Cart</button>
    </div>
    <div class="flex flex-col">
      <div v-for="item in cartItems" :key="index" class="flex w-full border-t-2">
        <NuxtImg :src="item.image" class="w-28 mr-5" />
        <div class="w-full flex flex-col justify-center">
            <p class="text-md text-slate-700 font-extrabold">{{ item.title }}</p>
            <p class="text-md text-green-600 font-bold">${{ item.price }} ea.</p>
            <p class="text-sm text-slate-400">Part No. {{ item.sku }}</p>
            <p class="text-sm text-slate-700">Qty: 
              <input type="number" v-model="item.quantity" @input="updateQuantity(item.sku, $event.target.value < 1 ? 1 : $event.target.value)" class="w-[50px] border-2 text-center" min="1">

            </p>
        </div>
        <button @click="removeItemFromCart(item.sku)" class="text-red-500 mr-3 hover:text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 130.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z"/></svg>
        </button>
      </div>
    </div>
    <button @click="redirectToPayment" class="w-60 text-white bg-green-500 border-2 border-green-500 text-xl font-bold text-center mt-5 py-2 px-3 hover:bg-white hover:border-2 hover:border-green-500 hover:text-green-500 mb-5">
      <p class="">Checkout Now</p>
    </button>
  </div>
</template>


