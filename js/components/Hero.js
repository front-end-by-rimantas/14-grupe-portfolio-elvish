"use strict";

class Hero{
    constructor(target){
        this.target = target;
                
        this.init();
       
    }

    init() {
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'ERROR: header target location was not found.';
        }
    this.words()
    }

    words(){
        const htext = document.querySelector('#text span');
        const names = ['Elvish Walters.', 'A Developer.', 'Designer.'];
        cons
        let counter = 0;
        let sum = 0;

        let interval = 3000; 
        names.forEach((names, index) => {
            sum += counter;
            
        setTimeout(() => {
            let text = `<span>${name}</span>`;
            htext.innerHTML = text;
            console.log(name)
            if ( name === names[ names.length - 1 ] )
                setTimeout( () => { this.words() }, interval );

            }, index * interval )
        })
    }
}

export default Hero;

/*if (!htext.style.opacity) {
    htext.style.opacity = 1;
 }
 if (htext.style.opacity > 0) {
     htext.style.opacity -= 0.1;
 } else {
     clearInterval(fadeEffect);
 }*/

/* if (!htext.style.opacity) {
    htext.style.opacity = 1;
    interval
    }
    if (htext.style.opacity > 0) {
        htext.style.opacity -= 0.2;
    } else {
        clearInterval(htext);
    }*/
 
   // 

          /* names.forEach((names, index) => {
            sum += counter;
            //console.log(sum)
           setTimeout(() => {
            let text = <span>${name}</span>;
            htext.innerHTML = text;

            if ( name === names[ names.length - 1 ] )
                setTimeout( () => { this.words() }, interval );

        }, index * interval )
            
           
        })*/