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
                <news-api-handler id='newsAPI'></news-api-handler>
            `;
    }
    onComplete(response){
        console.log(response);
        var responseData = JSON.parse(response);
        console.log(responseData);
    }
    onFailure(msg){
        console.log(msg);
    }
    getTopHeadelines(){
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

}

customElements.define('news-loader',NewsLoader);