"use strict";

import data from '../data/Services.js';

class Services{
    constructor(target)
{
    this.target=target;
    this.step =0;
    this.DOM=null;
    this.init();

}
init() {
    const DOM = document.querySelector(this.target);
    
    if ( !DOM ) {
        throw 'ERROR: Services target location was not found.';
    }
    this.DOM = DOM;
    this.render();
}

render(){
const DOM = document.querySelector(this.target);
let HTML = '';

HTML += `<div class="col-6 m-l-3">
<p>${data[0].parLong}</p>
</div>`;
DOM.innerHTML += HTML;

    HTML += `<div class="row col-12 serRow">`;

    DOM.innerHTML = HTML;
        for (let i=-0; i<data.length; i++){
            HTML += `
                    <div class="col-4 servBox" >
                    <div class="box">
                        <div class="servIcon">
                    <img src=${data[i].photo} alt="#">
                    </div>
                    <div>  
                        <div class="ServName" >
                        <h3>${data[i].name}</h3>
                        </div>
                        <p>${data[i].par}</p>
                    </div>
                </div>
                </div> `
        DOM.innerHTML = HTML;
       
    }  

HTML += `</div>`;
DOM.innerHTML = HTML;

}}

export default Services ;