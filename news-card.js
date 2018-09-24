import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
// Define the class for a new element called custom-element
class NewsCard extends PolymerElement {
    static get properties(){
      return{
        newsTitle : {
          type : String,
          value : null 
        },
        newsDesc : {
          type : String,
          value : null
        },
        newsImage : {
          type : String,
          value : null
        },
        newsUrl : {
          type : String,
          value : null
        }
      };
    }
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
          .newsimage{
            height : 120px;
            width  : 250px;
          }
          .imagetag{
            height : 100%;
            width : 100%;
          }
          .newstitle{
            margin-top : 0.5rem;
            font-size: 18px;
            font-weight : 600;
          }
          .newsdesc{
            margin-top : 0.5rem;
          }
        </style>

        <div class = 'newscard' id = 'newscard'>
          <div class='newsimage' id='newsimage'>
            <img class= 'imagetag' src='https://ichef.bbci.co.uk/news/1024/branded_news/BC2A/production/_103507184_gettyimages-467043626.jpg'>
          </div>
          <div class='newstitle' id='newstitle'>
            Restaurant sedates lobsters with marijuana
          </div>
          <div class = 'newsdesc' id='newsdesc'>
            A lobster restaurant in Maine says the process is more humane as it lessens their pain before death.
          </div>
        </div>
        
      `;
    }
}
// Register the new element with the browser
customElements.define('news-card', NewsCard);
