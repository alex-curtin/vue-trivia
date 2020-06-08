<template>
  <div>
    <div v-for="choice in choices" :key="choice">
      <button @click="onSelect(choice)">{{ choice }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Choices',
  props: { choices: Array },
  methods: {
    onSelect(answer) {
      this.$emit('submitAnswer', answer);
    },
  },
};
</script>

<style scoped></style>
