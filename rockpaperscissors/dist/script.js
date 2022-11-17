let RedBtn = document.getElementById('paper');
let YellowBtn = document.getElementById('rock');
let GreenBtn = document.getElementById('scissors');
let Header = document.getElementById('head');
let ButtonDiv = document.getElementById('button');
let MessageDiv = document.getElementById('message');
let ScoreMes = document.getElementById('score');
let Output = document.getElementById('output');
const buttons = document.querySelectorAll('.button');

let rend = () => {
  let x = ['paper','rock','scissors']
  return x[Number(Math.floor(Math.random() * 3))]
}



const result = (com,user) => {
  if (com == 'paper'){
      if(user == 'scissors'){
        message = 'You Win 🥳';
      }
      else if(user == 'rock'){
        message = 'You Loss 😔'
      }   
      else{
        message = 'Draw 🤝';
      }  
    }
  else if (com == 'rock'){
      if(user == 'rock'){
       message = 'Draw 🤝';
      }
      else if(user == 'scissors'){
       message = 'You Loss 😔';
      }
      else{
        message = 'You Win 🥳';
      }
    }
  else{
     if(user == 'scissors'){
       message = 'Draw 🤝';
     }
     else if(user == 'paper'){
       message = 'You Loss 😔';
     }
    else{
      message = 'You Win 🥳'
    }
   }      
  
  return message;
  }

let scores = {'user': 0, 'com': 0};

const getScore = (mes) => {
  let score = '';
  if (mes == 'You Loss 😔'){
    ScoreMes.innerText = `😜 ${scores.user} : ${scores.com += 1} 🤖`
  }
  else if (mes == 'You Win 🥳'){
    ScoreMes.innerText = `😜 ${scores.user += 1} : ${scores.com} 🤖`
  }
}

buttons.forEach(x => 
 x.onclick = () => {
  let com = rend();
  let user = x.value;
  if (user === 'restart'){
    scores.user = 0;
    scores.com = 0;
    MessageDiv.innerText = 'Go!'
    ScoreMes.innerText = `😜 ${scores.user} : ${scores.com} 🤖`
    Output.innerText = `😜  :  🤖`
  }
  else{
    Output.innerText = `😜 ${user} : ${com} 🤖`
    getScore(result(com,user))
    MessageDiv.innerText = result(com,user)    
  }  
}
) 
console.log('.')