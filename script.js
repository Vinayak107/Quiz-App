const quizData = [
    {quetion:'What is JavaScript?',
    a: 'JavaScript is a scripting language used to make the website interactive',
    b: 'JavaScript is an assembly language used to make the website interactive',
    c: 'JavaScript is a compiled language used to make the website interactive',
    d: 'None of the mentioned',
    correct:'a'
    },
    // add more questions here...
    {quetion:'Which of the following is correct about JavaScript?',
        a:' JavaScript is an Object-Based language',
        b:'JavaScript is Assembly-language',
        c:' JavaScript is an Object-Oriented language',
        d:'JavaScript is a High-level language',
        correct:'a'},

    { quetion:'Among the given statements, which statement defines closures in JavaScript?',
    a:'JavaScript is a function that is enclosed with references to its inner function scope',
    b:'JavaScript is a function that is enclosed with references to its lexical environment',
    c:'JavaScript is a function that is enclosed with the object to its inner function scope',
    d:'None of the mentioned',
    correct:'b'},

    {quetion:` What will be the output of the following JavaScript code snippet?

    <p id="demo"></p>
    var txt1 = "Sanfoundry_";
    var txt2 = "Javascriptmcq";
    document.getElementById("demo").innerHTML = txt1 + txt2;`,
    a:' error',
    b: 'Sanfoundry_ Javascriptmcq',
    c: ' undefined',
    d: 'Sanfoundry_Javascriptmcq',
    correct:'d'},

    {quetion:`What will be the output of the following JavaScript code?

    <p id="demo"></p>
    <script>
    var js = 10;
    js *= 5;
    document.getElementById("demo").innerHTML = js;
    </script>`,
    a: '10',
    b: '50',
    c: '5',
    d: 'Error',
    correct:'b'
    }  
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.quetion;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer =undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;

}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
      answerEl.checked = false;
    })
}

submitBtn.addEventListener('click',()=>{
    
    const answer =   getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }       
        currentQuiz++;

        if(currentQuiz < quizData.length){
             loadQuiz();
            }
        else{
           quiz.innerHTML = `
                <h2>you answered cotrrectly at ${score}/${quizData.length}qeuestions</h2>
                <button onclick="location.reload()">Reload</button>`
            ;
        }
    }
})