const construction_element = document.querySelector(".c_comp_name");
const construction_text = construction_element.textContent;

const split_text = construction_text.split("");

construction_element.textContent = "";

for (let i = 0; i < split_text.length; i++) {
    construction_element.innerHTML += "<span>" + split_text[i] + "</splan>";
}

let char = 0;
let timer = setInterval(onTick, 45);

function onTick() {
    const span = construction_element.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char == split_text.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}