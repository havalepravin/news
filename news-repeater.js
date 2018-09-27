import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
import './news-card.js';
class NewsRepeater extends PolymerElement{
    static get properties(){
        return{
            newsData: Array
        }
    }
    static get template(){
        return html`
            <template is='dom-repeate' items='{{newsData}}'>
                <news-card 
                    news-title = 'item.title'
                    news-desc = 'item.description'
                    news-image = 'item.urlToImage'
                    news-url = 'item.url'>
                </news-card>
            </template>
        `;
    }
}