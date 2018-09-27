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
        this.headlines = responseData;
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
            onDataReady : this.onComplete,
            onFailure : this.onFailure
        };
        this.$.newsAPI.getdata(options);
    }
    renderNews(){
        newsRepeater = document.createElement('news-repeater');
        newsRepeater.newsData = this.headlines.articles;
        this.querySelector('#contents').innerHTML = newsRepeater;
    }

}

customElements.define('news-loader',NewsLoader);