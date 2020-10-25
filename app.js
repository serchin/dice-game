// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая.
// Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална
var activePlayer;
// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;
// Идэвхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо
var roundScore;

// Шооны зургийг үзүүлэх элементийг ДОМ-оос хайж олоод энд хадгалъя.
var diceDom=document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ.
initGame();

//Шинэ тоглоом эхлэхэд бэлтгэнэ.
function initGame(){
    // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглье.
activePlayer=0;
// Тоглогчийн цуглууласан оноог хадгалах хувьсагч
scores=[0,0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

roundScore=0;

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;

// Тоглогчдын нэрийг буцааж гаргах
document.getElementById("name-0").textContent='PLAYER 1';
document.getElementById("name-1").textContent='PLAYER 2';

// winner class-ийг авч хаях
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

// Аль нь хожсоныг мэдэхгүй тул 2лангаас нь active-ийг remove хийлээ
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

// Active тоглогчийг улаанаар тэмдэглэх
document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display="none";
}

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function(){
    // 1-6 доторх санамсаргүй 1 тоог гаргаж авна.
    var diceNumber=Math.floor(Math.random()*6)+1;

    // Шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display="block";

    // Санамсаргүй буусан тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ
    diceDom.src="dice-"+diceNumber+".png";
   
    // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
if(diceNumber!==1){
    // 1-ээс ялгаатай буулаа. Буусан тоог тоглогчид нэмж олгоно.
    roundScore=roundScore+diceNumber;
    document.getElementById("current-"+activePlayer).textContent=roundScore;
} else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө. 
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    
    switchToNextPlayer();

  }

})

//hold товчийг ажилд оруулах
document.querySelector('.btn-hold').addEventListener('click',
    function(){ 
        // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноо дээр нь нэмж өгнө.
        scores[activePlayer]=scores[activePlayer]+roundScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
        //Дэлгэц дээр оноог нь өөрчилнө.
        //Уг тоглогч хожсон эсэхийг шалгах
        // Ялагч гэсэн үг гаргана.
        if(scores[activePlayer]>=10) {
            document.getElementById('name-'+activePlayer).textContent='winner';    
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
        }
        else {
        
         
        // Ээлжний оноог 0 болгоно.
        // Тоглогчийн ээлжийг солино.

        switchToNextPlayer();
   }
})

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer(){
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore=0;
document.getElementById("current-"+activePlayer).textContent=0;
        
    // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
    activePlayer===0 ? (activePlayer=1) : (activePlayer=0);
    
    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно
    diceDom.style.display="none"; 
}

// NEW GAME буюу шинээр тоглоом эхлүүлэх
document.querySelector('.btn-new').addEventListener('click', initGame);
