class GreatPeple{
   constructor(selectorP,selectorImg){
   this.selectorp = selectorP;
   this.selectorimg = selectorImg;
    
   this.init()
   }
 init(){
  let DOM =  document.querySelector(this.selectorp);
  if(!DOM){
      throw 'ERROR Great peple Selektor break';
  }
  let HTML = '';
  HTML += `<p>It is a long established fact that a reader 
           will be distracted by the readable 
           content of a page when looking at its layout.</p>`
 DOM.innerHTML=HTML; 
  
  let DOM2 =  document.querySelector(this.selectorimg);
  if(!DOM){
      throw 'ERROR Great peple Selektor break';
  }
  let x=0;
  HTML = '';
  HTML +=`   
            <div class="col-2 greatimg">
               <img class="greatImg" src=${greatData[x++].img}>
            </div> 
            <div class="col-2">
               <img class="greatImg" src=${greatData[x++].img}>
            </div>
            <div class="col-2">
              <img class="greatImg" src=${greatData[x++].img}>
            </div>
            <div class="col-2">
              <img class="greatImg" src=${greatData[x++].img}>
            </div>
            <div class="col-2">
              <img class="greatImg" src=${greatData[x++].img}>
            </div>
            <div class="col-2">
              <img class="greatImg" src=${greatData[x++].img}>
            </div>`
DOM2.innerHTML = HTML; 


  
}

}
export default  GreatPeple;
import greatData from '../data/greatData.js'

