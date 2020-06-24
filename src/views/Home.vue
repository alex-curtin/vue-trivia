<template>
  <div class="page">
    <h2>
      Welcome to the Game!
      <p>
        <router-link to="/categories">select categories</router-link>
        {{" "}}to get started
      </p>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--primary);
}
</style>
