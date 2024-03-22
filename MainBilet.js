var bilet101=document.querySelector('.Info');
var bilet102=document.querySelector('.Info1-2');
var select=document.querySelector('.Nav_Selection');
var test101=document.querySelector('.test101');
var test102=document.querySelector('.test102');
var bilet201=document.querySelector('.Info2-1');
var bilet202=document.querySelector('.Info2-2');
select.onchange = (e) => {
 var item = select.value;
  if(item =='1.1')
  {
   bilet101.style.display = "inline";
  }
   else {
   bilet101.style.display = "none";
  }

 if(item =='1.2')
 {
  bilet102.style.display = "inline";
 }
 else {
  bilet102.style.display = "none";
 }
 if(item =='2.1')
 {
  bilet201.style.display = "inline";
 }
 else {
  bilet201.style.display = "none";
 }
 if(item =='2.2')
 {
  bilet202.style.display = "inline";
 }
 else {
  bilet202.style.display = "none";
 }
}