// const scene = document.getElementById('scene');

// /* ---------- Cloud generator ---------- */
// function makeCloud(){
//   const c = document.createElement('div');
//   c.className = 'cloud';
//   const scale = 0.6 + Math.random()*1.2;
//   const w = 90*scale, h = 34*scale;
//   c.style.width = w+'px';
//   c.style.height = h+'px';
//   c.style.top = (5 + Math.random()*35)+'%';
//   c.style.left = '-160px';
//   c.style.setProperty('--puff1', (w*0.35)+'px');
//   const dur = 40 + Math.random()*40;
//   c.style.animation = `drift ${dur}s linear`;
//   c.dataset.speed = dur;

//   const style = document.createElement('style');
//   const id = 'c'+Math.floor(Math.random()*1e9);
//   c.id = id;
//   style.innerHTML = `
//     #${id}::before{width:${w*0.55}px;height:${h*1.5}px;top:${-h*0.55}px;left:${w*0.08}px;}
//     #${id}::after{width:${w*0.4}px;height:${h*1.2}px;top:${-h*0.3}px;left:${w*0.5}px;}
//   `;
//   document.head.appendChild(style);
//   scene.appendChild(c);

//   c.addEventListener('animationend', () => { c.remove(); style.remove(); });
// }
// const cloudCSS = document.createElement('style');
// cloudCSS.innerHTML = `@keyframes drift{from{transform:translateX(0);}to{transform:translateX(calc(100vw + 200px));}}`;
// document.head.appendChild(cloudCSS);

// for(let i=0;i<5;i++) setTimeout(makeCloud, i*3000);
// setInterval(makeCloud, 6000);

// /* ---------- Bird generator ---------- */
// function makeBird(){
//   const b = document.createElement('div');
//   b.className = 'bird';
//   b.style.top = (10+Math.random()*20)+'%';
//   b.style.left = '-40px';
//   b.innerHTML = `<svg viewBox="0 0 26 14"><path d="M1 8 Q7 0 13 8 Q19 0 25 8"/></svg>`;
//   const dur = 6+Math.random()*4;
//   b.style.animation = `flyacross ${dur}s linear`;
//   scene.appendChild(b);
//   b.addEventListener('animationend', () => b.remove());
// }
// const birdCSS = document.createElement('style');
// birdCSS.innerHTML = `@keyframes flyacross{from{transform:translateX(0) translateY(0);}50%{transform:translateX(50vw) translateY(-20px);}to{transform:translateX(calc(100vw + 80px)) translateY(0);}}`;
// document.head.appendChild(birdCSS);
// setInterval(makeBird, 5000);
// setTimeout(makeBird, 1500);

// /* ---------- Falling petals ---------- */
// function makePetal(){
//   const p = document.createElement('div');
//   p.className = 'petal';
//   p.style.left = Math.random()*100+'%';
//   const dur = 6+Math.random()*5;
//   const drift = (Math.random()*80-40);
//   p.style.setProperty('--drift', drift+'px');
//   p.style.animation = `fall ${dur}s linear`;
//   scene.appendChild(p);
//   p.addEventListener('animationend', () => p.remove());
// }
// const petalCSS = document.createElement('style');
// petalCSS.innerHTML = `@keyframes fall{
//   0%{transform:translate(0,-20px) rotate(0deg);opacity:.9;}
//   100%{transform:translate(var(--drift),100vh) rotate(360deg);opacity:.7;}
// }`;
// document.head.appendChild(petalCSS);
// setInterval(makePetal, 500);

// /* ---------- Kite string (boy's hand to kite tip) ---------- */
// const stringPath = document.getElementById('stringPath');
// const kite = document.getElementById('kite');
// const boy = document.getElementById('boy');

// function handPoint(){
//   const r = boy.getBoundingClientRect();
//   return { x: r.left + 30, y: r.top + 18 }; // aligned with the arm's tip
// }
// function kiteTip(){
//   const r = kite.getBoundingClientRect();
//   return { x: r.left + r.width/2, y: r.top + r.height*0.85 };
// }

