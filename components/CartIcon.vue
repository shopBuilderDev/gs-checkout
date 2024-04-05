<script setup>
  const cartItems = useCartStore().items

 // Define totalQuantity as a computed property that depends on cartItems
 const totalQuantity = computed(() => {
    return cartItems.reduce((total, item) => total + parseInt(item.quantity), 0);
  });

</script>

<template>
<div>
  <button class="relative">
    <NuxtLink to="/ShoppingCart">
    <span class="sr-only"></span>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><circle cx="13.33" cy="29.75" r="2.25" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"/><circle cx="27" cy="29.75" r="2.25" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M33.08 5.37a1 1 0 0 0-.77-.37H11.49l.65 2H31l-2.67 12h-15L8.76 4.53a1 1 0 0 0-.66-.65L4 2.62a1 1 0 1 0-.59 1.92L7 5.64l4.59 14.5l-1.64 1.34l-.13.13A2.66 2.66 0 0 0 9.74 25A2.75 2.75 0 0 0 12 26h16.69a1 1 0 0 0 0-2H11.84a.67.67 0 0 1-.56-1l2.41-2h15.44a1 1 0 0 0 1-.78l3.17-14a1 1 0 0 0-.22-.85Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      <div class="absolute -right-2 -top-1 sm:-right-1 sm:top-0 bg-red-500 text-white text-[12px] rounded-full" >
        <span class="w-5 h-5 flex justify-center text-center items-center">
          {{ parseInt(totalQuantity) }}
        </span>
      </div>
    </NuxtLink>
  </button>
  <div class="h-full text-center">
    CART
  </div>
</div>
</template>