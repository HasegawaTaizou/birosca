<template>
  <section class="introduction fade-in-section active">
    <span class="introduction__text">O sabor que faz você voltar sempre</span>
    <router-link :to="'/acais'" class="introduction__link"
      >Cardápio</router-link
    >
  </section>
  <section class="statistics fade-in-section active">
    <div class="stat">
      <div class="stat__number-container">
        <i class="fa-solid fa-plus number__icon"></i>
        <span class="number__text">1000</span>
      </div>
      <span class="stat__text">Seguidores no Instagram</span>
    </div>
    <div class="stat">
      <div class="stat__number-container">
        <i class="fa-solid fa-plus number__icon"></i>
        <span class="number__text">3000</span>
      </div>
      <span class="stat__text">Pedidos de Clientes </span>
    </div>
    <div class="stat">
      <div class="stat__number-container">
        <i class="fa-solid fa-plus number__icon"></i>
        <span class="number__text">30</span>
      </div>
      <span class="stat__text">Variedades Culinárias</span>
    </div>
  </section>
  <section class="instagram fade-in-section">
    <span class="instagram__title"> Acompanhe-nos no instagram </span>
    <img
      src="../assets/img/instragram-1-image.png"
      alt="Instagram Image 1"
      class="instagram__image1"
    />
    <img
      src="../assets/img/instragram-2-image.png"
      alt="Instagram Image 2"
      class="instagram__image2"
    />
    <img
      src="../assets/img/instragram-3-image.png"
      alt="Instagram Image 3"
      class="instagram__image3"
    />
    <div class="instagram__birosca-image">
      <img
        src="../assets/img/instagram-birosca-image.png"
        alt="Birosca Image"
        class="birosca-image__image"
      />
      <span class="birosca-image__text">@biroscadoacai</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
document.addEventListener("DOMContentLoaded", function () {
  function animateNumber(element) {
    const finalValue = parseInt(element.textContent);
    let currentValue = 0;
    const duration = 5000;
    let startTime;

    function updateNumber(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      if (elapsedTime >= duration) {
        element.textContent = finalValue;
      } else {
        const progress = elapsedTime / duration;
        currentValue = finalValue * progress;
        element.textContent = Math.round(currentValue);
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  }

  const numberElements = document.querySelectorAll(".number__text");
  numberElements.forEach((element) => {
    animateNumber(element);
  });
});

function isElementInViewport(el, offsetPercent = 20) {
  const rect = el.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const offset = (viewportHeight * offsetPercent) / 100;
  return rect.top <= viewportHeight - offset && rect.bottom >= offset;
}

function handleScroll() {
  const sections = document.querySelectorAll(".fade-in-section");

  sections.forEach((section) => {
    if (isElementInViewport(section, 20)) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();
</script>

<style scoped>
@import url("../assets/css/home/homeStyle.css");
@import url("../assets/css/home/homeResponsiveStyle.css");
</style>;
