"use strict";

class Hero{
    constructor(target){
        this.target = target;
        this.DOM = null;
        
        this.init();
       
    }

    init() {
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'ERROR: header target location was not found.';
        }
    }
}

export default Hero;