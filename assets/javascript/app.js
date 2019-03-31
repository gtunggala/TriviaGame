
// selecting yo elements
const start= document.getElementById("start");
const quiz= document.getElementById("quiz");
const question= document.getElementById("question");
const qImg= document.getElementById("qImg");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const counter= document.getElementById("counter");
const timeGauge= document.getElementById("timeGauge");
const scoreDiv= document.getElementById("score");

// creating yo questions
let questions= [
    {
        question: "1. What is Bob's most noticable feature?",
        imgSrc: "assets/images/br-question1.jpg",
        choiceA: "His blouse",
        choiceB: "His hair",
        choiceC: "His height",
        correct: "B"
    },
    {
        question: "2. Where did Bob spend a lot of years of his life?",
        imgSrc: "assets/images/br-question2.jpg",
        choiceA: "Alaska",
        choiceB: "Canada",
        choiceC: "Indiana",
        correct: "A"
    },
    {
        question: "3. Who is the most famous animal in the series?",
        imgSrc: "assets/images/br-question3.jpg",
        choiceA: "Hootie the Owl",
        choiceB: "Pee-Pod the Pocket Squirrel",
        choiceC: "Ol' Squeeky Bluebird",
        correct: "B"
    },
    {
        question: "4. Which color is NOT featured in his paintings?",
        imgSrc: "assets/images/br-question4.jpg",
        choiceA: "Liquid white",
        choiceB: "Pthalo green",
        choiceC: "Van dyke blue",
        correct: "C"
    },
    {
        question: "5. What is one of Bob's favorite word?",
        imgSrc: "assets/images/br-question5.jpg",
        choiceA: "Paint",
        choiceB: "Tree",
        choiceC: "Little",
        correct: "C"
    },
    {
        question: "6. What does Bob never make?",
        imgSrc: "assets/images/br-question6.png",
        choiceA: "Houses",
        choiceB: "Cold winter scenes",
        choiceC: "Mistakes",
        correct: "C"
    },
    {
        question: "7. What television show was Bob featured in?",
        imgSrc: "assets/images/br-question7.jpg",
        choiceA: "The Art of Painting",
        choiceB: "The Joy of Painting",
        choiceC: "Bob's Neighborhood Paints",
        correct: "B"
    },
    {
        question: "8. What is the typical canvas that Bob uses to paint?",
        imgSrc: "assets/images/br-question8.jpg",
        choiceA: "Pre-stretched, double primed",
        choiceB: "18 x 24 inch",
        choiceC: "All of the above",
        correct: "A"
    },
    {
        question: "9. What did his son, Steve, prefer painting over Bob's 'happy little trees'?",
        imgSrc: "assets/images/br-question9.jpg",
        choiceA: "Joyous pondering clouds",
        choiceB: "Curious little critters",
        choiceC: "Happy little lakes",
        correct: "C"
    },
    {
        question: "10. What quote was NOT said by Bob?",
        imgSrc: "assets/images/br-question10.jpg",
        choiceA: "'We don't make mistakes, just happy little accidents.'",
        choiceB: "'Look for the helpers. You will always find people who are helping.'",
        choiceC: "'There's nothing wrong with having a tree as a friend.'",
        correct: "B"
    },
    {
        question: "11. Who is Bob Ross?",
        imgSrc: "assets/images/br-question11.jpg",
        choiceA: "An artist, confidant, and friend who gifted us the joy of painting",
        choiceB: "A man of honor, tranquilty, and lover of trees",
        choiceC: "Yes",
        correct: "C"
    }

];

const lastQuestion= questions.length - 1; //referring to the index of "questions"
let runningQuestion= 0;
let count= 0;
const questionTime= 10; // 10s
const gaugeWidth= 150; // 150px
const gaugeUnit= gaugeWidth/questionTime;
let timer;
let score= 0;

function renderQuestion() {
    let q= questions[runningQuestion];

    question.innerHTML= "<p>" + q.question + "</p>";
    qImg.innerHTML= "<img src="+ q.imgSrc + ">";
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML= q.choiceB;
    choiceC.innerHTML= q.choiceC;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz(){
    start.style.display= "none";
    renderQuestion();
    quiz.style.display= "block";
    renderCounter();
    timer= setInterval(renderCounter, 1000);
}



//yolo

//this is ya counter


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion);
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
};