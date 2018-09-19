import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
// Define the class for a new element called custom-element
class NewsCard extends PolymerElement {
    static get template(){
      return html`
        <style>
          .newscard{
            background-color: #f1f1f1;
            height : 320px;
            width: 250px;
            margin: 15px 0px 15px 10px;
            text-align: left;
            font-size: 18px;
            font-weight : 600;
          }
          .newstext{
            padding-top : 160px;
          }
        </style>

        <div class = 'newscard' id = 'newscard'>
          <div >
          </div>
          <div class='newstext' id='newstext'>
            This is news app by ngryBird.
          </div>
          
        </div>
        
      `;
    }
}
// Register the new element with the browser
customElements.define('news-card', NewsCard);
