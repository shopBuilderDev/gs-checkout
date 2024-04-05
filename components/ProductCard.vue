<script setup>
	defineProps({
		title: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		}
	});
</script>

<template>
<div class="flex h-full justify-between border-2 border-slate-500">
<a
  href=""
  class="group overflow-hidden border-l-orange-100 bg-slate-700 shadow hover:shadow-md"
>

<NuxtLink :to="link">
	<NuxtImg
		:src="image"
		class="bg-white mx-auto"
		format="webp"
	/>
</NuxtLink>


  <div class="flex flex-col justify-end p-5 text-zinc-700">
    <h3 class="font-extrabold text-3xl text-slate-300 leading-8 group-hover:underline">{{ title }}</h3>
    <p class="font-bold text-3xl text-amber-300">
      Price ${{ price }}
    </p>
	<!-- <p>{{ description }}</p> -->
  </div>
</a>
</div>
</template>