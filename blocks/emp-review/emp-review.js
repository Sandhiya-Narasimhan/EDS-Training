const children = document.querySelectorAll('.emp-review-wrapper .emp-review > div > div:first-child p:first-child');

children.forEach(child => 

const wrapper = document.createElement('div');
wrapper.className = 'emp-details';

// 3. Insert wrapper before the child in the DOM
child.parentNode.insertBefore(wrapper, child);

// 4. Move the child inside the wrapper
wrapper.appendChild(child);
)
