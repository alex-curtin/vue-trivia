<template>
  <header>
    <h1>trivia game</h1>
    <div v-if="numQuestions > 0">
      <span>Score: {{ score }}</span>
      <span>Question #{{ numQuestions }}</span>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["score", "numQuestions"])
  }
};
</script>

<style scoped>
header {
  background: var(--grey);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
}
span {
  margin: 0 1rem;
}
@media (max-width: 576px) {
  header {
    flex-direction: column;
  }
}
</style>
