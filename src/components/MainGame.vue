<template>
  <div>
    main game
    <Question :question="question" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Question from './Question';

export default {
  name: 'MainGame',
  components: { Question },
  created() {
    this.fetchQuestion();
  },
  methods: {
    ...mapActions(['fetchQuestion']),
  },
  computed: {
    ...mapGetters(['question']),
  },
};
</script>

<style scoped></style>
