let scrollContainer = document.querySelector(".carousel");
let card = document.querySelector(".card");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
let dotsContainer = document.querySelector(".carousel-dots");

let cardsInViewport = getCardsInViewport();
let totalCards = document.querySelectorAll(".card").length;
let currentCardIndex = 0;

function getCardsInViewport() {
  if (window.innerWidth >= 900) {
    return 3; 
  } else if (window.innerWidth >= 600) {
    return 2; 
  } else {
    return 1;
  }
}

function createDots() {
  for (let i = 0; i < Math.ceil(totalCards / cardsInViewport); i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }
}

function updateActiveDot() {
  let dots = document.querySelectorAll(".dot");
  let activeDotIndex = Math.floor(currentCardIndex / cardsInViewport);
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeDotIndex);
  });
}

createDots();
updateActiveDot();

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += card.clientWidth * cardsInViewport + 16;
  currentCardIndex = Math.min(currentCardIndex + cardsInViewport, totalCards - 1);
  updateActiveDot();
});

backbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= card.clientWidth * cardsInViewport + 16;
  currentCardIndex = Math.max(currentCardIndex - cardsInViewport, 0);
  updateActiveDot();
});

window.addEventListener("resize", () => {
  cardsInViewport = getCardsInViewport();
  dotsContainer.innerHTML = "";
  createDots();
  updateActiveDot();
});
