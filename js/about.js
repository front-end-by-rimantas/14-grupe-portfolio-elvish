
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
export default ProgressBarX3;
import aboutData from './data/AboutMe-data.js';
// --------------Make progress bar 3x lin END------------
console.log(aboutData);
// --------------Make 3 paragraph H1 H2 P-----------
