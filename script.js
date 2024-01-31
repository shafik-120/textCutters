// //Calcolater
// const currentNum = document.querySelector('.currentNum');
// const result = document.querySelector('.result');
// // ==============
// const equalize = document.querySelector('.equalize');
// ======================
// const num1 = document.querySelector('.num1');
// const num2 = document.querySelector('.num2');
// const num3 = document.querySelector('.num3');
// const num4 = document.querySelector('.num4');
// const num5 = document.querySelector('.num5');
// const num6 = document.querySelector('.num6');
// const num7 = document.querySelector('.num7');
// const num8 = document.querySelector('.num8');
// const num9 = document.querySelector('.num9');
// const num0 = document.querySelector('.num0');
// const plus = document.querySelector('.plus');
// const minas = document.querySelector('.minas');
// const gon = document.querySelector('.gon');
// const vag = document.querySelector('.vag');
// const ac = document.querySelector('.ac');

// const num11 = num1.addEventListener('click', ()=>{
//   return '1';
// })
// console.log(num11())
// num2.addEventListener('click', ()=>{
//   currentNum.innerHTML ='2';
// })
// num3.addEventListener('click', ()=>{
//   currentNum.innerHTML ='3';
// })
// num4.addEventListener('click', ()=>{
//   currentNum.innerHTML ='4';
// })
// num5.addEventListener('click', ()=>{
//   currentNum.innerHTML ='5';
// })
// num6.addEventListener('click', ()=>{
//   currentNum.innerHTML ='6';
// })
// num7.addEventListener('click', ()=>{
//   currentNum.innerHTML ='7';
// })
// num8.addEventListener('click', ()=>{
//   currentNum.innerHTML ='8';
// })
// num9.addEventListener('click', ()=>{
//   currentNum.innerHTML ='9';
// })
// num0.addEventListener('click', ()=>{
//   currentNum.innerHTML ='0';
// })
// plus.addEventListener('click', ()=>{
//   currentNum.innerHTML ='+';
// })
// minas.addEventListener('click', ()=>{
//   currentNum.innerHTML ='-';
// })
// gon.addEventListener('click', ()=>{
//   currentNum.innerHTML ='*';
// })
// vag.addEventListener('click', ()=>{
//   currentNum.innerHTML ='/';
// })
// ac.addEventListener('click', ()=>{
//   currentNum.classList.remove('numberOto')
//   result.classList.remove('finalResult')
// })



// equalize.addEventListener('click', ()=>{

//   currentNum.classList.add('numberOto')
//   result.classList.add('finalResult')
// })
































//Text Fixer

const symbolRm = document.querySelector('.symbolRm');
const symbolBtn = document.querySelector('.symbolBtn');
const numberBtn = document.querySelector('.numberBtn');
const numSymBtn = document.querySelector('.numSymBtn');


//Duel Btn Call
const en = document.querySelector('#en');
const ch = document.querySelector('#ch');
//English Languese
en.addEventListener('click',()=>{
  symbolBtn.style.display = 'block';
  numberBtn.style.display = 'block';
  numSymBtn.style.display = 'block';
  brackLine.style.display = 'block';
  symbolRm.style.display = 'none';
  
})
//Chainess Langues
ch.addEventListener('click',()=>{
  symbolBtn.style.display = 'none'
  numberBtn.style.display = 'none'
  numSymBtn.style.display = 'none'
  brackLine.style.display = 'none'
  symbolRm.style.display = 'block';
})



//English Function Start  //Symbol Remove Function
symbolBtn.addEventListener('click', ()=>{
  const textAreaStyle1 = document.querySelector('#textAreaStyle1').value;
  let sanitizedText = textAreaStyle1.replace(/[^\w\s.]|_/g, '');
  clickCopyText.value = sanitizedText
})

//Number Remove Function
numberBtn.addEventListener('click', ()=>{
  const textAreaStyle1 = document.querySelector('#textAreaStyle1').value;
  let sanitizedText = textAreaStyle1.replace(/[0-9]/g, '');
  clickCopyText.value = sanitizedText
})

//Number And Symbol Remove Function
numSymBtn.addEventListener('click', ()=>{
  const textAreaStyle1 = document.querySelector('#textAreaStyle1').value;
  let sanitizedText = textAreaStyle1.replace(/[^.\w\s]|[\d]/g, '');
  // let sanitizedText = textAreaStyle1.replace(/[^\w\s.]|\d/g, '');
  clickCopyText.value = sanitizedText
})

//copy and Select text Function
const clickCopyText = document.querySelector('#clickCopyText');
clickCopyText.addEventListener('click', ()=>{
  clickCopyText.select()
  document.execCommand('copy');

  const copyHeading = document.querySelector('.copyHeading')
  copyHeading.style.display = 'block'
  setTimeout(() => {
    copyHeading.style.display = 'none'
  }, 2000);
})

//Line Brack English Function
const brackLine = document.querySelector('.brackLine');
brackLine.addEventListener('click', ()=>{
  const textAreaStyle2 = document.querySelector('#textAreaStyle2').value;
 // const words = textAreaStyle2.split(' ');
 // let result = '';
  
  //for (let i = 0; i < words.length; i++) {
   // result += words[i] + ' ';
    
   // if ((i + 1) % 320 === 0) {
    //  result += '<br><br> A';
   // }                    
  
  }
  
  const output = document.getElementById('output'); 
  // output.innerHTML = result;                                                                                                                                                                                    
                      
  
})

//Reset Function
const resetBtn1 = document.querySelector('.resetBtn1');
const resetBtn2 = document.querySelector('.resetBtn2');

resetBtn1.addEventListener('click', ()=>{
  const textAreaStyle1 = document.querySelector('#textAreaStyle1');
  textAreaStyle1.value = '';
})

resetBtn2.addEventListener('click', ()=>{
  const textAreaStyle2 = document.querySelector('#textAreaStyle2');
  textAreaStyle2.value = '';
})








//Chainess Function Start  //English Word & Symbol Remove

symbolRm.addEventListener('click', ()=>{
  const textAreaStyle1 = document.querySelector('#textAreaStyle1').value;
  // let sanitizedText = textAreaStyle1.replace(/[^\u4E00-\u9FFF\u3400-\u4DBF\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\u{2F800}-\u{2FA1F}]/ug, '');
  const filteredText = textAreaStyle1.replace(/[^。\u4e00-\u9fa5]/g, "");

  const clickCopyText = document.querySelector('#clickCopyText');
  clickCopyText.addEventListener('click', ()=>{
    clickCopyText.select()
    document.execCommand('copy')
  })
  clickCopyText.value = filteredText
})

