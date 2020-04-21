"use strict"

import data from '../data/portfolio-data.js';

class Portfolio {
    constructor(target) {
        this.target = target;
        this.DOM = null;
        this.DOMfilter = null;
        this.DOMlist = null;

        this.init();
    }

    init() {
        if (this.isValid()) {
            this.render();
        }
    }

    isValid() {
        const DOM = document.querySelector(this.target);
        if (!DOM) {
            throw 'ERROR: target selector is incorrect...';
        }
        this.DOM = DOM;

        if (!Array.isArray(data) || data.length === 0 ) {
            throw 'ERROR: data must be a non-empty array...';
        }

        return true;
    }

    render() {
        const HTML = `
            <div class="gallery">
                <div class="filter">FILTER</div>
                <div class="list">WORKS LIST</div>
            </div>`;
        this.DOM.innerHTML = HTML;
        this.DOMfilter = this.DOM.querySelector('.filter');
        this.DOMlist = this.DOM.querySelector('.list');

        this.renderList();
        this.renderFilter();
    }

    renderList() {
        let HTML = '';

        for (let i=0; i<data.length; i++) {
            const project = data[i];
            let tagHTML = '';
            for (let t=0; t<project.categories.length; t++) {
                tagHTML += `<li>${project.categories[t]}</li>`;
            }
            HTML += `
                <div class="item">
                    <a class="img-zoom" href="./img/gallery/${project.photo}"></a>
                    <img src="./img/gallery/${project.photo}" alt="Gallery photo">
                    <div class="overlay">
                        <h5>${project.name}</h5>
                        <ul>${tagHTML}</ul>
                    </div>
                </div>`;
        }
        return this.DOMlist.innerHTML = HTML;
    }

    renderFilter() {
        let tags = [];
        for ( let i=0; i<data.length; i++ ) {
            for ( let t=0; t<data[i].categories.length; t++ ) {
                const tag = data[i].categories[t].toLowerCase();
                
                if ( tags.indexOf(tag) === -1 ) {
                    tags.push(tag);
                }
            }
        }

        let HTML = '<div class="tag active" data-tag="all">All</div>';
        for ( let i=0; i<tags.length; i++ ) {
            HTML += `<div class="tag" data-tag="${tags[i]}">${tags[i]}</div>`;
        }
        this.DOMfilter.innerHTML = HTML;

        const DOMtags = this.DOMfilter.querySelectorAll('.tag');
        const DOMworks = this.DOMlist.querySelectorAll('.item');
        for ( let i=0; i<DOMtags.length; i++ ) {
            DOMtags[i].addEventListener('click', () => {
                this.DOMfilter.querySelector('.tag.active').classList.remove('active');
                DOMtags[i].classList.add('active');

                const clickedTag = DOMtags[i].dataset.tag;

                if ( clickedTag === 'all' ) {
                    for ( let m=0; m<data.length; m++ ) {
                        DOMworks[m].classList.remove('hidden');
                    }
                } else {
                    // show/hide works based on selected tag
                    for ( let m=0; m<data.length; m++ ) {
                        DOMworks[m].classList.add('hidden');
                        for ( let t=0; t<data[m].categories.length; t++ ) {
                            const tag = data[m].categories[t].toLowerCase();
                            if ( tag === clickedTag ) {
                                DOMworks[m].classList.remove('hidden');
                                break;
                            }
                        }
                    }
                }
            })
        }
    }
}

export default Portfolio;