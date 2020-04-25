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
                let HTML = `<div class="main-title"<div class="heading"><h2 class="section-heading">
                <span class="bold">${this.boldText} </span>${this.text}</h2>
                <div class="main-title-border"> <i class="fa fa-asterisk" ></i>
                </div></div></div>`;
                this.element.insertAdjacentHTML('afterbegin', HTML);
            }

            if (this.place === "second" ) {
                let HTML = `<div class="main-title"><div class="heading"><h2 class="section-heading">
                ${this.text} <span class="bold">${this.boldText}</span></h2>
                <div class="main-title-border"> <i class="fa fa-asterisk" ></i>
                </div></div></div>`;
                this.element.insertAdjacentHTML('afterbegin', HTML);
            }
            
            if (this.place === "all" ) {
                let HTML = `<div class="main-title"><div class="heading">
                <h2 class="bold section-heading">${this.boldText} </h2><div class="main-title-border">
                <i class="fa fa-asterisk" ></i>
                </div></div></div>`;
                this.element.insertAdjacentHTML('afterbegin', HTML);
            }
        } 
    }
     
     
        
           
            

  export default SectionHeading; 

 
  
