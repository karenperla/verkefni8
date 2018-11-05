const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

 // TODO láta hluti í _items virka 
 
  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    
    for(let item of items.querySelectorAll(`.item`)){
      const checkbox = item.querySelectorAll(`.item__checkbox`);
      checkbox.addEventListener(`click`, finish);

      const text = item.querySelector(`.item__text`);
      text.addEventListener(`click`, edit);

      const button = item.querySelector(`.item__button`);
      button.addEventListener(`click`, deleteItem);
    }
  }

  function formHandler(e) {
    e.preventDefault();

    const intput = e.target.querySelector(`.form__input`);

    if (intput.value.trim().length > 0) {
      add(input.value);
      input.value = "";
    }
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle(`item--done`)
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
