  // ✅ Counter animation
  const counters = document.querySelectorAll(".counter-wrapper .counter.block h3");
  const speed = 200;
 
  counters.forEach(counter => {
    const updateCount = () => {
      const countValue = counter.getAttribute("id");
      const target = +countValue;
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

 
