<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	handle: {
		type: String,
		required: true,
	}
});
</script>

<template>
	<div class="w-full flex justify-center p-5">
        <div class="mr-5">
			<NuxtLink :to="handle">
				<NuxtImg
					:src="image"
					class="bg-white mx-auto"
					width=200
					height=200
					format="webp"
				/>
			</NuxtLink>
        </div>

        <div class="flex flex-col w-3/4">
            <h2 class="bg-amber-500 pl-5 text-white font-semibold italic mb-2">FEATURED PRODUCT</h2>
            <h2 class="font-extrabold text-2xl">{{ title }}</h2>
            <p class="line-clamp-2 font-semibold text-lg text-slate-600">{{ description }}</p>
            <a :href="handle"><button class="bg-green-500 px-3 py-2 rounded-md hover:bg-green-700 hover:text-white mt-5 w-1/5">Details</button></a>
        </div>
    </div>
</template>