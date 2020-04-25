"use strict";

import data from '../data/Services.js';

class Servicess{
    constructor(target)
{
    this.target=target;
    this.DOM=null;
    this.init();

}
init() {
    const DOM = document.querySelector(this.target);
    if ( !DOM ) {
        throw 'ERROR: header target location was not found.';
    }
    this.DOM = DOM;
    this.render();
}
const DOM = document.querySelector(this.target);
if(!DOM){
    throw 'ERROR: OMG... go fix Achievements!!!';
}
let HTML = '';

for(let i=0; i<data.length; i++){
    const ach = data[i];
    HTML += `
        <div class="col-3 achievements">
        <i class="fa fa-${ach.icon}"></i>
        <div class="number" data-num=${ach.number}>${ach.number}</div>
        <p>${ach.title}</p>
        </div>`
}
DOM.innerHTML = HTML;
this.DOMnumbers = DOM.querySelectorAll('.number');
}


// export default Services ;