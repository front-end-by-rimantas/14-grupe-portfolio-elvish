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
  HTML = '';
  HTML +=`   
            <div class="col-2 greatimg">
               <img class="greatImg" src="./img/1.png" alt="" srcset="">
            </div> 
            <div class="col-2">
               <img class="greatImg" src="./img/2.png" alt="" srcset="">
            </div>
            <div class="col-2">
              <img class="greatImg" src="./img/3.png" alt="" srcset="">
            </div>
            <div class="col-2">
              <img class="greatImg" src="./img/4.png" alt="" srcset="">
            </div>
            <div class="col-2">
              <img class="greatImg" src="./img/5.png" alt="" srcset="">
            </div>
            <div class="col-2">
              <img class="greatImg" src="./img/6.png" alt="" srcset="">
            </div>`
DOM2.innerHTML = HTML; 
  
}

}
export default  GreatPeple;