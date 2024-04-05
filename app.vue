<script setup>
import { useCartStore } from '@/stores/CartStore'
import { provide } from 'vue'

// Initialize and bind the cart store to the Vue application
const cartStore = useCartStore()
provide('cartStore', cartStore)
</script>

<template>
  	<AnnouncementBar />
	<Header />
	<LinkBar />

	<div class="flex">
	  <div class="hidden md:block">
	    <Categories />
	  </div>

	  <div class="w-full">
		<NuxtPage />
	  </div>

	</div>
	
	<Footer />

</template>
