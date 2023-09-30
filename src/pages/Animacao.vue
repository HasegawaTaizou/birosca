<template>
  <div class="loading-container" v-if="isLoading">
    <span class="loading__text">Aguarde...</span>
    <div class="loading__dots">
      <div class="dot" v-for="index in 4" :key="index"></div>
    </div>
    <div v-if="!isLoading">
      <h1>CARREGOU</h1>
    </div>
  </div>
  <div v-if="isLoading" class="loading-background"></div>
</template>
    
  <script>
export default {
  name: "Animacao",
  computed: {
    isLoading() {
      return this.$store.state.loading;
    },
  },
};
</script>
    
<style scoped>
.loading-container {
  position: absolute;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 38px;
  height: 100vh; /* Ajuste conforme necessário */
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  z-index: 1;
}

.loading__text {
  font-family: "Bebas Neue", sans-serif;
  font-size: 4rem;
  color: var(--text-color);
}

.loading__dots {
  margin-left: 12px;
  display: flex;
}
.dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff; /* Cor das bolinhas, ajuste conforme necessário */
  margin: 0 5px;
  animation: bounce 1s infinite alternate; /* Ajuste conforme necessário */
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.dot:nth-child(1) {
  animation-delay: 0.2s;
}

.dot:nth-child(2) {
  animation-delay: 0.4s;
}

.dot:nth-child(3) {
  animation-delay: 0.6s;
}

.dot:nth-child(4) {
  animation-delay: 0.8s;
}

.loading-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  /* background-color: var(--section-background-color); */
  background-color: #000;
  backdrop-filter: blur(8px);
  z-index: -1;
}
</style>;
    