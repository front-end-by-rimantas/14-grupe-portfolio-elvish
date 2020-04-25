"use strict";
class Servicess{
    constructor(target)
{
    this.target=target;
    this.DOM=null;
    this.init();

}
init() {
    const DOM = document.querySelector(this.target);
    if ( !DOM ) {
        throw 'ERROR: header target location was not found.';
    }
    this.DOM = DOM;
    this.render();
}
}


// export default Services ;