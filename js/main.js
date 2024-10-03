// Enter your code below.

// selectors
const showResourcesButton = document.getElementById('show-resources');
const resourcesList = document.querySelector('.javascript-resources');
const listItems = document.querySelectorAll('.list-group-item');

// show / hide resources
function toggleResources() {
    resourcesList.classList.toggle('d-none');
  }

// bold
function boldHoveredItem(event) {
    event.target.style.fontWeight = 'bold';
  }

// remove bold 
function unboldHoveredItem(event) {
    event.target.style.fontWeight = 'normal';
  }

// italicize clicked item 
function italicizeClickedItem(event) {
    event.target.style.fontStyle = 'italic';
  }

// new event listener, toggle resources when clicked
showResourcesButton.addEventListener('click', toggleResources);

// add event listeners to each list item
listItems.forEach(item => {
    // hover event to bold text
    item.addEventListener('mouseover', boldHoveredItem);
    
    // mouseout event to revert to normal text
    item.addEventListener('mouseout', unboldHoveredItem);
    
    // click event to italicize text
    item.addEventListener('click', italicizeClickedItem);
  });