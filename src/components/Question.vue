<template>
  <div>
    {{ question.question }}
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['question'],
};
</script>

<style scoped></style>
