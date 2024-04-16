let question = [
    [
     "徳川8代将軍は誰？",
     "1.徳川綱吉",
     "2.徳川吉宗",
     "3.徳川秀忠",
     "2"
    ],
    ["徳川吉宗が行った政策は何と呼ばれたか？",
    "1.享保の改革",
    "2.寛政の改革",
    "3.天保の改革",
    "1"
    ],
    ["化政文化は誰による文化か？",
    "1.経済力を持った町人",
    "2.幕府による文化",
    "3.江戸の庶民による文化",
    "3"
    ]
];

//console.log(question[1][1])

let quiz = document.getElementById("question");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let num = question.length

let correct = 0;
let quizCnt = 0;

function quizSet() {
    quiz.textContent = question[quizCnt][0];
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
}

quizSet();

function answerCheck(ans) {
    if(ans == question[quizCnt][4]){
        alert("正解！！");
        correct++;
    } else{
        alert("不正解、、、");
    }
    quizCnt++
    console.log(`よくできました${quizCnt}問目完了`);
    if(quizCnt == question.length){
    quiz.textContent = `${num}問中、${correct}問正解でした！`
    ans1.textContent = "";
    ans2.textContent = "";
    ans3.textContent = "";
    } else{
        quizSet();
    }

}