<script>
import categories from "../data/categories.json";

	export default {
		data() {
			return {
				category: categories
			}
		}
	}
</script>

<template>
	<div class="container w-64 bg-slate-200 h-full border-2">
		<ul class="flex flex-col">
			<li v-for="category in category" class="py-3 hover:bg-slate-700 text-xl hover:text-white px-2 rounded-xl">
			<a :href="category.link"> {{ category.category }}</a>
			</li>
		</ul>
	</div>
</template>


