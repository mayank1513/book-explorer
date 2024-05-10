<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  filter: blur(4px);
  background: linear-gradient(
    to right,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  background-size: 200%;
  animation: loading 1s infinite linear alternate;
}
@keyframes loading {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 0%;
  }
}
</style>
