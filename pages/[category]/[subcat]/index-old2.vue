<script setup>
import { getPartQty } from "../../../graphql/getPartsQuery"
import searchTags from "../../../data/queryTags.json"
import categories from "../../../data/productCategories.json"
import subCategories from "../../../data/productSubCat.json"
const route = useRoute();
const { subcat } = useRoute().params
const { id } = useRoute().params

// Define a method to check if there are products in a subcategory
const hasProducts = (subCatID) => {
  // Loop through products and check if any belong to the current subcategory
  return pageData.products.edges.some(product => product.node.subCatID === subCatID);
};

// This is the Car Category title
const carCat = route.params.category.replace(/-/g, ' ')
// carCat = carCat.replace(/-/g, " ")

// This variable is used for anything related to this car, like the photo name.
const carVariable = route.params.category;

// This is the page title
const title = route.params.subcat.replace(/-/g, ' ')

const items = searchTags.find(items => {
  return items.category == route.params.category 
  && items.catID == route.params.subcat
});

const variables = ref({
  query: items.queryTags
});

// let pageData = ref({
//   products: {
//     edges: [],
//     title: {},
//   },
// });

let pageData = ref({
  products: {
    edges: [],
    title: {},
  },
});

const { data } = await useAsyncQuery(getPartQty, variables.value);
    pageData.value = data.value;


</script>


<template>
  <div v-for="subCategory in subCategories" class="">
      <!-- Check if current subcategory matches the one in the route params -->
      <div v-if="subcat == subCategory.subCatID" :key="subCategory.subCatID" class="">
        <span class="text-red-500 text-xl font-bold">{{ subCategory.subCat }}</span>
        <div class="" v-for="stuff in pageData" :key="pageData">
          <h2 class="font-bold">{{ pageData.products.edges.length }} products</h2>
          {{ stuff }}<br>
          <span class="text-purple-500">{{ variables }}</span>
      </div>
      </div>
  </div>
  




  <div class=" border-l-2 border-slate-700">
  <div class="flex justify-center p-5 bg-black">
      <div class="">
        <NuxtImg :src="`/cars/${carVariable}.jpg`" class="" height="186" />
      </div>
      <div class="flex ml-10 items-center text-5xl font-bold text-white uppercase">
        <h1>{{ carCat }}</h1>
      </div>
    </div>
    <!-- <hr class="border-2 border-amber-300 mt-5" /> -->
    <div class="text-6xl text-center font-extrabold text-slate-700 mt-5">
      <h1 class="">{{ title }}</h1> <br>
      <!-- <span class="bg-amber-300 px-20 py-3 text-4xl text-slate-700">
        <span v-if="this.$route.query.subcat"> {{ this.$route.query.subcat }}</span>
      </span> -->
    </div>
  
    <div class="grid grid-cols-3 mr-5 gap-2 place-items-center">
    <div v-for="subCategory in subCategories" class="">
      <!-- Check if current subcategory matches the one in the route params -->
      <div v-if="subcat == subCategory.subCatID" class="">
        <!-- Display subcategory information -->
        <NuxtLink :to="`/${$route.params.category}/${$route.params.subcat}/${subCategory.link}`">
          <div class="text-center mb-10 text-slate-700 font-extrabold text-2xl hover:border-2 hover:border-slate-500 hover:rounded-xl border-2 border-white">
            <img :src="`/subCatImages/${subCategory.subCatImg}`" class="rounded-xl w-[300px] h-[300px]" />
            <div class="w-[300px] border-2">
              {{ subCategory.subCat }}
              <!-- Check if there are any products in this subcategory -->
              <div class="">
                <div v-if="pageData.products.edges.length < 1">
                  <p class="text-red-500">No Products</p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- <div class="flex flex-wrap justify-center md:justify-start">
      <div v-for="subCategories in subCategories">
          <div v-if="subcat == subCategories.subCatID" class="ml-5">
              <NuxtLink :to="`/${$route.params.category}/${$route.params.subcat}/${subCategories.link}`" >
                  <div class="text-center mb-10 text-slate-700 font-extrabold text-2xl hover:border-2 hover:border-slate-500 hover:rounded-xl border-2 border-white">
                      <img :src="`/subCatImages/${subCategories.subCatImg}`" class="rounded-xl w-[300px] h-[300px]" />
                      <div class="w-[300px]">{{ subCategories.subCat }}</div>
                      <div v-if="subcat == subCategories.subCatID" class="text-red-500">
                        <div v-if="pageData.products.edges.length < 1">
                          No Products
                        </div>
                        <div v-else>
                          {{ pageData.products.edges.length }} Products
                        </div>
                      </div> 
                  </div>
              </NuxtLink>
          </div>
      </div>
  </div> -->
</div>
</template>

