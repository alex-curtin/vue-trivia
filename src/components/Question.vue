<template>
  <div>
    <h2 v-html="question"></h2>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["question"]
};
</script>

<style scoped>
</style>
