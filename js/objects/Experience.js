"use strict";
import data from '../data/experience-data.js';

class Experience {
    constructor(target) {
        this.target = target;

        this.render()
    }

    render () {
        const DOM = document.querySelector(this.target);
        if(!DOM){
            throw 'ERROR: OMG... go fix Experience!!!';
        }
        let HTML = '';
        const columns = 2;
        for(let i=0; i<columns; i++){
            console.log(i);
            for(let i=0; i<data.length; i++){
            const cv = data[i];
            console.log(cv.position);
            //HTML +=``;
            }
        }
        //DOM.innerHTML = HTML;
    }

}

export default Experience;