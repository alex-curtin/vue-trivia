<template>
  <div class="page">
    <h2>Select Your Categories</h2>
    <div class="btn-container">
      <button
        :class="checkSelected(category.id)"
        v-for="category in allCategories"
        :key="category.id"
        @click="selectCategory(category.id)"
        :pressed="checkSelected(category.id)"
      >
        {{ category.name }}
      </button>
    </div>
    <button
      class="btn green"
      v-if="selectedCategories.length > 2"
      @click="selectCategories(selectedCategories)"
    >
      start
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Categories',

  created() {
    this.fetchCategories();
    console.log(this.categories);
  },
  data() {
    return { selectedCategories: [] };
  },
  methods: {
    ...mapActions(['fetchCategories', 'selectCategories']),
    selectCategory(id) {
      console.log(this.allCategories);

      this.selectedCategories.includes(id)
        ? (this.selectedCategories = this.selectedCategories.filter(
            (el) => el !== id
          ))
        : this.selectedCategories.push(id);
    },
    checkSelected(id) {
      return this.selectedCategories.includes(id)
        ? 'btn primary'
        : 'btn outline-primary';
    },
  },
  computed: {
    ...mapGetters(['allCategories']),
  },
};
</script>

<style scoped>
.btn-container {
  max-width: 900px;
  margin: 0 auto 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
</style>
