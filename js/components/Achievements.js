"use strict";
import data from '../data/achievements-data.js';

class Achievements {
    constructor(target){
        this.target = target;
        this.render();
        this.updateCount();
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
        }
        DOM.innerHTML = HTML;
    }

    updateCount(){
        
        let counter = [0, 0, 0, 0];
        let step = 100;
        let increment = 0;
        const query = document.querySelectorAll('.number'); 
        const numbersSection = document.querySelector('.achievements');
    
        let counterFunction = function() {
           if (window.scrollY + window.innerHeight > numbersSection.offsetTop){
                for(let i=0; i<data.length; i++){
                    query[i].textContent = counter[i];
                    increment = Math.round(data[i].number / step);
                    if (counter[i] >= data[i].number){
                        counter[i] = data[i].number;
                    clearInterval(this);
                    } else {
                        counter[i] += increment;
                    }
                }
            }
        }
        setInterval(counterFunction, 20);
        
    }
}
export default Achievements;

