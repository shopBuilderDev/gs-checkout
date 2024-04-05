<script setup>
import { ref } from "vue";
  import { useRoute } from "vue-router";
import { onMounted, nextTick } from "vue";
import {
  getPartsQueryBefore,
  getPartsQueryAfter,
} from "../graphql/getPartsQuery";

// This is the Car Category title
const carCat = "Camaro-Firebird";

// This variable is used for anything related to this car, like the photo name.
const carVariable = "camaro-firebird";

// This is the page title
const title = "BUMPERS";

const loading = ref(true);

  const route = useRoute();

let pageData = ref({
  products: {
    edges: [],
    pageInfo: {},
  },
});

// Search tags from Shopify products
let variables = ref({
  query:
    "tag:chevy AND tag:camaro OR tag:firebird OR tag:transam AND tag:bumper",
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
  <div class="mt-2 mr-3 ml-3 w-7/8">
    <div class="spinner" v-if="loading">Loading page</div>
    <section v-else>
      <div class="flex justify-center p-5">
        <div class="">
          <NuxtImg :src="`/cars/${carVariable}.jpg`" class="" height="186" />
        </div>
        <div class="flex ml-10 items-center text-5xl font-bold">
          <h1>{{ carCat }}</h1>
        </div>
      </div>
      <hr class="border-2 border-amber-300 mt-5" />
      <div class="text-6xl text-center font-extrabold text-slate-700 mt-5 mb-3">
        {{ title }}
      </div>
      <div class="sticky top-[103px] z-40">
        <div class="border-b bg-white py-3">
          <ul
            class="flex justify-between mx-10 mb-5 text-xl font-bold text-slate-700"
          >
            <li>
              <NuxtLink
                :to="`${carVariable}-sheetmetal`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Sheet Metal</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`${carVariable}-Interior`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Interior</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`${carVariable}-exterior`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Exterior</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`${carVariable}-glass`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Glass</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`${carVariable}-suspension`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Suspension</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`${carVariable}-gastank`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Gas Tank</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`${carVariable}-light`"
                class="hover:text-amber-500 hover:bg-slate-700 p-3 rounded-lg"
                >Light</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>


      <div v-if="pageData.products.edges.length > 0">
        <div class="grid grid-cols-4 gap-3">
          <div
            v-for="{ node } in pageData.products.edges"
            class="w-full flex justify-center border-2 border-slate-400 hover:bg-slate-200 mb-3"
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
