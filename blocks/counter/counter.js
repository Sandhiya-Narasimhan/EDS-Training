 const container = document.createElement("div");
  container.className = "stats-container";
  document.body.appendChild(container);
 
  // ✅ Image icons 
  const statsData = [
    { img: "../image/Designer (21)", target: 523, label: "Projects Done" },
    { img: "./image/Business Partners.png", target: 29, label: "Business Partners" },
    { img: "images/headset.png", target: 230, label: "Clients Support" },
    { img: "images/trophy.png", target: 69, label: "Awards Winning" }
  ];
 
  statsData.forEach(item => {
    const box = document.createElement("div");
    box.className = "stat-box";
 
    // ✅ Logo Image
    const iconImg = document.createElement("img");
    iconImg.src = item.img;
    iconImg.className = "stat-icon";
    iconImg.alt = item.label;
 
    const number = document.createElement("div");
    number.className = "stat-number";
    number.setAttribute("data-target", item.target);
    number.innerText = "0";
 
    const label = document.createElement("div");
    label.className = "stat-label";
    label.innerText = item.label;
 
    box.appendChild(iconImg);   // 👈 image on TOP
    box.appendChild(number);
    box.appendChild(label);
 
    container.appendChild(box);
  });
 
  // ✅ Counter animation
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;
 
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.dataset.target;
      const count = +counter.innerText;
      const increment = target / speed;
 
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });

 
