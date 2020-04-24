"use strict";
import data from '../data/clients-data.js';

class Clients {
    constructor(target) {
        this.target = target;
        this.middleIndex = Math.floor(data.length / 2);
        this.init();
    }

    init() {
        if (this.isValid()) {
            this.render();
        }
    }

    isValid() {
        const DOM = document.querySelector(this.target);
        if (!DOM) {
            throw 'ERROR: target selector is incorrect...';
        }
        this.DOM = DOM;

        if (!Array.isArray(data) || data.length === 0 ) {
            throw 'ERROR: data must be a non-empty array...';
        }

        return true;
    }

    render() {
        const HTML = `
            <div class="testimonials-list">
                <div class="testimonial-block"></div>
            </div>
                <div class="controls"></div>            
            `;
        this.DOM.innerHTML = HTML;
        this.DOMtestimonials = this.DOM.querySelector('.testimonials-list');
        this.DOMcontrols = this.DOM.querySelector('.controls');        

        this.renderTestimonials();
        this.renderControls();
    }

    renderTestimonials() {        
        let HTML = '';
        for(let i=0; i<data.length; i++){
            const block = data[i];
            HTML += `
                <div class="testimonial-block">
                    <i class="fa fa-user-circle-o"></i>
                    <div class="client">${block.client}</div>
                    <div class="company">${block.company}</div>
                    <div class="testimonial">"${block.testimonial}"</div>
                </div>`;
        }
        this.DOMtestimonials.innerHTML = HTML;

        // rodomas vidurinis testimonial
        this.DOMtestimonials.style.marginLeft = '-100%';
    }

    renderControls() {
        let HTML ='';
        
        for(let t=0; t<data.length; t++) {
            if (t===this.middleIndex) {
                HTML += `<div class="ctr control-${t+1} active">
                        <span></span>
                    </div>`;
            } else{
                HTML += `<div class="ctr control-${t+1}">
                        <span></span>
                    </div>`;
            }
        }
        this.DOMcontrols.innerHTML = HTML;

        const DOMctr = this.DOMcontrols.querySelectorAll('.ctr');
        //arrows.forEach( arrow => arrow.addEventListener('click', updateTestimonials) );
        DOMctr.forEach( ctr => ctr.addEventListener('click', () => {
            this.DOMcontrols.querySelector('.ctr.active').classList.remove('active');
            ctr.classList.add('active');
        }));
        
        // aktyvus vidurinis control
        // this.DOMactiveControl = document.querySelector('.control-'+ (this.middleIndex+1));        
        // this.DOMactiveControl.classList.add("active");
    }
}
export default Clients;

// .slide {
//     transform: translate(-100%, 0);
//     transition: transform 1s linear;
// }