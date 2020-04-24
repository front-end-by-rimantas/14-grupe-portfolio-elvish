"use strict";

class Header {
    constructor( target ) {
        this.target = target;
        this.DOM = null;
        
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

    render() {
        
    const items = document.querySelectorAll('[data-menu]');
    
        let HTML = '';
        for ( let i=0; i<items.length; i++ ) {
            
            const it = items[i];
            const itd = it.dataset;
            const itemID = it.getAttribute('id');
            if ( itemID === null ) {
                HTML += `<a href="${itd.menuUrl}">
                            ${itd.menu}
                        </a>`;
            } else {
                HTML += `<a id="nava" class="white" href="#${itemID}">${itd.menu}</a>`;
            }
        }
        this.DOM.innerHTML = HTML;
        this.scroll();
        this.pionts()
    }
    
     scroll(){
         
        for( let x=0; x<nava.length; x++ ){
            let nav=nava[x];
            
            window.addEventListener("scroll", ()=>{
                if(window.scrollY < 80){
                    nav.classList.add('white')
                    nav.classList.remove('black')
                } else {
                    nav.classList.add('black')
                    nav.classList.remove('white')
                }
            })
        }

        window.addEventListener("scroll", ()=>{

            if (window.scrollY < 80) {
                document.querySelector('#clr').classList.add('color')
                document.querySelector('#clr').classList.remove('colorChange')

                document.querySelector('#logo').classList.remove('logo-1');
                document.querySelector('#logo').classList.add('logo-2');
                
            } else {
                document.querySelector('header').classList.add('colorChange')
                document.querySelector('header').classList.remove('color')

                document.querySelector('#logo').classList.remove('logo-2');
                document.querySelector('#logo').classList.add('logo-1');
            }
        
        })
     }
     pionts(){
         //sectoins[a](.xxx) = value- masyvas for
        const sectoins = document.querySelectorAll('.height ');
        let height='[]';
        for( let a=0; a<sectoins.length; a++ ){ 
            let temp=sectoins[a].offsetTop + window.innerHeight;
            sectoins[a].style.height=temp;
           height.push(temp);
        }
        console.log(height)
        window.addEventListener('scroll', () => {
            //let temp=sectoins[a].offsetTop + window.innerHeight;
        })
    }
}

export default Header;
