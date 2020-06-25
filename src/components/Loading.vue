<template>
  <div>
    <h2>{{ getMessage('loading') }}</h2>
    <div class="loading"></div>
  </div>
</template>

<script>
import { getMessage } from '../helpers';

export default {
  name: 'Loading',
  methods: {
    getMessage,
  },
};
</script>

<style scoped>
.loading {
  margin: 5rem auto;
  border: 24px solid var(--lightGrey);
  border-top: 24px solid var(--primary);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
