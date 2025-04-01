let resultScreen = document.querySelector(".div2");
console.dir(resultScreen);
resultScreen.innerText = "0";

// function cifrebi(num){
//     resultScreen.innerText = resultScreen.innerText = num
// }

function cifrebi(a) {
  if (a === "." && resultScreen.innerText === "") {
    resultScreen.innerText = "0.";
  } else {
    resultScreen.innerText = resultScreen.innerText + a
  }
}

function rst(){
    resultScreen.innerText = ""
}

function dell(){
    resultScreen.innerText = resultScreen.innerText.slice(0, -1)
}

function operators(op){
    if(resultScreen.innerText === "" ||
        resultScreen.innerText.at(-1) === "+" ||
        resultScreen.innerText.at(-1) === "-" ||
        resultScreen.innerText.at(-1) === "*" ||
        resultScreen.innerText.at(-1) === "/"
    ){
        resultScreen.innerText = resultScreen.innerText.slice(0,-1) + op
    } else{
        resultScreen.innerText =  resultScreen.innerText+ op
    }
    console.log( resultScreen.innerText)
}

function tolia(){
    resultScreen.innerText = eval( resultScreen.innerText )
}