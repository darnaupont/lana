<template>
  <div class="flex relative overflow-hidden">
    <main class="w-8/12 bg-white py-8 px-12 rounded-l-md flex overflow-hidden">
      <slot />
    </main>
    <aside class="w-4/12 bg-gray-100  py-8 px-8 rounded-r-md flex flex-col">
      <slot name="aside" />
    </aside>
  </div>
</template>
