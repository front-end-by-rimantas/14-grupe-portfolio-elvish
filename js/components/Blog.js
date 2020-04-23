"use strict"

import data from '../data/blog-data.js';

class Blog {
    constructor(target) {
        this.target = target;
        this.DOM = null;

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
        let HTML = '';

        for (let i=0; i<data.length; i++) {
            const post = data[i];

            console.log(post);
            
            HTML += `<div class="post col-4">
                        <img class="postmedia" src="../img/blog/${post.media}" alt="Post media">
                        <a class="title">${post.title}</a>
                        <a class="category">${post.category}</a>
                        <p class="date">${post.date} <a class="author">${post.author}</a></p>
                        <p class="description">${post.description}</p>
                        <p class="read-more">${post.readmore}</p>
                    </div>`;
        }
        
        return this.DOM.innerHTML = HTML;
        
    }

}
                        

export default Blog;
        


                            
                        