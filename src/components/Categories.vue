<template>
  <div class="page">
    <h2>Select Categories</h2>
    <div class="ui grid center">
      <button
        v-for="category in allCategories"
        :key="category.id"
        @click="selectCategory(category.id)"
        class="ui button four wide column center"
        :class="checkSelected(category.id)"
      >
        {{ category.name }}
      </button>
    </div>
    <button
      v-if="selectedCategories.length > 2"
      class="ui button"
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
  },
  data() {
    return { selectedCategories: [] };
  },
  methods: {
    ...mapActions(['fetchCategories', 'selectCategories']),
    selectCategory(id) {
      this.selectedCategories.includes(id)
        ? (this.selectedCategories = this.selectedCategories.filter(
            (el) => el !== id
          ))
        : this.selectedCategories.push(id);
    },
    checkSelected(id) {
      return this.selectedCategories.includes(id) && 'selected';
    },
  },
  computed: {
    ...mapGetters(['allCategories']),
  },
};
</script>

<style scoped>
.page {
  text-align: center;
}

.center {
  margin: 10px auto;
}
.selected {
  background-color: lightblue;
}
</style>
