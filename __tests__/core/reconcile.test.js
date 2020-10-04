const {
  setBooleanProp,
  removeBooleanProp,
  isEventProp,
  extractEventName,
  isCustomProp,
  setValue,
  setProp,
  removeProp,
  setProps,
  updateProp,
  updateProps,
  addEventListeners,
  createElement,
  changed,
  updateElement,
  generateVTree
} = require("../../lib/core/Reconcile");

test('setBooleanProp True', () => {
  var el = document.createElement("input")
  el.type = "checkbox"
  setBooleanProp(el, 'checked', true)
  var checked = el.checked
  expect(checked).toBe(true);
});

test('setBooleanProp Attribute True', () => {
  var el = document.createElement("input")
  el.type = "checkbox"
  setBooleanProp(el, 'checked', true)
  var checked = el.getAttribute('checked')
  expect(checked).toBe('checked');
});

test('setBooleanProp False', () => {
  var el = document.createElement("input")
  el.type = "checkbox"
  setBooleanProp(el, 'checked', false)
  var checked = el.checked
  expect(checked).toBe(false);
});

test('removeBooleanProp', () => {
  var el = document.createElement("input")
  el.type = "checkbox"
  setBooleanProp(el, 'checked', true)
  removeBooleanProp(el, 'checked')
  var checked = el.checked
  expect(checked).toBe(false);
});

test('removeBooleanProp Attribute', () => {
  var el = document.createElement("input")
  el.type = "checkbox"
  setBooleanProp(el, 'checked', true)
  removeBooleanProp(el, 'checked')
  var checked = el.getAttribute("checked")
  expect(checked).toBe(null);
});

test('isEventProp - Check if a prop is an event', () => {
  const isEvent = isEventProp('onClick')
  expect(isEvent).toBe(true);
});

test('isEventProp - Check if a prop is not an event', () => {
  const isEvent = isEventProp('click')
  expect(isEvent).toBe(false);
});

test('extractEventName - Get event name', () => {
  const eventName = extractEventName('onClick')
  expect(eventName).toBe('click');
});

test('isCustomProp - Check if prop is custom eg. Events', () => {
  const isCustom = isCustomProp('onClick')
  expect(isCustom).toBe(true);
});

test('setValue - set value to input element', () => {
  let el = document.createElement('input')
  setValue(el, 'message')
  const elValue = el.value
  expect(elValue).toBe('message');
});

test('setProp - Add prop to an html element 1', () => {
  let el = document.createElement('input')
  setProp(el, 'value', 'message')
  const elValue = el.value
  expect(elValue).toBe('message');
});

test('setProp - Add prop to an html element 2', () => {
  let el = document.createElement('input')
  setProp(el, 'class', 'pretty')
  const isPretty = el.classList.contains('pretty')
  expect(isPretty).toBe(true);
});

test('removeProp - Remove prop to an html element (text)', () => {
  let el = document.createElement('input')
  setProp(el, 'class', 'pretty')
  removeProp(el, 'class', 'pretty')
  const isPretty = el.classList.contains('pretty')
  expect(isPretty).toBe(false);
});

test('removeProp - Remove prop to an html element (boolean)', () => {
  let el = document.createElement('input')
  setProp(el, 'type', 'checkbox')
  setProp(el, 'checked', true)
  removeProp(el, 'checked', true)
  const checked = el.checked
  expect(checked).toBe(false);
});

test('setProps - Add multiple props to an element (class)', () => {
  let el = document.createElement('input')
  const props = { class: 'pretty', style: 'color:red', onClick: () => { } }
  setProps(el, props)
  const isPretty = el.classList.contains('pretty')
  expect(isPretty).toBe(true);
});

test('setProps - Add multiple props to an element (style)', () => {
  let el = document.createElement('input')
  const props = { class: 'pretty', style: 'color:red', onClick: () => { } }
  setProps(el, props)
  const color = el.style.color
  expect(color).toBe('red');
});

test('updateProp - Add style', () => {
  let el = document.createElement('input')
  updateProp(el, 'style', 'color:red')
  const color = el.style.color
  expect(color).toBe('red');
});

test('updateProps - Updates multiple props', () => {
  let el = document.createElement('input')
  updateProp(el, 'style', 'color:red')
  const oldProps = { style: 'color:red' }
  const newProps = { style: 'color:blue', value: 'blue' }
  updateProps(el, newProps, oldProps)
  const color = el.style.color
  const value = el.value
  expect(color == value).toBe(true);
});


