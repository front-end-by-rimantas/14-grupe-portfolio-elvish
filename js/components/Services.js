"use strict";

import data from '../data/Services.js';

class Services{
    constructor(target)
{
    this.target=target;
    this.DOM=null;
    this.init();

}
init() {
    const DOM = document.querySelector(this.target);
    console.log(DOM);
    
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
<p>It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout.</p>
</div>`;
DOM.innerHTML += HTML;

for (let x=0; x<data.length/3; x++){
    
    HTML += `<div class="row col-12 serRow">`;

    DOM.innerHTML = HTML;

for(let i=0; i<data.length/2; i++){
    HTML += `
            <div class="col-4 servBox" >
            <div class="box">
                <div class="servIcon">
            <img src="./img/Services/6.png" alt="#">
            </div>
            <div>  
                <div class="ServName" >
                <h3> Easy to customize</h3>
                </div>
                <p>The standard chunk of Lorem Ipsum used since the is 
                    reproduced below for those interested.</p>
            </div>
        </div>
        </div> `
DOM.innerHTML = HTML;
}
HTML += `</div>`;
DOM.innerHTML = HTML;
}
// this.DOMnumbers = DOM.querySelectorAll('.number');

console.log(data);
}}

export default Services ;