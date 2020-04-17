"use strict";

import SectionHeading from './objects/SectionHeading.js';
import Achievements from './objects/Achievements.js';
import Experience from './objects/Experience.js';
 
// find all attr with 'data-h2' to create H2 elements
const allDataH2 = document.querySelectorAll('[data-h2],[data-h2-bold],[data-place]');
for ( let i=0; i<allDataH2.length; i++ ) {
    new SectionHeading( allDataH2[i] );
} 

//create four achievements blocks
new Achievements('#achievements > .row');

new Experience ('#experience .row:nth-child(3)');
