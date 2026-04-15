const slidesData = [
    {
      image: "https://images.unsplash.com/photo-1581091870627-3fd8e5f60b79",
      title: "Super IT Service For Digital Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod to incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      title: "Smart Technology Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod to incididunt ut labore et dolore magna aliqua."
    }
  ];
 
  const carousel = document.createElement("div");
  carousel.className = "carousel";
 
  slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    if (index === 0) slideDiv.classList.add("active");
 
    slideDiv.innerHTML = `
      ${slide.image}
 
      <div class="overlay"></div>
 
      <div class="content">
        <h1>${slide.title}</h1>
        <p>${slide.desc}</p>
 
        <div class="buttons">
          <button class="primary">Read More</button>
          <button class="secondary">Contact Us</button>
        </div>
 
        <!-- ✅ Social Media Icons -->
        <div class="social">
          <span title="Facebook">📘</span>
          <span title="Twitter">🐦</span>
          <span title="Instagram">📸</span>
          <span title="LinkedIn">💼</span>
        </div>
      </div>
    `;
 
    carousel.appendChild(slideDiv);
  });
 
  // Navigation arrows
  const prev = document.createElement("span");
  prev.className = "nav prev";
  prev.innerHTML = "‹";
 
  const next = document.createElement("span");
  next.className = "nav next";
  next.innerHTML = "›";
 
  carousel.appendChild(prev);
  carousel.appendChild(next);
  document.body.appendChild(carousel);
 
  // Slider logic
  const slides = document.querySelectorAll(".slide");
  let current = 0;
 
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
 
  next.onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
 
  prev.onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };
 
  // Auto-slide
  setInterval(() => next.click(), 5000);
 
