let arrowRight= document.querySelector('svg');
let idLearnMore = document.querySelector("#idLearnMore");

idLearnMore.addEventListener('mouseover', translateArrowRight);
idLearnMore.addEventListener('mouseout', translateArrowRight);
function translateArrowRight(){
    arrowRight.classList.toggle('translateArrow');
}

