<template>
  <div>
    <div v-if="question">
      <div v-if="answered">{{ result }}</div>
      <Question :question="question.question" />
      <Choices :choices="choices" @submitAnswer="handleSubmitAnswer" />
      <button v-if="answered">Next Question</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import shuffle from 'shuffle-array';
import Question from '../components/Question';
import Choices from '../components/Choices';

export default {
  name: 'MainGame',
  components: { Question, Choices },
  created() {
    this.fetchQuestion();
  },
  data() {
    return {
      answered: false,
      result: '',
    };
  },
  methods: {
    ...mapActions(['fetchQuestion', 'addToScore']),
    handleSubmitAnswer(answer) {
      console.log(answer);
      if (answer === this.question.correct_answer) {
        this.addToScore();
        //display 'correct answer'
        this.result = 'correct';
      } else {
        //display 'incorrect'
        this.result = 'wrong';
        //mark correct answer
      }
    },
  },
  computed: {
    ...mapGetters(['question']),
    choices() {
      const { correct_answer, incorrect_answers } = this.question;
      return shuffle([correct_answer, ...incorrect_answers]);
    },
  },
};
</script>

<style scoped></style>
