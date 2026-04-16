
  const data = {
    all: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1552664730-d307ca884978"
    ],
    creative: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1542744095-291d1f67b221"
    ],
    design: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    ],
    development: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ],
    management: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83"
    ]
  };
 
  /* Container */
  const section = document.createElement("div");
  section.className = "gallery-section";
 
  /* Buttons */
  const buttons = document.createElement("div");
  buttons.className = "filter-buttons";
 
  const keys = [
    { id: "all", label: "All Work" },
    { id: "creative", label: "Creative" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "management", label: "Management" }
  ];
 
  keys.forEach((btn, i) => {
    const button = document.createElement("button");
    button.textContent = btn.label;
    button.dataset.type = btn.id;
    if (i === 1) button.classList.add("active"); // Creative default
    buttons.appendChild(button);
  });
 
  /* Image Grid */
  const grid = document.createElement("div");
  grid.className = "image-grid";
 
  section.appendChild(buttons);
  section.appendChild(grid);
  document.body.appendChild(section);
 
  function loadImages(type) {
  grid.innerHTML = "";
 
  const imgs = [...data[type]];
 
  imgs.forEach((img, index) => {
    const box = document.createElement("div");
    box.className = `img-box rotate-${index % 3}`;
    box.style.animationDelay = `${index * 0.15}s`;
 
    box.innerHTML = `<img src="${img}" alt="Image">`;
    grid.appendChild(box);
  });
}
 
  loadImages("creative");
 
  buttons.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      document.querySelectorAll(".filter-buttons button")
        .forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      loadImages(e.target.dataset.type);
    }
  });

 
