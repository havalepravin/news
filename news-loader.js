import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
import './news-api-handler.js';
import './news-repeater.js';
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
            },
            headlines : {
                type: Object,
                value : null
            }
        }

    }
    static get template(){
        return html `
                <news-api-handler id='newsAPI'></news-api-handler>
                <div id = 'contents'>
                    
                </div>
            `;
    }
    onComplete(response){
        console.log(response);
        var responseData = JSON.parse(response);
        console.log(responseData);
        this.headlines = responseData.articles;
        this.renderNews();
    }
    onFailure(msg){
        console.log(msg);
    }
    getTopHeadelines(){
        var that =this;
        var options={
            queryParams :{
                country : this.contry,
                category : this.category
            },
            onDataReady : this.onComplete.bind(this),
            onFailure : this.onFailure.bind(this)
        };
        this.$.newsAPI.getdata(options);
    }
    renderNews(){
        var newRepeaterString = '<news-repeater news-data =headlines></news-repeater>'
        var div = document.createElement('div');
        var shadowRoot = div.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = newRepeaterString;
        //var newsRepeater = document.createElement('news-repeater');
        //newsRepeater.setAttribute('news-data', this.headlines.articles);
        this.$.contents.appendChild(shadowRoot);
        //this.querySelector('#contents').innerHTML = newsRepeater;
    }

}

customElements.define('news-loader',NewsLoader);