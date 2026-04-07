  const tabBlock = document.querySelector('.hover.block');
  const tabBlockChildren = tabBlock.children;
  for(let child of tabBlockChildren){
    child.classList.add('tab-container');
  }

  const tablinks = document.querySelectorAll ('.hover.block div div:first-child');
  tablinks.forEach(item => {
    item.addEventListener('mouseenter', () => {
      let sibling = item.parentElement.children[1];
      sibling.style.display = 'block';
      sibling.classList.add('active');

    });
    item.addEventListener('mouseleave', () => {
      let sibling = item.parentElement.children[1];
      sibling.style.display = 'none';
      sibling.classList.remove('active');
    });
  })
