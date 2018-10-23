import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
import {} from './node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import './news-card.js';
class NewsRepeater extends PolymerElement{
    static get properties(){
        return{
            news: {
                type : Array,
                value: function()  {
                    return [
                        {
                            'title': 'Restaurant sedates lobsters with marijuana', 
                            'description': 'A lobster restaurant in Maine says the process is more humane as it lessens their pain before death.', 
                            'urlToImage': 'https://ichef.bbci.co.uk/news/1024/branded_news/BC2A/production/_103507184_gettyimages-467043626.jpg',
                            'url': 'null'
                        }
                    ];
                },
                notify : true
            }
        };
    }
    static get template(){
        return html`
        <div id ="newsWrapper">
        
            <dom-repeat items="{{news}}" as="item" id="repeater">
            <template>
                <div>
                    <news-card 
                        news-title = '{{item.title}}'
                        news-desc = '{{item.description}}'
                        news-image = '{{item.urlToImage}}'
                        news-url = '{{item.url}}'>
                    </news-card>
                </div>
            </template>
            </dom-repeat>
        </div>
        `;
    }
    ready(){
        super.ready();
        console.log('component is ready : '+this.news);
    }
    connectedCallback(){
        super.connectedCallback();
        console.log('component is connected : '+this.news);
    }
    checkCallback(){
        console.log(this.news);
        //this.$.repeater.render();
    }
}
customElements.define('news-repeater', NewsRepeater);

