let table;
const container = document.querySelector('.ap-container');

function explode(numSquare){
  let number = `${numSquare}`;
  let square = document.getElementById(numSquare);
  console.log(numSquare);
  square.innerText = number;
  if(numSquare % 2 == 0){
    square.classList.add('even');
  }else{
    square.classList.add('odd');
  }
}

function tableGen1(){
  for (let i = 1; i < 101; i++){
    container.innerHTML += `<div id="${i}" style=" width: calc(100% / 10); height: "calc(100% / 7);" class="square" onclick="explode(${i})"></div>`;
  }
  square.style.width = generateCalcCss();
  square.style.height = generateCalcCss();
}

function tableGen2(){
  for (let i = 1; i < 82; i++){
    container.innerHTML += `<div id="${i}" style=" width: calc(100% / 9); height: "calc(100% / 7);" class="square" onclick="explode(${i})"></div>`;
    
  }
  square.style.width = generateCalcCss();
  square.style.height = generateCalcCss();
}

function tableGen3(){
  for(let i = 1; i < 50; i++){
    container.innerHTML += `<div id="${i}" style=" width: calc(100% / 7); height: "calc(100% / 7);" class="square" onclick="explode(${i})"></div>`;
  }
  square.style.width = generateCalcCss();
  square.style.height = generateCalcCss();
}

function main(){
  document.querySelectorAll('.square').forEach(el => el.remove())
  let difficulty = document.querySelector('select').value;

  switch (difficulty) {

    case '3':
      tableGen1();
      break;
    case '2':
      tableGen2();
      break;
    case '1':
      tableGen3();
      break;
  }
}