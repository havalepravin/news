import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
import './news-api-handler.js'
class NewsLoader extends PolymerElement{
    static get properties(){
        return{
            contry : {
                type : String,
                value : 'us'
            },
            category : {
                type: String,
                value :'general'
            }
        }

    }
    static get template(){
        return html `
                <news-api-handler id='newAPI'></news-api-handler>
            `;
    }
    onComplete(response){

    }
    onFailure(msg){

    }
    getTopHeadelines(){
        
    }

}

customElements.define('news-loader',NewsLoader);