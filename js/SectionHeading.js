"use strict";

  class SectionHeading {
     constructor( element ) {
         this.element = element;
         this.d = element.dataset;
         this.text = this.d.h2;
         this.bold = this.d.h2.bold;

          this.render();
     }

      render() {
         const classList = [];
         this.d.h2Bold ? classList.push(this.d.h2Bold) : '';

          const classNames = classList.length > 0 ? `class="${classList.join(' ')}"` : '';

          const HTML = `<h2 ${classNames}>${this.text}</h2>`;
         this.element.insertAdjacentHTML('afterbegin', HTML);
     }
 }

  export default SectionHeading; 

  