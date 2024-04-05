<script setup>

</script>


<template>
	<div class="flex justify-center mb-5 mt-5">
		<NuxtLink
        
        :to="`${carVariable}-sheetmetal?page=${currentPage - 1}`"
        class="hover:text-amber-500 hover:bg-slate-700 py-3 px-5 rounded-l-lg border-2 text-3xl"
      >&lt;</NuxtLink>
	  <NuxtLink
        
        :to="`${carVariable}-sheetmetal?page=${currentPage + 1}`"
        class="hover:text-amber-500 hover:bg-slate-700 py-3 px-5 rounded-r-lg border-2 border-l-0 text-3xl"
      >&gt;</NuxtLink>
	</div>
</template>