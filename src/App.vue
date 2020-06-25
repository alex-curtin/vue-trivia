<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno&family=Open+Sans&display=swap');

:root {
  --primary: #3d76e1;
  --white: #fff;
  --grey: #535052;
  --lightGrey: #ccc;
  --green: #44ba26;
  --red: #ed461d;
}
* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

h1 {
  font-family: 'MuseoModerno', sans-serif;
}
h2 {
  margin: 2rem 0;
}
h3 {
  margin: 1rem 0;
}

.page {
  text-align: center;
  padding: 0 10vw 2rem;
}

.text-center {
  text-align: center;
}
.btn {
  padding: 0.4rem;
  border: 2px solid;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  cursor: pointer;
}
.btn:disabled {
  cursor: unset;
}
.btn.primary,
.btn.outline-primary:hover:enabled {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}
.btn.primary:hover:enabled,
.btn.outline-primary {
  background: var(--white);
  border-color: var(--primary);
  color: var(--primary);
}
.btn.grey,
.btn.outline-grey:hover:enabled {
  background: var(--grey);
  border-color: var(--grey);
  color: var(--white);
}
.btn.grey:hover:enabled,
.btn.outline-grey {
  color: var(--grey);
  background: var(--white);
}
.btn.green {
  background: var(--green);
  border-color: var(--green);
  color: var(--white);
}
.btn.green:hover:enabled {
  color: var(--green);
  border-color: var(--green);
  background: var(--white);
}
.btn.red {
  background: var(--red);
  border-color: var(--red);
  color: var(--white);
}
.btn.red:hover:enabled {
  color: var(--red);
  background: var(--white);
}
</style>