// function draw(){
//   const hand = handPoint();
//   const tip = kiteTip();
//   const midX = (hand.x + tip.x) / 2;
//   const midY = (hand.y + tip.y) / 2 + 30;
//   const d = `M ${hand.x} ${hand.y} Q ${midX} ${midY}, ${tip.x} ${tip.y}`;
//   stringPath.setAttribute('d', d);
//   requestAnimationFrame(draw);
// }
// requestAnimationFrame(draw);


// const anchor = document.getElementById('anchor');

// anchor.style.animation = 'none'; // disable CSS driftX animation via JS

// let kiteX = 0;
// let kiteY = 0;
// let dirX = 1; // for optional horizontal drift, if you want to keep it moving

// const MIN_Y = -150;
// const MAX_Y = 100;

// function applyKitePosition(){
//   kiteY = Math.max(MIN_Y, Math.min(MAX_Y, kiteY)); // clamp vertical
//   anchor.style.transform = `translate(${kiteX}px, ${kiteY}px)`;
//   checkGameStatus();

// }



// function moveKiteVertical(amount){
//   kiteY += amount;
//   applyKitePosition();
// }

// // Example: keep horizontal drift going via JS too, since CSS animation is off
// function driftHorizontal(){
//   kiteX += dirX * 0.5;
//   if (kiteX > 60 || kiteX < -60) dirX *= -1;
//   applyKitePosition();
//   requestAnimationFrame(driftHorizontal);
// }
// requestAnimationFrame(driftHorizontal);



// function checkGameStatus() {

//   if (kiteY <= MIN_Y) {

//       clearInterval(gameTimer);          // Stop the game
//       document.removeEventListener("keydown", flyTheKite);

//       alert("🎉 You Win!");
//       location.reload();
//       return;
//   }

//   if (kiteY >= MAX_Y) {

//       clearInterval(gameTimer);          // Stop the game
//       document.removeEventListener("keydown", flyTheKite);

//       alert("😢 Game Over!");
//       location.reload();
//       return;
//   }
// }


// /* ---------- Start button / score ---------- */
// const startbtn = document.getElementById("startbtn");
// startbtn.addEventListener("click", startGame);


// function startGame(){
  
//   var stopbtn = document.createElement("button");
//   var restart = document.createElement("button");
//   stopbtn.textContent = "Stop Game";
//   restart.textContent = "Restart Game";
//   stopbtn.setAttribute("id","stopbtn");
//   restart.setAttribute("id","restart");
//   scene.appendChild(stopbtn);
//   scene.appendChild(restart);


//   restart.addEventListener("click", () => {
//     location.reload();
// });

//   var score = document.createElement("div");
//   var accurent = document.createElement("div");
//   var scoreval = 0;
//   var accurentval = 100;

//   score.setAttribute("id", "score");
//   score.textContent = `score : ${scoreval}`;
//   scene.appendChild(score);

//   accurent.setAttribute("id", "accurent");
//   accurent.textContent = `accuracy : ${accurentval}%`;
//   scene.appendChild(accurent);

//   startbtn.remove();


// //   document.addEventListener("keydown",(event)=>{
// //     console.log(event.key);
// //     if(event.key ==="Enter"){
      
// //       moveKiteVertical(-15);
// //     }
// // });





// //  var keyval = document.createElement("div");
// //  keyval.setAttribute("id","keyval");

// // var randomKey;   //global scope for to use all over
// // var countsub = 0; //Global variable for counting the score

// // // Generate the first random key
// //  generateRandomKey();
// // // setTimeout(() => {
// // //   generateRandomKey();
// // //   moveKiteVertical(20);
// // // }, 100);

// // document.addEventListener("keydown", flyTheKite);

// // function generateRandomKey() {
// //     randomKey = String.fromCharCode(
// //         Math.floor(Math.random() * 26) + 97
// //     );

