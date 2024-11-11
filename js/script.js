let button = document.querySelector('button');

button.addEventListener("click", setBackground);

function setBackground(){
    let paragraphFirst = document.querySelector('#first');
    let paragraphSecond = document.querySelector('#second');

    // paragraphFirst.style.backgroundColor = "red";
    // paragraphSecond.style.backgroundColor = "yellow";
    paragraphFirst.classList.toggle("red");
    paragraphSecond.classList.toggle("yellow");

}