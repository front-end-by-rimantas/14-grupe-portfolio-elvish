"use strict";

  class SectionHeading {
     constructor( element ) {
         this.element = element;
         this.d = element.dataset;
         this.text = this.d.h2;
        this.boldText = this.d.h2Bold;
console.log(this.boldText);
          this.render();
     }

      render() {
         const classList = [];
         this.d.h2Bold ? classList.push(this.d.h2Bold) : '';

          const classNames = classList.length > 0 ? `class="${classList.join(' ')}"` : '';

          const HTML = `<h2 ${classNames}><span>${this.boldText}</span>${this.text}</h2>`;
         this.element.insertAdjacentHTML('afterbegin', HTML);
     
       
        } 
     
     
 }

  export default SectionHeading; 

 
  
