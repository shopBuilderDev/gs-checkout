<script setup>
import categories from "../data/productCategories.json"
import subCategories from "../data/productSubCat.json"
const { id } = useRoute().params
const { subcat } = useRoute().params
</script>


<template>
    
        <!-- <h2 class="text-4xl text-red-500">
            Route: {{ id }}<br>
            <div v-for="subCategories in subCategories">
                Category:{{ id }} | subCategory: {{ subcat }}
                <span class="text-blue-500" v-if="id == subCategories.link"> SubCat Link: {{ subCategories.link }}</span>
            </div>
        </h2> -->
    

    <div class="border-2 border-purple-500 flex flex-wrap">
				<div v-for="subCategories in subCategories">
					<div v-if="id == subCategories.subCatID">
						<NuxtLink :to="`/camaro-firebird/${subCategories.link}`" class="" >
                            <div class="text-center mb-10 text-slate-700 font-extrabold text-2xl hover:text-amber-500">
                                <img src=".jpg" class="border-2 border-red-500 w-[300px] h-[300px]" />
                                {{ subCategories.subCat }}
                            </div>
                        </NuxtLink>
                </div>
            </div>
        </div>
</template>
