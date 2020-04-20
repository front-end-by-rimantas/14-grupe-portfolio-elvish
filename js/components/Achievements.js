"use strict";
import data from '../data/achievements-data.js';

class Achievements {
    constructor(target){
        this.target = target;
        this.render();
    }

    render(){
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
                <div class="number">${ach.number}</div>
                <p>${ach.title}</p>
                </div>`
            //console.log(HTML);
        }
        DOM.innerHTML = HTML;
    }
}
export default Achievements;