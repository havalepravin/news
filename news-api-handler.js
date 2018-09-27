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
    getRequestURL(queryParams){
        return this.V2THAPIBaseUrl + 'country=' + queryParams.country + '&category=' + queryParams.category + '&apiKey=' + this.APIkey;
    }
    getdata(options){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              xhr.status === 200 ? options.onDataReady(xhr.responseText).bind(this) : options.onFailure(error).bind(this)
            }
        }
        var requestURL = this.getRequestURL(options.queryParams);
        xhr.open('GET', requestURL);
        xhr.send()
    }
}
customElements.define('news-api-handler',NewsApiHandler);
