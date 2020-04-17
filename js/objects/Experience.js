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
        
        for(let i=0; i<data.length; i++){
        const cv = data[i];
        
            if (i%2===0) {
                HTML +=`<div class="experience-block col-5 m-r-2">
                            <div class="cv">
                                <div class="date">${cv.date}</div>
                                <div class="position">${cv.position}</div>
                                <p>${cv.description}</p>
                            </div>
                        </div>`;
            } else {
                HTML +=`<div class="experience-block col-5">
                            <div class="cv">
                                <div class="date">${cv.date}</div>
                                <div class="position">${cv.position}</div>
                                <p>${cv.description}</p>
                            </div>
                        </div>`;
            }
        }        
        DOM.innerHTML = HTML;
    }
}

export default Experience;