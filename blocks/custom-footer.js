
document.querySelectorAll(
    '.custom-footer > div > div:first-child p img'
  ).forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      icon.style.opacity = '0.8';
    });

    icon.addEventListener('mouseleave', () => {
      icon.style.opacity = '1';
    });
  });
