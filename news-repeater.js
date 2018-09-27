import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
import './news-card.js';
class NewsRepeater extends PolymerElement{
    static get properties(){
        return{
            newsData: {
                type : Array,
                value()  {
                    return [
                        
                    ];
                },
                notify : true
            }
        };
    }
    static get template(){
        return html`
        <div id ="newsWrapper">
        
            <template is="dom-repeat" items="{{newsData}}" as="item" id="repeater">
                <news-card 
                    news-title = '{{item.title}}'
                    news-desc = '{{item.description}}'
                    news-image = '{{item.urlToImage}}'
                    news-url = '{{item.url}}'>
                </news-card>
            </template>
        
        </div>
        `;
    }
    ready(){
        super.ready();
        console.log('component is ready : '+this.newsData);
    }
    connectedCallback(){
        super.connectedCallback();
        console.log('component is connected : '+this.newsData);
    }
    checkCallback(){
        console.log(this.newsData);
        //this.$.repeater.render();
    }
}
customElements.define('news-repeater', NewsRepeater);

