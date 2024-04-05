<script>
	import link from "../data/customerService.json"

	export default {
		data() {
			return {
				link: link
			}
		}
	}
</script>


<template>
	<div>
		<ul>
			<li v-for="link in link" class="text-white leading-8 hover:text-amber-500">
				<a :href="link.link">{{ link.name }}</a>
			</li>
		</ul>
	</div>
</template>