// //     keyval.innerHTML = randomKey;
// //     scene.appendChild(keyval);
// // }

// // function flyTheKite(event) {

// //     console.log("Pressed:", event.key);
// //     console.log("Expected:", randomKey);
    


// //     // if (event.key === randomKey) {
// //     //     console.log("yes");

        
// //     //     // generateRandomKey();//first value display
// //     //     setTimeout(() => {
// //     //       generateRandomKey();
// //     //       moveKiteVertical(20);
// //     //     }, 3000);
// //     //     moveKiteVertical(-15);
// //     //     scoreval++;
// //     //     score.textContent = `score :${scoreval}`; 
// //     //     scene.appendChild(score);
// //     //     var total = (scoreval + countsub);
// //     //     accurentval = Math.floor((scoreval/total)*100);
// //     //     accurent.textContent = `accuracy : ${accurentval}%`;
// //     //     scene.appendChild(accurent);
        
// //     // }









// //         let timer;

// //         if (event.key === randomKey) {

// //             moveKiteVertical(-15);

// //             scoreval++;
// //             score.textContent = `score : ${scoreval}`;

// //             clearTimeout(timer);

// //             timer = setTimeout(() => {
// //                 generateRandomKey();
// //                 moveKiteVertical(20);
// //             }, 3000);

// //         }
// //     else{
// //         // generateRandomKey();
// //         console.log("not");
// //         moveKiteVertical(20);
// //         countsub++;
// //         var total = (scoreval + countsub);
// //         accurentval = Math.floor((scoreval/total)*100);
// //         accurent.textContent = `accuracy : ${accurentval}%`;
// //         scene.appendChild(accurent);
// //     }
    
// //     //   setTimeout(() => {
// //     //     generateRandomKey();
// //     //     moveKiteVertical(20);
// //     // }, 300);

    
// // }
// // }
// var keyval = document.createElement("div");
// keyval.setAttribute("id", "keyval");
// scene.appendChild(keyval);

// var randomKey = "";
// var countsub = 0;
// var answered = false;

// // Generate Random Letter
// function generateRandomKey() {
//     randomKey = String.fromCharCode(
//         Math.floor(Math.random() * 26) + 97
//     );

//     keyval.textContent = randomKey;
// }

// // Show first key
// generateRandomKey();

// // Every 1 second generate a new key
// gameTimer = setInterval(() => {

//     // User failed to press the correct key
//     if (!answered) {

//         countsub++;

//         moveKiteVertical(20);

//         let total = scoreval + countsub;
//         accurentval = Math.floor((scoreval / total) * 100);

//         accurent.textContent = `accuracy : ${accurentval}%`;
//     }

//     // Ready for next key
//     answered = false;

//     generateRandomKey();

// }, 1000);


// // Listen for keyboard
// document.addEventListener("keydown", flyTheKite);

// function flyTheKite(event) {

//     // Ignore if this round is already answered
//     if (answered) return;

//     if (event.key === randomKey) {

//         answered = true;

//         scoreval++;

//         moveKiteVertical(-15);

//         score.textContent = `score : ${scoreval}`;

//         let total = scoreval + countsub;
//         accurentval = Math.floor((scoreval / total) * 100);

//         accurent.textContent = `accuracy : ${accurentval}%`;

//     }
//     else {

//         answered = true;

//         countsub++;

//         moveKiteVertical(20);

//         let total = scoreval + countsub;
//         accurentval = Math.floor((scoreval / total) * 100);

//         accurent.textContent = `accuracy : ${accurentval}%`;
//     }
// }




// }






// =====================================================
const scene = document.getElementById('scene');

/* ==================================================
   ATMOSPHERE: clouds, birds, petals
   ================================================== */

