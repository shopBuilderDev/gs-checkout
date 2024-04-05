<script setup>
	defineProps({
		title: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			required: true,
		},
		productType: {
			type: String,
			required: true,
		},
		sku: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<NuxtLink :to="link" class="flex h-full justify-between">

		<div class="flex justify-between flex-col">
			<NuxtImg :src="image" class="bg-white mx-auto w-3/4 mt-3" format="webp" />

			<div class="flex flex-col p-5 text-zinc-700">
				<p class="text-sm text-slate-400">{{ productType }}</p>
				<h3 class="font-extrabold text-xl leading-5 text-slate-700 leading-8 group-hover:underline">{{ title }}</h3>
				<p class="text-sm text-slate-400">SKU: {{ sku }}</p>
				<p class="font-bold text-2xl text-green-500">
				${{ price }}
				</p>
				<button class="bg-slate-700 text-white font-extrabold mt-5 py-2">DETAILS</button>
			</div>
		</div>

	</NuxtLink>
</template>