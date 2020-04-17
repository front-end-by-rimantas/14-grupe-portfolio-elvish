"use strict";

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
    <div class="myBar${x++}"></div>
        <p class="namebar${x}">${name1}</p>
        <p class="numberbar${x}">${num1}%</p>
    <div class="myBar${x++}"></div>
        <p class="namebar${x}">${name2}</p>
        <p class="numberbar${x}">${num2}%</p>
    <div class="myBar${x}"></div> `;
        par.innerHTML = HTML;
        console.log(par);
       console.log(this.step);   
        return this.dom=par;
    }
}
const Development  = new ProgressBarX3("Development",'WordPress','Photoshop',80,59,88,".myProgress1",1);
const Html  = new ProgressBarX3("Html",'Css','Asp.net',96,70,58,".myProgress2",4)  
export default ProgressBarX3;

// --------------Make progress bar 3x lin END------------

        // It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of
        // using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
        // content here', making it look like readable English.

    // --------------Make 3 paragraph H1 H2 P-----------

    