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
        // const btn = document.querySelector('play-blue');

        // btn.addEventListener('click', () => {});

        for (let i=0; i<data.length; i++) {
            const post = data[i];
            // <div class="play-blue"></div><div class="play"></div> 
            
            if (post.media.images)    {
            HTML += `<div class="post col-4">
                            <img class="postmedia" src="../img/blog/${post.media.images}" alt="Post media">
                            <a class="title">${post.title}</a>
                            <a class="category">${post.category}</a>
                            <p class="date">${post.date} <a class="author">${post.author}</a></p>
                            <p class="description">${post.description}</p>
                            <p class="read-more">${post.readmore}</p> 
                        </div>`;
            }
            if (post.media.video)    {
            HTML += `<div class="post col-4">
                            
                            <div class="video"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                            <a class="title">${post.title}</a>
                            <a class="category">${post.category}</a>
                            <p class="date">${post.date} <a class="author">${post.author}</a></p>
                            <p class="description">${post.description}</p>
                            <p class="read-more">${post.readmore}</p>
                        </div>`;
                                
                            
                            
            }
            // if(){}
    }

        
        return this.DOM.innerHTML = HTML;
        
    }

}
                        

export default Blog;
        


                            
                        