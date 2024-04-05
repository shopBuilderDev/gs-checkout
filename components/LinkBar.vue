<script>
	import links from "../data/links.json"

	export default {
		data() {
			return {
				link: links
			}
		}
	 }
</script>

<template>
	<div class="bg-amber-300 h-12">
		<ul class="flex justify-evenly">
		<li v-for="link in link" class="hover:bg-slate-700 hover:text-white pt-3 h-12 w-full text-center">
				<a :href="link.href">{{ link.name }}</a> 
		</li>
	</ul>

	<!-- <ul class="flex justify-evenly">
		{LinkData.map((LinkData) => (
			<li class="hover:bg-slate-700 hover:text-white pt-3 h-12 w-full text-center"><a href={LinkData.href}>{LinkData.name}</a></li>
		))}
	</ul> -->
	</div>
</template>
