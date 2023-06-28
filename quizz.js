const questions = [
    {
        'ques' : 'Where does the Mt.Everest lie?',
        'a': 'Nepal',
        'b' : 'Bhutan',
        'c' : 'China',
        'd' : 'USA', 
        'correct' : 'a',
    },
    {
        "ques" : "Current President of Nepal?",
        "a": "KP Oli",
        "b" : "Prachada",
        "c" : "Ram Chandra poudel",
        "d" : "Ram Baran Yadav", 
        "correct" : "c"
    },
    {
        "ques" : "When was the election of fedreral and provincal gov held?",
        "a": "4th Mangsir 2078",
        "b" : "31th Baisakh 2078",
        "c" : "10th Baisakh 2079",
        "d" : "1st Chaitra 2078", 
        "correct" : "a"
    },
    {
        "ques" : "Who was the 1st President of Nepal?",
        "a": "KP Oli",
        "b" : "Prachada",
        "c" : "Ram Chandra poudel",
        "d" : "Ram Baran Yadav", 
        "correct" : "d"
    },
];
let index = 0;
let correctAns = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");

function loadQuestion()
{
    clearAns();
    const data = questions[index];
    quesBox.innerHTML =data.ques;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
}
function btnClick(){
    checkAns();
    
}

function checkAns(){
    const selectedOption = document.querySelector("input[type='radio']:checked");

    if(selectedOption){
        if(selectedOption.value === questions[index].correct){
            correctAns++;
        }
        index++;
        if(index < questions.length){
            loadQuestion();   
        } else {
            // document.getElementById("alertMsg").innerHTML =correctAns;
            
            clearContainerBox();
        }
    } else 
    {
        document.getElementById("alertMsg").innerHTML = "Please select any option";
    }
}
function clearAns() {
    optionInputs[0].checked = false;
    optionInputs[1].checked = false;
    optionInputs[2].checked = false;
    optionInputs[3].checked = false;
    alertMsg.innerHTML = "";
}

function clearContainerBox(){
    const submitBtn = document.getElementById('submitBtn');
    const optionBOX = document.getElementById("boxForOption");

    document.getElementById("quesBox").innerHTML = "Your Correct ans is:" ;
    document.getElementById("boxForOption").innerHTML = correctAns;
    submitBtn.style.display = 'none'; 

}

loadQuestion();