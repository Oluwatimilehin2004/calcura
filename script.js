const display= document.getElementById('display')
const cont1= document.getElementById('conBall1')
const cont2= document.getElementById('conBall2')
const cont3= document.getElementById('conBall3')
const control= document.getElementById('control')
const mainContainer= document.getElementById('main-container')
const calc= document.getElementById('calc')
const theme= document.getElementById('theme')
const keyboardBox= document.getElementById('keyboardBox')
const numss= document.getElementById('numss')
const equalBtn= document.getElementById('equalBtn')
const resetBtn= document.getElementById('resetBtn')
const delBtn= document.getElementById('delBtn')
let currentInput= ''
let currentToggledTheme= '';

let toggled1= 'toggled1'
let toggled2= 'toggled2'
let toggled3= 'toggled3'


const press= (value) => {
    currentInput+= value
    display.innerText= currentInput
}

const clearDisplay= ()=> {
    currentInput= "";
    display.textContent= '';
}

const del= () => {
    let currentInput= display.innerText
    currentInput= currentInput.slice(0,-1)
    display.innerText= currentInput
}

const calculate= () => {
    try{
        let currentInput= display.innerText
        currentInput= eval(currentInput);
        display.innerText= currentInput;
    }catch (error){
        display.innerText= "Math Error"
    }
}

cont2.addEventListener('click', () =>{
    toogle2()
    localStorage.setItem('currentToggledTheme', toggled2)
})

cont1.addEventListener('click', () =>{
    toogle1()
    localStorage.setItem('currentToggledTheme', toggled1)
})
cont3.addEventListener('click', () =>{
    toogle3()
    localStorage.setItem('currentToggledTheme', toggled3)
})







function toogle1 () {
    mainContainer.style.background= 'rgb(52, 52, 70)'
    display.style.background= 'rgb(31, 31, 60)'
    keyboardBox.style.background= 'rgb(95, 95, 114)'
    resetBtn.style.color= 'white'
    resetBtn.style.background= 'rgb(67, 195, 242)'
    equalBtn.style.color= 'white'
    equalBtn.style.background= 'orangered'
    delBtn.style.color= 'white'
    delBtn.style.background= 'rgb(67, 195, 242)'
    display.style.color='white'
    calc.style.color= 'white'
    theme.style.color= 'white'
    numss.style.color='white' 

    cont2.style.background= 'transparent';
    cont1.style.background= 'orangered';
    cont3.style.background= 'transparent';
}

function toogle2 () {
    mainContainer.style.background= 'rgb(176, 175, 175)'
    display.style.background= 'rgb(142, 137, 137)'
    keyboardBox.style.background= 'rgb(142, 137, 137)'
    resetBtn.style.color= 'black'
    resetBtn.style.background= 'rgb(67, 195, 242)'
    equalBtn.style.color= 'black'
    equalBtn.style.background= 'orangered'
    delBtn.style.color= 'black'
    delBtn.style.background= 'rgb(67, 195, 242)'
    display.style.color='black'
    calc.style.color= 'black'
    theme.style.color= 'black'
    numss.style.color='black' 


    cont2.style.background= 'orangered';
    cont1.style.background= 'transparent';
    cont3.style.background= 'transparent';
}

function toogle3 (){
    mainContainer.style.background= 'rgb(52, 1, 75)'
    display.style.background= 'rgba(84, 11, 117, 0.68)'
    keyboardBox.style.background= 'rgba(84, 11, 117, 0.68)'
    resetBtn.style.color= 'yellow'
    resetBtn.style.background= 'rgb(137, 6, 198)'
    equalBtn.style.color= 'yellow'
    equalBtn.style.background= 'rgb(67, 195, 242)'
    delBtn.style.color= 'yellow'
    delBtn.style.background= 'rgb(137, 6, 198)'
    display.style.color='yellow'
    theme.style.color= 'yellow'
    calc.style.color= 'yellow'
    numss.style.color='yellow' 


    cont2.style.background= 'transparent';
    cont1.style.background= 'transparent';
    cont3.style.background= 'orangered';
}


window.addEventListener('load', () => {
    const currentTheme= localStorage.getItem('currentToggledTheme')

    if(currentTheme === 'toggled1'){
        toogle1()
    }else if(currentTheme === 'toggled2'){
        toogle2()
    }else{
        toogle3()
    }
  }
)
