<template>
  <div>
    <h2>Select Categories</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getCategories } from '../api/open-trivia';

export default {
  name: 'Categories',
  created() {
    this.fetchCategories;
  },
  methods: {
    ...mapActions(['fetchCategories']),
  },
  computed: {
    ...mapGetters(['allCategories']),
  },
};
</script>

<style scoped></style>
