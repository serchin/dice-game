// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглье.
var activePlayer=1;
// Тоглогчийн цуглууласан оноог хадгалах хувьсагч
var scores=[0,0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore=0;
//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice=Math.floor(Math.random()*6)+1;

// <div class="player-score" id="score-0">43</div>
// Програм эхлэхэд бэлтгэе
window.document.querySelector('#score-0').textContent=0;
// document.querySelector('#score-1').innerHTML='<em>0</em>';
window.document.querySelector('#score-1').textContent=0;
document.querySelector('.dice').style.display='none';
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;

console.log('Шоо :'+dice);