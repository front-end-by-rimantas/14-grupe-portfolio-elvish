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
        const meny = document.querySelector('nav');
        const height = meny[0].offsetTop - window.innerHeight;
        const items = document.querySelectorAll('[data-menu]');

        window.addEventListener('scroll', () => {
                if( height === window.scrollY){
                    console.log(window.scrollY)
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
                        HTML += `<a href="#${itemID}">${itd.menu}</a>`;
                    }
                }
                this.DOM.innerHTML = HTML;
            }
        })
    }   
}

export default Header;