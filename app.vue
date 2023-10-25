<template>
  <Header />
  <div class="grid-container mx-auto min-h-screen">
    <div class="grid gap-x-4 grid-cols-4 md:grid-cols-8 xl:grid-cols-12">
      <div class="col-span-full">
        <RouterView />
      </div>
    </div>
  </div>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
    </aside>
  </footer>
</template>
