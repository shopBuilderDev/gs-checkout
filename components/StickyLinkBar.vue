<template>
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
</template>