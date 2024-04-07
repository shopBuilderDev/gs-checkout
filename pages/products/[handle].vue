<script setup>
import { getSingleProductQuery } from '../../graphql/getSingleProductQuery';
import { CreateCartMutation } from '../../graphql/cart';

	const route = useRoute()
	const cartStore = useCartStore();

	const { data: product } = await useAsyncQuery(getSingleProductQuery, {handle: route.params.handle})
	const price = computed(() => `${product.value.productByHandle.priceRange.maxVariantPrice.amount} ${product.value.productByHandle.priceRange.maxVariantPrice.currencyCode}`)

// 	const redirectToPayment = async () => {
	const { mutate: createCart } = useMutation(CreateCartMutation);
//   const { data } = await useAsyncQuery(CreateCartMutation)
//   window.location.href = data.value}

// defineEmits(["addToCart"])

const addToCart = () => {
	const addedProd = {
		variantId: product.value.productByHandle.variants.edges[0].node.id,
		title: product.value.productByHandle.title,
		price: price.value,
		sku: product.value.productByHandle.variants.edges[0].node.sku,
		image: product.value.productByHandle.images.edges[0].node.src,
		quantity: 1
	}
	cartStore.addItemToCart(addedProd);
	window.location.href = '/shoppingCart'
}



</script>

<template>
	<section>
		<div class="mt-10 lg:flex w-full">
			
			<div class="px-5">
				<NuxtImg
				:src="product.productByHandle.images.edges[0].node.src"
				class="border-2 ml-5 mr-5 mb-5 p-3 rounded-lg"
				width="400px"
				alt="Product Image"
				format="webp"
				/>
			</div>
			
			<div class="w-full lg:w-1/2 pr-10 ml-10 lg:ml-0">
				<h2 class="text-4xl font-bold mb-5">{{ product.productByHandle.title }}</h2>

				<div class="mt-5 mb-5 text-slate-500">
					SKU: {{ product.productByHandle.variants.edges[0].node.sku }}
				</div>

				<hr class="w-[50px] border-2 mb-5 border-slate-400 rounded-full" />

				<div class="text-xl font-bold mt-5 mb-5">
					{{ price }}
				</div>
				

				<div>
					<button 
					@click="addToCart"
					class="w-full mb-10 py-3 text-center font-medium text-white text-xl rounded bg-green-500 hover:bg-green-700"
					>
						Add to Cart 
					</button>
					
				</div>

				<!-- <div v-for="{ data } in product.productByHandle.media.edges[0].node.previewImage.url"> -->
					<!-- {{ product }} -->
					<!-- {{ product.productByHandle.media.edges[0].node.previewImage.url }} -->
					<!-- <div class="px-5">
						<NuxtImg
						:src="product.productByHandle.media"
						class="border-2 ml-5 mr-5 mb-5 p-3 rounded-lg"
						width="100px"
						alt="Product Image"
						format="webp"
						/>
					</div> -->
				<!-- </div> -->
				
			</div>
			
		</div>

		<div class="">
			<p class="text-gray-700 text-xl mb-6 mx-10">
				<span class="text-3xl font-bold">Description</span><br><br>
				{{ product.productByHandle.description }}
			</p>
		</div>

	</section>
</template>
