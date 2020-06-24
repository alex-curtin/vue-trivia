<template>
  <div class="page">
    <div v-if="question">
      <Question :question="question.question" />
      <Choices
        @submitAnswer="handleSubmitAnswer"
        :choices="choices"
        :isAnswered="isAnswered"
        :selectedAnswer="selectedAnswer"
        :correctAnswer="question.correct_answer"
      />
      <button class="btn primary" v-if="isAnswered" @click="advanceQuestion">Next Question</button>
      <h3 v-if="isAnswered">{{getMessage(result)}}</h3>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import _ from "lodash";
import Question from "../components/Question";
import Choices from "../components/Choices";
import Loading from "../components/Loading";
import { getMessage } from "../helpers";

export default {
  name: "MainGame",
  components: {
    Question,
    Choices,
    Loading
  },
  created() {
    this.fetchQuestion();
  },
  data() {
    return {
      result: "",
      isAnswered: false,
      selectedAnswer: null
    };
  },
  methods: {
    ...mapActions(["fetchQuestion", "addToScore"]),
    handleSubmitAnswer(answer) {
      console.log(answer);
      if (answer === this.question.correct_answer) {
        this.addToScore();
        this.result = "correct";
      } else {
        this.result = "wrong";
      }
      this.isAnswered = true;
      this.selectedAnswer = answer;
    },
    advanceQuestion() {
      this.fetchQuestion();
      this.result = "";
      this.isAnswered = false;
      this.selectedAnswer = null;
    },
    getMessage
  },
  computed: {
    ...mapGetters(["question"]),
    ...mapState(["numQuestions"]),
    choices() {
      const { correct_answer, incorrect_answers } = this.question;
      return _.shuffle([correct_answer, ...incorrect_answers]);
    }
  }
};
</script>

<style scoped>
</style>
