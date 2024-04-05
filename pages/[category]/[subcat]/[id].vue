<script setup>
import { ref } from "vue";
import {
  getPartsQueryBefore,
  getPartsQueryAfter,
} from "../../../graphql/getPartsQuery";
import searchTags from "../../../data/queryTags.json";
import { onMounted, nextTick } from "vue";



const route = useRoute();

// This is the Car Category title
const carCat = route.params.category.replace(/-/g, ' ')
// carCat = carCat.replace(/-/g, " ")

// This variable is used for anything related to this car, like the photo name.
const carVariable = route.params.category;

// This is the page title
const title = route.params.id.replace(/-/g, ' ')

// This is the query variable that Shopify will use to find the products
const items = searchTags.find(items => {
  return items.category == route.params.category 
  && items.catID == route.params.subcat
  && items.subCatID == route.params.id
})

// const items = searchTags.find(items => {
//   return items.category == "camaro-firebird" 
//   && items.catID == "Body-Components" 
//   && items.subCatID == "Bumpers"
// })

// const partID = node.id

const loading = ref(true);

// Search tags from Shopify products
const variables = ref({
  query: items.queryTags
});


let pageData = ref({
  products: {
    edges: [],
    pageInfo: {},
  },
});



onMounted(async () => {
  await nextTick();
  getData();
});

const getData = async (before, after) => {
  loading.value = true;
  if (before) {
    console.log(before);
    variables.value.before = before;
    const { data } = await useAsyncQuery(getPartsQueryBefore, variables.value);
    pageData.value = data.value;
    loading.value = false;
    loading.value = false;
  } else if (after || (after == null && before == null)) {
    if (after != null) {
      variables.value.after = after;
    }
    const { data } = await useAsyncQuery(getPartsQueryAfter, variables.value);
    pageData.value = data.value;
    loading.value = false;
  }
};

const price = computed(
  () =>
    `${product.value.productByHandle.priceRange.maxVariantPrice.amount} ${product.value.productByHandle.priceRange.maxVariantPrice.currencyCode}`
);

  console.log(route.query)
</script>

<template>


<!-- THIS CAN BE DELETED WHEN DONE TESTING -->
<!-- <h2 class="text-2xl text-red-500">
  <span class="text-black"> This is the ID page inside the SUBCAT folder</span><br>
  <span class="text-black"> Route:</span> {{ $route.params.category }} / {{ $route.params.subcat }} / {{ $route.params.id }}<br><br>
  <span class="text-black"> Query:</span> {{ variables }}<br><br>
  <span class="text-black"> SearchTags:</span> {{ searchTags }}<br><br>
</h2>  -->
<!--  -->


  <div class="w-7/8 border-l-2 border-slate-700">
    <div class="spinner" v-if="loading">Loading page</div>
    <section v-else>
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
      <!--  -->

      <div v-if="pageData.products.edges.length > 0">
          <div class="grid grid-cols-4">
            <div
              v-for="{ node } in pageData.products.edges"
              class="w-full flex justify-center border-r-2 border-2 border-l-white border-t-white border-b-white hover:border-2 hover:border-amber-500 hover:bg-slate-100 hover:rounded-xl mb-3"
            >
            
              <ModelCard
                :key="node.id"
                :productType="node.productType"
                :title="node.title"
                :image="node.images.edges[0].node.src"
                :description="node.description"
                :sku="node.variants.edges[0].node.sku"
                :link="`/products/${node.handle}`"
                :price="`${node.priceRange.maxVariantPrice.amount} ${node.priceRange.maxVariantPrice.currencyCode}`"
              />
            </div>
          </div> 
      </div>
      <div v-else>
        <p class="text-center text-2xl font-extrabold mt-20 mb-20"> No products to show </p>
      </div>




      <div v-if="pageData.products.edges.length > 0">
        <div class="flex justify-center mb-5 mt-5">
          <div class="flex">
            <button
              class="text-2xl border-2 py-2 px-5 bg-slate-100 rounded-l-xl"
              @click="getData(pageData.products.pageInfo.startCursor, null)"
              :disabled="!pageData.products.pageInfo.hasPreviousPage"
            >
              &lt;
            </button>
            <button
            class="text-2xl border-2 py-2 px-5 bg-slate-100 rounded-r-xl"
              @click="getData(null, pageData.products.pageInfo.endCursor)"
              :disabled="!pageData.products.pageInfo.hasNextPage"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      
    </section>
  </div>
</template>
