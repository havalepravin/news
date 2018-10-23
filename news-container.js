import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
import './news-card.js';
import './news-loader.js';
// Define the class for a new element called custom-element
class NewsContainer extends PolymerElement {
  static get template() {
    return html`
      <style>
        .newscontainer{
          border : 1px solid;
          display: flex;
          flex-wrap: wrap;
          font-family: 'Open Sans',sans-serif;
        }
        
      </style>
      <div class = 'newscontainer' id= 'newscontainer'>
        <news-loader id='newsloader'></news-loader>
        <newscard></news-card>
      </div>
      
    `;
  }
  constructor() {
    super();
  }
  ready() {
    super.ready();
    console.log('In ready callback');
    this.$.newsloader.getTopHeadelines();
  }
};
// Register the new element with the browser
customElements.define('news-container', NewsContainer);
