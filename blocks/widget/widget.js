import icon from '../../icons/lock.png';

const widgetH2 = document.querySelectorAll('.widget h3')
widgetH2.forEach(ele => {

// 2. Create the new image element
var newImg = document.createElement('img');
newImg.classList.add('widget-icon');
newImg.src =  `${icon}`;
newImg.alt = 'Description';

// e. Insert the newImg before the sibling
ele.parentNode.insertBefore(newImg, ele);

})
