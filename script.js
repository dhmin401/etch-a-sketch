const container = document.querySelector('#container')
let elements;
let color = 'black'

createGrid(20)

function createGrid(size) {
    let gridCol = "grid-template-columns:"
    for(let i = 0; i < size; i++) {
        gridCol += " auto"
        container.style.cssText = gridCol
        for(let i = 0; i < size; i++) {
            const content = document.createElement('div')
            content.classList.add('box')
            container.appendChild(content)
        }
    }
    elements = document.querySelectorAll(".box")
    coloring();
}

function coloring() {
    elements.forEach((element) => {
        let opacity = 0.1;
        element.addEventListener("mouseover", event => {
            if(color === 'random') {
                element.style.backgroundColor = random_color()
            }
            else if(color === 'grey') {
                opacity += 0.1
                element.style.backgroundColor = grey_color(opacity)
            }
            else {
                element.style.backgroundColor = color
            }
        });
    });
}

const clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', (e) => {
    clear()
});

const buttons = document.querySelectorAll('.color-btn')
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    color = button.id;
  });
});

const submitBtn = document.querySelector('#submit-btn')
submitBtn.addEventListener('click', (e) => {
  let scale = document.getElementById('scale').value
  clear()
  container.innerHTML = "";
  createGrid(scale)
});

function clear() {
     elements.forEach((element) => {
         element.style.backgroundColor = ''
    });
}


function random_color() {
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    return bgColor
}


function grey_color(opacity) {
    var x = 255 - (255 * opacity)
    var bgColor = "rgb(" + x + "," + x + "," + x + ")"
    return bgColor
}