/* ---------- Cloud generator ---------- */
function makeCloud(){
  const c = document.createElement('div');
  c.className = 'cloud';
  const scale = 0.6 + Math.random()*1.2;
  const w = 90*scale, h = 34*scale;
  c.style.width = w+'px';
  c.style.height = h+'px';
  c.style.top = (5 + Math.random()*35)+'%';
  c.style.left = '-160px';
  c.style.setProperty('--puff1', (w*0.35)+'px');
  const dur = 40 + Math.random()*40;
  c.style.animation = `drift ${dur}s linear`;
  c.dataset.speed = dur;

  const style = document.createElement('style');
  const id = 'c'+Math.floor(Math.random()*1e9);
  c.id = id;
  style.innerHTML = `
    #${id}::before{width:${w*0.55}px;height:${h*1.5}px;top:${-h*0.55}px;left:${w*0.08}px;}
    #${id}::after{width:${w*0.4}px;height:${h*1.2}px;top:${-h*0.3}px;left:${w*0.5}px;}
  `;
  document.head.appendChild(style);
  scene.appendChild(c);

  c.addEventListener('animationend', () => { c.remove(); style.remove(); });
}
const cloudCSS = document.createElement('style');
cloudCSS.innerHTML = `@keyframes drift{from{transform:translateX(0);}to{transform:translateX(calc(100vw + 200px));}}`;
document.head.appendChild(cloudCSS);

for(let i=0;i<5;i++) setTimeout(makeCloud, i*3000);
setInterval(makeCloud, 6000);

/* ---------- Bird generator ---------- */
function makeBird(){
  const b = document.createElement('div');
  b.className = 'bird';
  b.style.top = (10+Math.random()*20)+'%';
  b.style.left = '-40px';
  b.innerHTML = `<svg viewBox="0 0 26 14"><path d="M1 8 Q7 0 13 8 Q19 0 25 8"/></svg>`;
  const dur = 6+Math.random()*4;
  b.style.animation = `flyacross ${dur}s linear`;
  scene.appendChild(b);
  b.addEventListener('animationend', () => b.remove());
}
const birdCSS = document.createElement('style');
birdCSS.innerHTML = `@keyframes flyacross{from{transform:translateX(0) translateY(0);}50%{transform:translateX(50vw) translateY(-20px);}to{transform:translateX(calc(100vw + 80px)) translateY(0);}}`;
document.head.appendChild(birdCSS);
setInterval(makeBird, 5000);
setTimeout(makeBird, 1500);

/* ---------- Falling petals ---------- */
function makePetal(){
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random()*100+'%';
  const dur = 6+Math.random()*5;
  const drift = (Math.random()*80-40);
  p.style.setProperty('--drift', drift+'px');
  p.style.animation = `fall ${dur}s linear`;
  scene.appendChild(p);
  p.addEventListener('animationend', () => p.remove());
}
const petalCSS = document.createElement('style');
petalCSS.innerHTML = `@keyframes fall{
  0%{transform:translate(0,-20px) rotate(0deg);opacity:.9;}
  100%{transform:translate(var(--drift),100vh) rotate(360deg);opacity:.7;}
}`;
document.head.appendChild(petalCSS);
setInterval(makePetal, 500);

/* ==================================================
   KITE STRING (boy's hand to kite tip)
   ================================================== */
const stringPath = document.getElementById('stringPath');
const kite = document.getElementById('kite');
const boy = document.getElementById('boy');
const anchor = document.getElementById('anchor');

function handPoint(){
  const r = boy.getBoundingClientRect();
  return { x: r.left + 30, y: r.top + 18 }; // aligned with the arm's tip
}
function kiteTip(){
  const r = kite.getBoundingClientRect();
  return { x: r.left + r.width/2, y: r.top + r.height*0.85 };
}

