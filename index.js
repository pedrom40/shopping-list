'use strict';

function checkForDuplicateItem (newItem) {

  // check if item already exists
  const listItemNames = $('.shopping-list').find('li .shopping-item');
  let addNewItem = true;

  // go through each item
  listItemNames.map( item => {
    if ($(listItemNames[item]).html() === newItem){
      alert(`Item ${newItem} already in list.`);
      addNewItem = false;
    }
  });

  return addNewItem;

}

function addItemToList (item) {

  $('.shopping-list').append(`
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
  `);

}

function handleFormSubmission () {

  // save new item
  const newItem = $('.js-shopping-list-entry').val();

  // check if item already exists
  let addItem = checkForDuplicateItem(newItem);

  // if addItem is true, then add item to list
  if (addItem) {
    addItemToList(newItem);
  }

}

$(function(){

  // add listener for form submit
  $('#js-shopping-list-form').submit(function(){
    event.preventDefault();

    handleFormSubmission();

  });

});
