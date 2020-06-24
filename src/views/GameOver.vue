<template>
  <div class="page">
    <h2>Game Over</h2>
    <h3>You answered {{ percentCorrect }}% correctly!</h3>
    <button @click="playAgain" class="btn green">play again</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from '../router';

export default {
  name: 'GameOver',
  methods: {
    ...mapActions(['restart']),
    playAgain() {
      this.restart();
      router.push('/');
    },
  },
  computed: {
    ...mapState(['score', 'numQuestions']),
    percentCorrect() {
      return (this.score / this.numQuestions) * 100;
    },
  },
};
</script>

<style scoped></style>
