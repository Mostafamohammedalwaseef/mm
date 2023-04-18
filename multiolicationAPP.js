const scoreEL =document.getElementById('score')
const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)
const question = document.getElementById("question");
question.innerHTML = `What is ${num1} * ${num2}?`
const correctans = num1 * num2
const containerEL = document.getElementById("container")
let score = JSON.parse(localStorage.getItem("score"))
ansEL = document.getElementById("ans")
if (!score) {
  score = 0;
}

if (score>=-4) {
  scoreEL.innerText = `score:${score}`  
  
} else if(score<=-5 && score>=-8){
  scoreEL.innerText = `score:${score} ما تحل عدل يا علق`  
}
  else (  question.innerText = `الطيز ده طيز رفعت فمش هخليك تكمل:)`  )
containerEL.addEventListener("submit", () => {

  const userans = +ansEL.value

  if (userans === correctans) {
    score++
    console.log(score);
  } else {
    score--
  }

  update()
  console.log(score);
})
function update() {
  localStorage.setItem("score", JSON.stringify(score))
}