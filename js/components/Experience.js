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
        let HTMLleft= '';
        let HTMLright= '';
        
        for(let i=0; i<data.length; i++){
        const cv = data[i];
        
            if (i%2===0) {
                HTMLleft +=`
                            <div class="cv">
                                <div class="date">${cv.date}</div>
                                <div class="position">${cv.position}</div>
                                <p>${cv.description}</p>
                            </div>
                            `;
            } else {
                HTMLright +=`
                            <div class="cv">
                                <div class="date">${cv.date}</div>
                                <div class="position">${cv.position}</div>
                                <p>${cv.description}</p>
                            </div>
                            `;
            }
        }
        HTML = `<div class="experience-block col-5 m-r-2">${HTMLleft}</div>
                <div class="experience-block col-5">${HTMLright}</div>`
        DOM.innerHTML = HTML;
    }
}

export default Experience;