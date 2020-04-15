"use strict";

  class SectionHeading {
     constructor( element ) {
        this.element = element;
        this.d = element.dataset;
        this.text = this.d.h2;
        this.boldText = this.d.h2Bold;
        this.place = this.d.place;

        this.render();
     }

      render() {

            if (this.place === "first" ) {
                let HTML = `<div class="heading"><h2><span class="bold">${this.boldText} </span>${this.text}</h2></div>`;
                this.element.insertAdjacentHTML('afterbegin', HTML);
            }

            if (this.place === "second" ) {
                let HTML = `<div class="heading"><h2>${this.text} <span class="bold">${this.boldText}</span></h2></div>`;
                this.element.insertAdjacentHTML('afterbegin', HTML);
            }
            
            if (this.place === "all" ) {
                let HTML = `<div class="heading"><h2 class="bold">${this.boldText} </h2></div>`;
                this.element.insertAdjacentHTML('afterbegin', HTML);
            }
        } 
    }
     
     
        
           
            

  export default SectionHeading; 

 
  
