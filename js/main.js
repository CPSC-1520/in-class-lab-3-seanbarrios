// Enter your code below.

// Selectors
const showResourcesButton = document.getElementById('show-resources');
const resourcesList = document.querySelector('.javascript-resources');
const listItems = document.querySelectorAll('.list-group-item');

// Show/hide resources function
function toggleResources() {
  resourcesList.classList.toggle('d-none');
}

// Bold function
function boldHoveredItem(event) {
  event.target.style.fontWeight = 'bold';
}

// Remove bold function
function unboldHoveredItem(event) {
  event.target.style.fontWeight = 'normal';
}

// Italicize clicked item function
function italicizeClickedItem(event) {
    listItems.forEach(item => item.style.fontStyle = 'normal');
    event.target.style.fontStyle = 'italic';
  }
  

// new event listener, toggle resources when clicked
showResourcesButton.addEventListener('click', toggleResources);

// add event listeners to each item
listItems.forEach(item => {
  // hover event to bold text
  item.addEventListener('mouseover', boldHoveredItem);
  
  // mouseout event to revert to normal text
  item.addEventListener('mouseout', unboldHoveredItem);
  
  // click event to italicize text
  item.addEventListener('click', italicizeClickedItem);
});