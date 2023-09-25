"use strict";

//DEPOIS FAZER COM QUE O SCROLL SEJA DESABILITADO
export default function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
