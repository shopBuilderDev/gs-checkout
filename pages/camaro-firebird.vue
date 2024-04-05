<script setup>
import categories from "../../data/productCategories.json"
import subCategories from "../../data/productSubCat.json"

const mainCatID = categories
const subCatID = subCategories
const carType = "camaro-firebird"
const originalTitle = "Camaro-Firebird"
const title = originalTitle.replace(/-/g, ' ')
const { category } = useRoute().params
</script>


<template>



	<div>
		<div class="mb-10 w-full border-l-2 border-slate-700">
	    <section>
			<div class="flex justify-center">
				<HeroCamaro />
			</div>
			<!-- <hr class="border-2 border-amber-300 mt-5"> -->
			<div class="bg-black text-6xl text-center font-extrabold text-white pb-2 mb-3">
				{{ title }}
			</div>

			


			<div class="grid grid-cols-3 mr-5 gap-2 place-items-center">
				<div v-for="categories in categories">
					<div>
						<NuxtLink :to="`/camaro-firebird/${categories.link}`" class="" >
								<div class="text-center mb-10 text-slate-700 font-extrabold text-2xl hover:border-2 hover:border-slate-500 hover:rounded-xl border-2 border-white">
									<img :src="`/categoryImages/${categories.categoryImage}`" class="rounded-xl w-[300px] h-[300px]" />
									{{ categories.productCategory }}
								</div>
							</NuxtLink>
					</div>
				</div>
			</div>

	    </section>
	  </div>
	</div>
</template>


