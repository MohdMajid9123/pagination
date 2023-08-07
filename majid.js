let link = document.getElementsByClassName("link");
let currentValue = 1;

const activeLink = (event) => {
  for (const l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  currentValue = event.target.value;
};

// prevBtn code hai
const prevBtn = () => {
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove("active");
    }

    currentValue--;
    link[currentValue - 1].classList.add("active");
  }
};

//nextBtn code hai

const nextBtn = () => {
  if (currentValue < 6) {
    for (l of link) {
      l.classList.remove("active");
    }

    currentValue++;
    link[currentValue - 1].classList.add("active");
  }
};
