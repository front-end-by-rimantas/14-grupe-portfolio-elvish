"use strict"

import data from '../data/blog-data.js';

class Blog {
    constructor(target) {
        this.target = target;
        this.DOM = null;
        this.DOMplay = null;

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
            // <div class="play-blue"></div><div class="play"></div> 
            
            if (post.media.images)    {
            HTML += `<div class="post col-4">
                            <img class="postmedia" src="../img/blog/${post.media.images}" alt="Post media">
                            <a href="#" class="title">${post.title}</a>
                            <a href="#" class="category">${post.category}</a>
                            <p class="date">${post.date} <a class="author">${post.author}</a></p>
                            <p class="description">${post.description}</p>
                            <a href="#" class="read-more">${post.readmore}</a> 
                        </div>`;
            }
            if (post.media.video)    {
                HTML += `<div class="post col-4">
                            
                            <div class="video">
                            <i class="fa fa-play-circle" aria-hidden="true"></i>
                            <div id="myModal" class="modal">
                               <div class="modal-content">
                               <span class="close">&times;</span>
                               <iframe src="https://player.vimeo.com/video/99025203?title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                               </div>
                          </div>
                      
                      </div>
                          
                          <a href="#" class="title">${post.title}</a>
                          <a href="#" class="category">${post.category}</a>
                          <p class="date">${post.date} <a class="author">${post.author}</a></p>
                          <p class="description">${post.description}</p>
                          <a href="#" class="read-more">${post.readmore}</a>
                      </div>`;
                              
                    }
            if(post.media.slideshow){
                HTML += `<div class="post col-4">
                            <div class="slideshow-container">
                                <div class="mySlides fade">
                                    <img src="../img/blog/${post.media.slideshow[0]}" style="width:100%">
                                </div>
                                <div class="mySlides fade">
                                    <img src="../img/blog/${post.media.slideshow[1]}"" style="width:100%">
                                </div>
                                <div class="mySlides fade">
                                    <img src="../img/blog/${post.media.slideshow[2]}"" style="width:100%">
                                </div>
                                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                              </div>
                              <br></br>
                              
                              <a href="#" class="title">${post.title}</a>
                            <a href="#" class="category">${post.category}</a>
                            <p class="date">${post.date} <a class="author">${post.author}</a></p>
                            <p class="description">${post.description}</p>
                            <a href="#" class="read-more">${post.readmore}</a>
                            </div>`;




                    }
            }
        
                
                  
                  window.onclick = function(event) {
                    if (event.target == modal) {
                      modal.style.display = "none";
                    }
                  }
                
                
                this.DOM.innerHTML = HTML;
                const modal = document.getElementById("myModal");
                var span = document.getElementsByClassName("close")[0];
                this.DOMplay = this.DOM.querySelector('.fa-play-circle');
               
                this.DOMplay.addEventListener('click', () => {
                    modal.style.display = "block";
        
                    span.onclick = function() {
                        modal.style.display = "none";
                      }
        
                      window.onclick = function(event) {
                        if (event.target == modal) {
                          modal.style.display = "none";
                        }
                      }
                      var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
                    
                })
            }
        
        
        
        
        }
                                
        
        export default Blog;
                
                               
                                
                                
                          
                            
                            


                            
                        