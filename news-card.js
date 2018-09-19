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
            
          }
          .newstitle{
            font-size: 18px;
            font-weight : 600;
            padding-top : 120px;
          }
          .newsdesc{
            margin-top : 0.5rem;
          }
        </style>

        <div class = 'newscard' id = 'newscard'>
          <div >
          </div>
          <div class='newstitle' id='newstitle'>
            Gunman opens fire, injuring three people before he's shot by police at Middleton office building
          </div>
          <div class = 'newsdesc' id='newsdesc'>
            Authorities say three workers and a gunman were wounded at a Middleton software company Wednesday morning
          </div>
        </div>
        
      `;
    }
}
// Register the new element with the browser
customElements.define('news-card', NewsCard);
