<template>
	<header class="sticky top-0 z-40">
  <div class="border-b bg-white/20 py-3 backdrop-blur-2xl">
    <nav class="container grid grid-cols-2 items-center">
      <a href="/" class="pl-10">
        <Logo />
      </a>
      
      <div class="flex items-center justify-self-end">
        <div class="">
          <SearchBar />
        </div>

        <div class="justify-self-end">
          <CartIcon />
        </div>
      </div>

    </nav>
  </div>
</header>
</template>