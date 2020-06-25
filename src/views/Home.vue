<template>
  <div class="page home">
    <h1>
      Welcome to the Game!
    </h1>
    <button class="btn green">
      <router-link to="/categories">start</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  background: var(--primary);
  min-height: 100vh;
  padding-top: 6rem;
}
h1 {
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 1rem;
}
.btn {
  border-width: 6px;
}
a {
  text-decoration: none;
  color: var(--white);
  font-size: 2.5rem;
  line-height: 2.5rem;
  padding: 1rem;
}
a:hover {
  color: var(--green);
}
</style>
