import icon from '../../icons/lock.png';

const widgetH2 = document.querySelectorAll('.widget h3');
widgetH2.forEach(ele => {
  var newImg = document.createElement('img');
  newImg.classList.add('widget-icon');
  newImg.src =  `${icon}`;
  newImg.alt = 'Description';
  ele.parentNode.insertBefore(newImg, ele);
  
})
