<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">&copy; Lynne Finnigan {{new Date().getFullYear()}}</footer>
  </transition>
</template>

<script>
export default { name: "blog-footer" };
</script>