function draw(){
  const hand = handPoint();
  const tip = kiteTip();
  const midX = (hand.x + tip.x) / 2;
  const midY = (hand.y + tip.y) / 2 + 30;
  const d = `M ${hand.x} ${hand.y} Q ${midX} ${midY}, ${tip.x} ${tip.y}`;
  stringPath.setAttribute('d', d);
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

anchor.style.animation = 'none'; // disable CSS driftX animation; JS drives position now

/* ==================================================
   TYPING GAME LOGIC
   ================================================== */
let kiteX = 0;
let kiteY = 0;
let dirX = 1;

const MIN_Y = -150; // reaching this = win (kite flew to the top)
const MAX_Y = 100;  // reaching this = lose (kite fell)

let gameTimer = null;
let gameOver = false;
let gameRunning = false;

// Elements created when the game starts (tracked here so resetGame can clean them up)
let scoreEl = null;
let accEl = null;
let keyvalEl = null;
let stopBtn = null;
let restartBtn = null;

// Score state
let scoreVal = 0;
let missVal = 0;
let randomKey = '';
let answered = false;

/* ---------- Kite movement ---------- */
function applyKitePosition(){
  kiteY = Math.max(MIN_Y, Math.min(MAX_Y, kiteY));
  anchor.style.transform = `translate(${kiteX}px, ${kiteY}px)`;
  checkGameStatus();
}

function moveKiteVertical(amount){
  if (gameOver) return;
  kiteY += amount;
  applyKitePosition();
}

function driftHorizontal(){
  if (!gameOver){
    kiteX += dirX * 0.5;
    if (kiteX > 60 || kiteX < -60) dirX *= -1;
    applyKitePosition();
  }
  requestAnimationFrame(driftHorizontal);
}
requestAnimationFrame(driftHorizontal);

/* ---------- Win / lose check ---------- */
function checkGameStatus(){
  if (gameOver || !gameRunning) return;

  if (kiteY <= MIN_Y){
    endGame(true);
  } else if (kiteY >= MAX_Y){
    endGame(false);
  }
}

function endGame(didWin){
  gameOver = true;
  gameRunning = false;

  clearInterval(gameTimer);
  document.removeEventListener('keydown', flyTheKite);

  showMessage(didWin);
}

/* ---------- Animated win/lose message ---------- */
function ensureMessageStyles(){
  if (document.getElementById('gameMessageStyle')) return;
  const style = document.createElement('style');
  style.id = 'gameMessageStyle';
  style.innerHTML = `
    #gameMessageOverlay{
      position:absolute; inset:0;
      display:flex; align-items:center; justify-content:center;
      z-index:999;
    }
    .game-message-text{
      font-size:2.2rem; font-weight:bold; color:#fff;
      background:rgba(0,0,0,0.6); padding:24px 40px; border-radius:16px;
      text-align:center; line-height:1.4;
      animation:popIn .5s ease-out, floatMsg 1.8s ease-in-out infinite .5s;
    }
    #gameMessageOverlay.win .game-message-text{ color:#ffd700; }
    #gameMessageOverlay.lose .game-message-text{ color:#ff8a80; }
    @keyframes popIn{
      0%{ transform:scale(0); opacity:0; }
      70%{ transform:scale(1.15); opacity:1; }
      100%{ transform:scale(1); opacity:1; }
    }
    @keyframes floatMsg{
      0%,100%{ transform:translateY(0); }
      50%{ transform:translateY(-10px); }
    }
    .confetti-piece{
      position:absolute; top:-20px; width:8px; height:14px;
      animation:confettiFall linear forwards;
    }
    @keyframes confettiFall{
      to{ transform:translateY(110vh) rotate(540deg); opacity:.9; }
    }
  `;
  document.head.appendChild(style);
}

function spawnConfetti(){
  const colors = ['#ffd700','#ff6b6b','#4ecdc4','#95e1d3','#ffa726','#c77dff'];
  for (let i=0;i<40;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random()*100 + '%';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDuration = (1.5 + Math.random()*1.5) + 's';
    scene.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function showMessage(didWin){
  ensureMessageStyles();

  const overlay = document.createElement('div');
  overlay.id = 'gameMessageOverlay';
  overlay.className = didWin ? 'win' : 'lose';

  const msg = document.createElement('div');
  msg.className = 'game-message-text';
  msg.textContent = didWin
    ? '🎉 You Win! Your typing speed is great — keep it up!'
    : '😢 Game Over. Great effort — practice a little more and you\'ll win next time!';

  overlay.appendChild(msg);
  scene.appendChild(overlay);

  if (didWin) spawnConfetti();

  setTimeout(() => {
    overlay.remove();
    resetGame();
  }, 2600);
}

/* ---------- Typing handler ---------- */
function generateRandomKey(){
  randomKey = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  if (keyvalEl) keyvalEl.textContent = randomKey;
}

function updateScoreboard(){
  if (scoreEl) scoreEl.textContent = `score : ${scoreVal}`;
  const total = scoreVal + missVal;
  const acc = total === 0 ? 100 : Math.floor((scoreVal / total) * 100);
  if (accEl) accEl.textContent = `accuracy : ${acc}%`;
}

function flyTheKite(event){
  if (gameOver || answered) return;

  answered = true;

  if (event.key.toLowerCase() === randomKey){
    scoreVal++;
    moveKiteVertical(-15); // correct key: kite climbs toward the top
  } else {
    missVal++;
    moveKiteVertical(20); // wrong key: kite drops
  }

  updateScoreboard();
}

/* ---------- Start / stop / reset ---------- */
const startbtn = document.getElementById('startbtn');
startbtn.addEventListener('click', startGame);

function startGame(){
  // reset state
  kiteX = 0;
  kiteY = 0;
  dirX = 1;
  gameOver = false;
  gameRunning = true;
  scoreVal = 0;
  missVal = 0;
  answered = false;

  stopBtn = document.createElement('button');
  restartBtn = document.createElement('button');
  stopBtn.textContent = 'Stop Game';
  restartBtn.textContent = 'Restart Game';
  stopBtn.id = 'stopbtn';
  restartBtn.id = 'restart';
  scene.appendChild(stopBtn);
  scene.appendChild(restartBtn);

  stopBtn.addEventListener('click', () => {
    gameOver = true;
    gameRunning = false;
    clearInterval(gameTimer);
    document.removeEventListener('keydown', flyTheKite);
    resetGame();
  });

  restartBtn.addEventListener('click', () => {
    gameOver = true;
    gameRunning = false;
    clearInterval(gameTimer);
    document.removeEventListener('keydown', flyTheKite);
    resetGame();
    startGame();
  });

  scoreEl = document.createElement('div');
  accEl = document.createElement('div');
  scoreEl.id = 'score';
  accEl.id = 'accurent';
  scoreEl.textContent = `score : ${scoreVal}`;
  accEl.textContent = 'accuracy : 100%';
  scene.appendChild(scoreEl);
  scene.appendChild(accEl);

  keyvalEl = document.createElement('div');
  keyvalEl.id = 'keyval';
  scene.appendChild(keyvalEl);

  startbtn.remove();

  generateRandomKey();

  gameTimer = setInterval(() => {
    if (gameOver){
      clearInterval(gameTimer);
      return;
    }
    if (!answered){
      missVal++;
      moveKiteVertical(20); // no input in time: kite drops
      updateScoreboard();
    }
    answered = false;
    generateRandomKey();
  }, 1000);//check the difficulaty level

  document.addEventListener('keydown', flyTheKite);
}

function resetGame(){
  clearInterval(gameTimer);
  document.removeEventListener('keydown', flyTheKite);

  [scoreEl, accEl, keyvalEl, stopBtn, restartBtn].forEach(el => el && el.remove());
  scoreEl = accEl = keyvalEl = stopBtn = restartBtn = null;

  kiteX = 0;
  kiteY = 0;
  dirX = 1;
  gameOver = false;
  gameRunning = false;
  answered = false;
  applyKitePosition();

  if (!document.getElementById('startbtn')){
    scene.appendChild(startbtn);
  }
}


