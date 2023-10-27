<template>
  <div class="grid-container mx-auto">
    <HeaderDashboard />
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <slot />
      </div>
      <div class="drawer-side rounded-box mx-5">
        <label
          for="my-drawer-2"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu p-4 min-h-full bg-neutral text-base-content w-16">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
  <LazyGlobalFooter />
</template>

<style lang="scss">
.drawer {
  min-height: calc(100vh - 206px);
}
</style>
