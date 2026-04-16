
  document.querySelectorAll('.custom-header li').forEach(item => {
    let timeout;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      const submenu = item.querySelector('ul');
      if (submenu) submenu.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
      const submenu = item.querySelector('ul');
      timeout = setTimeout(() => {
        if (submenu) submenu.style.display = 'none';
      }, 150);
    });
  });
