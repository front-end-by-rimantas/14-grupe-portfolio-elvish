
// --------------Make progress bar 3x lin------------
class ProgressBarX3 {
    constructor(nameProgresBar1,nameProgresBar2,nameProgresBar3, progressvalue1,progressvalue2,progressvalue3,selector,numStep) {
        this.progess1 = progressvalue1;
        this.progess2 = progressvalue2;
        this.progess3 = progressvalue3;
        this.name1=nameProgresBar1;
        this.name2=nameProgresBar2;
        this.name3=nameProgresBar3;
        this.target=selector;
        this.dom ='';
        this.step=numStep;
        this.render()
    }
    render(){
        const par = document.querySelector(this.target); // poluchaem dannoe
        let x=this.step;
        let HTML = '';
        var name=this.name1;
        var num=this.progess1;
        var name1=this.name2;
        var num1=this.progess2;
        var name2=this.name3;
        var num2=this.progess3;
        HTML +=`  <p class="namebar${x}">${name}</p>
        <p class="numberbar${x}">${num}%</p>
        <div class="fon"><div class="myBar${x++}"></div></div>
        <p class="namebar${x}">${name1}</p>
        <p class="numberbar${x}">${num1}%</p>
        <div class="fon"><div class="myBar${x++}"></div></div>
        <p class="namebar${x}">${name2}</p>
        <p class="numberbar${x}">${num2}%</p>
        <div class="fon"><div class="myBar${x}"></div></div> `;
        par.innerHTML = HTML; 
        return this.dom=par;
    }
}


import aboutData from './data/AboutMe-data.js';
// --------------Make progress bar 3x lin END------------


// --------------Make 3 paragraph H1 H2 P-----------
class AboutAs {
    constructor(querySelector){
      this.querySelector=querySelector;
      this.init();
    }
    init(){

    if (this.querySelector == '.titleShort'){
        const DOM = document.querySelector(this.querySelector);
        
        if(!DOM){
            throw 'ERROR: not finde selektor Fix pleas';
        }  
        let HTML='';
        HTML += `<p class="aboutfirstP">${aboutData[0].titleShort}</p>`
        DOM.innerHTML=HTML;
    }
    if (this.querySelector == '.aboutH2_1'){
        const DOM = document.querySelector(this.querySelector);
        
        if(!DOM){
            throw 'ERROR: not finde selektor Fix pleas';
        }  
        let HTML='';
        HTML += `<p class="aboutH2">${aboutData[0].hello}</p>`
        DOM.innerHTML=HTML;
    }
    if (this.querySelector == '.aboutimg_1'){
        const DOM = document.querySelector(this.querySelector);
        
        if(!DOM){
            throw 'ERROR: not finde selektor Fix pleas';
        }  
        let HTML='';
        HTML += ` <div class="aboutimg"></div>`
        DOM.innerHTML=HTML;
    }
    if (this.querySelector == '.aboutMeh2_1'){
        const DOM = document.querySelector(this.querySelector);
        
        if(!DOM){
            throw 'ERROR: not finde selektor Fix pleas';
        }  
        let HTML='';
        HTML += ` <h3 class="aboutMeh2" >${aboutData[0].name1}</h3>`
        DOM.innerHTML=HTML;
    }
    if (this.querySelector == '.aboutPlomg_1'){
        const DOM = document.querySelector(this.querySelector);
        
        if(!DOM){
            throw 'ERROR: not finde selektor Fix pleas';
        }  
        let HTML='';
        HTML += `<p class="aboutPlomg" >${aboutData[0].titleLong}</p>`
        DOM.innerHTML=HTML;
    }
}
}




export {ProgressBarX3,AboutAs};