<template>
  <div class="btn-container">
    <button
      v-for="choice in choices"
      :key="choice"
      :class="getClass(choice)"
      @click="onSelect(choice)"
      :disabled="isAnswered"
      v-html="choice"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'Choices',
  props: {
    choices: Array,
    correctAnswer: String,
    isAnswered: Boolean,
    selectedAnswer: String,
  },
  methods: {
    onSelect(choice) {
      this.$emit('submitAnswer', choice);
    },
    getClass(choice) {
      if (this.isAnswered && choice === this.correctAnswer) {
        return 'btn green';
      } else if (
        this.isAnswered &&
        choice === this.selectedAnswer &&
        choice !== this.correctAnswer
      ) {
        return 'btn red';
      } else {
        return 'btn outline-grey';
      }
    },
  },
};
</script>

<style scoped>
.btn-container {
  margin: 0 auto 1rem;
  width: 80%;
  max-width: 470px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
}
</style>
