<script setup>
	import { getFeaturedProductsQuery } from'../graphql/getFeaturedProductsQuery';	

	const variables = { handle: "featured" }
	const { data } = await useAsyncQuery(getFeaturedProductsQuery, variables)
	
</script>

<template>
	  <div class="mt-2 mr-3 ml-3 w-full">
	    <section>
			<div class="flex justify-center mb-2 border-2">
				<Hero />
			</div>
			<hr class="border-2 border-amber-300 mt-5">
			<div class="text-6xl font-extrabold text-slate-700 mt-5 mb-3">
				FEATURED PRODUCTS
			</div>
			<div v-for="{ node } in data.collectionByHandle.products.edges" class="w-full flex justify-center border-2 border-slate-400 hover:bg-slate-200 mb-3">
				<FeatureCard
					:key=node.id
					:title=node.title
					:image=node.images.edges[0].node.src
					:description=node.description
					:handle="`products/${node.handle}`"
				/>
	        </div>
	    </section>
	  </div>
	  <!-- <div v-for="{ node } in data.collectionByHandle.products.edges">
		<p>ID: {{ node.id }}</p>
		<p>TITLE: {{ node.title }}</p>
		<p>URL: {{ node.handle }}</p>
		<br>
	  </div> -->
</template>
