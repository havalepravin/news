import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';
class NewsApiHandler extends PolymerElement{
    static get properties(){
        return{
            APIkey:{
                type:'String',
                value:'25bd54e72c994640b5b39b100a67107c'
            },
            V2THAPIBaseUrl:{
                type:'String',
                value:'https://newsapi.org/v2/top-headlines?'
            },
            V2EveryAPIBaseUrl:{
                type:'String',
                value:'https://newsapi.org/v2/everything?'
                
            }
        }
    }
    getURL(queryParams){

    }
    getdata(options){
        
    }
}
customElements.define('news-api-handler',NewsApiHandler);
