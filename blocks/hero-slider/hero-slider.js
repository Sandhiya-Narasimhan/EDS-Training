
  const slider = document.querySelector(".hero-slider");
  const slides = slider.children;
  let index = 0;

  // Convert <img> to background-image
  [...slides].forEach(slide => {
    const img = slide.querySelector("img");
    if (img) {
      slide.style.backgroundImage = `url('${img.src}')`;
    }
  });

  function moveSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
  }

  // Auto play
  setInterval(() => {
    index = (index + 1) % slides.length;
    moveSlide(index);
  }, 6000);

  // Arrow (created via JS, no HTML change)
  // const next = document.createElement("button");
  // next.innerHTML = ">";
  // next.className = "hero-arrow next";
  // next.onclick = () => {
  //   index = (index + 1) % slides.length;
  //   moveSlide(index);
  // };

  // document.querySelector(".hero-slider-wrapper").appendChild(next);
