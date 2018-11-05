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
    const {target} = e
    const {textContent,parentNode} = target;

    parentNode.removeChild(target);

    const input = el(`input`, `item__edit`);
    input.setAttribute(`type`, `text`);
    input.value = textContent; 
    input.addEventListener(`keyup`, commit);

    const button = parentNode.querySelector(`.item__button`);

    parentNode.insertBefore(input, button);
    input.focus();
    }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (event.keyCode === 13){
      console.log(e.target)

      newTextEl = el(`span`, `item__text`, edit)
      newTextEl.appendChild(document.createTextNode(newText))

      const button = parentNode.querySelector(`.item__button`);

      parentNode.insertBefore(newTextEl, button)

      //bæta inn const newText = e.target.value
      //const parentNode = e.target.parentNode
      //parentNode.removeChild(e.target)
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    
    const newItem = el(`li`, `item`)

    const newText = el(`span`, `item__text`, edit)
    newText.appendChild(document.createTextNode(value))

    const newCheckbox = el(`input`, `item__checkbox`, finish)
    newCheckbox.setAttribute(`type`, `checkbox`);

    const newButton = el(`button`, 'item__button', deleteItem)
    newText.appendChild(document.createTextNode(`Eyða`))

    items.appendChild(newItem)
    newItem.appendChild(newText)
    newItem.appendChild(newCheckbox)
    newItem.appendChild(newButton)
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const {target} = e
    const {textContent, parentNode} = target;

    parentNode.remove(target);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