test('addEventListeners - Check for existing event', () => {
  let el = document.createElement('input')
  addEventListeners(el, { onclick: () => { }, onkeyup: () => { } })
  const hasEvent = el.onclick ? true : false
  expect(hasEvent).toBe(true);
});

test('addEventListeners - Check for non existing event', () => {
  let el = document.createElement('input')
  addEventListeners(el, { onkeyup: () => { } })
  const hasEvent = el.onclick ? true : false
  expect(hasEvent).toBe(false);
});

test('createElement - Without children', () => {
  const hTree = { type: 'div', props: {}, children: [] }
  const el = createElement(hTree)
  const html = '<div></div>'
  expect(el.outerHTML).toBe(html);
});

test('createElement - With children', () => {
  const hTree = {
    type: 'div',
    children: [
      { type: 'div', children: ['First child'], props: {} },
      { type: 'div', children: ['Second child'], props: {} }
    ],
    props: {}
  }
  const el = createElement(hTree)
  const html = '<div><div>First child</div><div>Second child</div></div>'
  expect(el.outerHTML).toBe(html);
});

test('createElement - With children', () => {
  const hTree = {
    type: 'div',
    children: [
      { type: 'div', children: ['First child'], props: {} },
      { type: 'div', children: ['Second child'], props: {} }
    ],
    props: {}
  }
  const el = createElement(hTree)
  const html = '<div><div>First child</div><div>Second child</div></div>'
  expect(el.outerHTML).toBe(html);
});

test('changed - checks if two nodes are same (test for same)', () => {
  const node1 = {
    type: 'div',
    props: {}
  }
  const node2 = {
    type: 'div',
    props: {}
  }
  let result = changed(node1, node2)
  expect(result).toBe(false);
});

test('changed - checks if two nodes are same (test for different)', () => {
  const node1 = {
    type: 'div',
    props: {}
  }
  const node2 = "changed"
  let result = changed(node1, node2)
  expect(result).toBe(true);
});

test('changed - checks if two nodes are same (test for forced update)', () => {
  const node1 = {
    type: 'div',
    props: {
      key: 'key'
    },
  }
  const node2 = {
    type: 'div',
    props: {}
  }
  let result = changed(node1, node2)
  expect(result).toBe(true);
});

test('updateElement - Initial condition (empty root)', () => {
  let root = document.createElement('div')
  const newNode = {
    type: 'div',
    children: [
      { type: 'div', children: ['First child'], props: {} },
      { type: 'div', children: ['Second child'], props: {} }
    ],
    props: {}
  }
  updateElement(root, newNode)
  const html = '<div><div>First child</div><div>Second child</div></div>'
  expect(root.innerHTML).toBe(html);
});

test('updateElement - Test element removal', () => {
  let root = document.createElement('div')
  const newNode = {
    type: 'div',
    children: [
      { type: 'div', children: ['First child'], props: {} },
      { type: 'div', children: ['Second child'], props: {} }
    ],
    props: {}
  }
  updateElement(root, newNode)
  updateElement(root, null, newNode)
  const html = ''
  expect(root.innerHTML).toBe(html);
});

test('updateElement - Test element changed', () => {
  let root = document.createElement('div')
  const oldNode = {
    type: 'div',
    children: [
      { type: 'div', children: ['First child'], props: {} },
      { type: 'div', children: ['Second child'], props: {} }
    ],
    props: {}
  }

  const newNode = {
    type: 'div',
    children: [
      { type: 'div', children: ['First child1'], props: {} },
      { type: 'div', children: ['Second child2'], props: { style: "color:red" } }
    ],
    props: {}
  }
  updateElement(root, newNode)
  updateElement(root, newNode, oldNode)
  const html = "<div><div>First child1</div><div style=\"color:red\">Second child2</div></div>"
  expect(root.innerHTML).toBe(html);
});


test('Generate VTree', () => {
  let root = document.createElement('div')
  const stringVTree = "<div>hi<div>First child1</div><div style=\"color:red\">Second child2</div></div>"
  let domParser = new DOMParser()
  let domVTree = domParser.parseFromString(stringVTree, 'text/html').body.firstChild
  let VTree = generateVTree(domVTree)
  updateElement(root, VTree)
  expect(root.innerHTML).toBe(stringVTree);
});
