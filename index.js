'use strict';

// adding item functions
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

// check/uncheck functions
function checkItem (itemToCheck, btnClicked) {

  // check the item
  $(itemToCheck).addClass('shopping-item__checked');

  // change button text
  $(btnClicked).html('uncheck');

}

function uncheckItem (itemToUncheck, btnClicked) {

  $(itemToUncheck).removeClass('shopping-item__checked');

  // change button text
  $(btnClicked).html('check');

}

function toggleItemChecking (checkBtnClicked) {

  // get parent li of check btn clicked
  const parentLi = $(checkBtnClicked).closest('li');

  // get item name that click referred to
  const itemToCheck = $(parentLi).find('.shopping-item');

  // check if item checked
  const itemClickedClass = $(itemToCheck).attr('class');

  // if item not checked
  if (itemClickedClass === 'shopping-item'){

    // check the item
    checkItem(itemToCheck, checkBtnClicked);

  }

  // if item already checked
  else {

    // uncheck item
    uncheckItem(itemToCheck, checkBtnClicked);

  }

}

function handleBtnClicks () {

  // make sure a check/uncheck btn was clicked
  if ($(event.target).html() === 'check' || $(event.target).html() === 'uncheck'){

    toggleItemChecking(event.target);

  }

  else if ($(event.target).html() === 'delete') {

    // delete item
    console.log(event.target);

  }

}

// validate check btns
function correctCheckBtns () {

  // find checked items
  const checkedItems = $('.shopping-list').find('.shopping-item__checked');
  $(checkedItems).map( item => {

    const parentLi = $(checkedItems[item]).closest('li');
    const checkBtn = $(parentLi).find('.shopping-item-toggle span');

    $(checkBtn).html('uncheck');

  });

}

$(function(){

  // correct btn text for checked items
  correctCheckBtns();

  // add listener for form submit
  $('#js-shopping-list-form').submit(function(){
    event.preventDefault();

    handleFormSubmission();

  });

  // add listener for check button clicks
  $('.shopping-list').click( event => {

    handleBtnClicks();

  });

});
