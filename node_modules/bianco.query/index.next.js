import domToArray from 'bianco.dom-to-array'

/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { string|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
 * @returns { Array } DOM nodes found as array
 */
export default function $(selector, ctx) {
  return domToArray(typeof selector === 'string' ?
    (ctx || document).querySelectorAll(selector) :
    selector
  )
}
