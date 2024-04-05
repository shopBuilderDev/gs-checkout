<template>

<header class="">
    <div class="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-end gap-4">
        <div class="flex items-center gap-4">
          <div class="relative">
            <label class="sr-only" for="search"> Search </label>
  
            <input
              class="h-12 w-full border-2 border-slate-700 bg-white pe-10 ps-4 text-lg shadow-sm sm:w-80"
              id="search"
              type="search"
              placeholder="Enter Keyword or Part Number"
            />
             
            <button
              type="button"
              class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span class="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
      </div>
    </div>
	</div>
  </header>
</template>