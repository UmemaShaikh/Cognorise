const questions=[
    {
        // Question 1
        question:"What is the full form of HTML?",
        answers:[
            {text:"A. Hyper Text Markup Language",correct:true},
            {text:"B. Hyper Text Making Language",correct:false},
            {text:"C. Hyper Text Managing Language",correct:false},
            {text:"D. Hyper Text Mastering Language",correct:false}
        ]
        },
    
    {
        // Question 2
        question:"What is the purpose of the &lt;head&gt;  tag in HTML?",
        answers:[
            {text:"A. To define the body of the HTML document",correct:false},
            {text:"B. To define the head of the HTML document",correct:true},
            {text:"C. To define the title of the HTML document",correct:false},
            {text:"D. To define the footer of the HTML document",correct:false}
        ]
    },
    {
        // Question 3
        question:"What is the full form of CSS?",
        answers:[
        {text:"A. Cascading Style Solution",correct:false},
        {text:"B. Cascading Style System",correct:false},
        {text:"C. Cascading Style Sheet",correct:true},
        {text:"D. Cascading Style Service",correct:false}
        ]
        },
        {
        // Question 4
            question:"What is the purpose of the CSS property 'float'?",
            answers:[
                {text:"A. To specify the background color of an element",correct:false},
                {text:"B. To specify the font size of an element",correct:false},
                {text:"C. To specify the alignment of an element",correct:true},
                {text:"D. To specify the border style of an element",correct:false}
            ]
        },
        {
        // Question 5
            question:"Which of the below CSS properties is used to change the background color of CSS ?",
            answers:[
                {text:"A. background-color",correct:true},
                {text:"B. background-image",correct:false},
                {text:"C. background-size",correct:false},
                {text:"D. background-position",correct:false}
            ]
        },
        {
            // Question 6
            question:"Which of the below is the correct syntax to put a line over text in CSS?",
            answers:[
                {text:"A. text-decoration: underline;",correct:false},
                {text:"B. text-decoration: overline;",correct:true},
                {text:"C. text-decoration: line-through;",correct:false},
                {text:"D. text-decoration: none;",correct:false}
            ]
        },
        {
            // Question 7
            question:"How do we set the default width of the font in CSS ?",
            answers:[
                {text:"A. font-size",correct:false},
                {text:"B. font-weight",correct:false},
                {text:"C. font-family",correct:false},
                {text:"D. font-width",correct:true}
            ]
        },

        {
            // Question 8
            question:"What is the full form of JS?",  
            answers:[
                {text:"A. Java Style",correct:false},
                {text:"B. JavaScript",correct:true},
                {text:"C. Java Syntax",correct:false},
                {text:"D. Java System",correct:false}

            ]
            },
        {
            // Question 9
            question:"What is the purpose of the JavaScript function 'alert()'?",
            answers:[
                {text:"A. To display a message box with a specified message",correct:true},
                {text:"B. To display a confirmation box with a specified message",correct:false},
                {text:"C. To display a prompt box with a specified message",correct:false},
                {text:"D. To display a prompt box with a specified message and a default value",
                    correct:false}
                ]
        },
        {
            // Question 10
            question:"Inside which HTML element do we put the JavaScript?",
            answers:[
                {text:"A. &lt;script&gt;",correct:true},
                {text:"B. &lt;javascript&gt;",correct:false},
                {text:"C. &lt;js&gt;",correct:false},
                {text:"D. &lt;scripting&gt;",correct:false}

            ]
        },
        // {
        //     // Question 11
        //     question:"How many ways are there with which we can declare a variable in javascript?",
        //     answers:[
        //         {text:"A. 1",correct:false},
        //         {text:"B. 2",correct:false},
        //         {text:"C. 3",correct:true},
        //         {text:"D. 4",correct:false}
                
        //     ]
        // },
        // {
        //     // Question 12
        //     question:"Where is the correct place to insert a JavaScript?",
        //     answers:[
        //         {text:"A. The &lt;head&gt; section",correct:true},
        //         {text:"B. The &lt;body&gt; section",correct:true},
        //         {text:"C. Both the &lt;head&gt and &lt;body&gt; sections",correct:true},
        //         {text:"D. Neither the &lt;head&gt; nor the &lt;body&gt; sections",correct:false}
        //     ]
        // },
       
]

let questionElement=document.querySelector("#question");
let answerButtons =document.querySelector(".answer-buttons");
let lastbtn= document.querySelector("#next-btn");

let currQuesIdx=0;
let score=0;

function startQuiz(){
     currQuesIdx=0;
     score=0;
     lastbtn.innerHTML="Next";
     showQuestion();
}

function showQuestion(){
    reset();
     let currQues=questions[currQuesIdx];
     let quesNum=currQuesIdx+1;
     questionElement.innerHTML=`${quesNum}. ${currQues.question}`
     
     currQues.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
            }

        button.addEventListener("click",selectAnswer)
     });
}
function reset(){
    lastbtn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
     button.disabled =true;
    });
    lastbtn.style.display="block";
}

function showScore(){
    reset();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    if(score>questions.length-4){
        questionElement.innerHTML+=`<br><br><br><br><br><br><br
        <h1>Congratulations! You are a genius!</h1>`
        
    }
    lastbtn.innerHTML="Play Again";
    lastbtn.style.display="block";

}

function handleNextBtn(){
    currQuesIdx++;
    if(currQuesIdx<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
lastbtn.addEventListener("click",()=>{
  if(currQuesIdx<questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
});


startQuiz();
