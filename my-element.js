import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
    // Define the class for a new element called custom-element
class MyElement extends PolymerElement {
    constructor() {
      super();
      this.textContent = 'I\'m a custom-element.';
    }
  }
  // Register the new element with the browser
customElements.define('my-element', MyElement);
