const parrafo = document.getElementById('parrafo')

const botonSumar = document.getElementById('botonSumar')
const botonRestar = document.getElementById('botonRestar')

contador = 0



botonSumar.addEventListener('click', function(){
    let resultado = contador+=1
    parrafo.innerText = resultado
    
    if (parrafo.innerText > 0){
        parrafo.style.backgroundColor = "#0f0"
        parrafo.style.color = "#000"
    }
    
    
})

botonRestar.addEventListener('click', function(){
    let resultado = contador-=1
    parrafo.innerText = resultado

    if(parrafo.innerText < 0){
        parrafo.style.backgroundColor = "#f00"
        parrafo.style.color = "#fff"
    }

})



//!--------------------------------------------------------

const bajar = document.getElementById('botonBajar')
const subir = document.getElementById('botonSubir')
const desplegable = document.getElementById('desplegable')

bajar.addEventListener('click', (e) => {
    desplegable.style.display = "block"
    bajar.style.display = "none"
    subir.style.display = "block" 

    
})

subir.addEventListener('click', (e) => {
    desplegable.style.display = "none"
    bajar.style.display = "block"
    subir.style.display = "none"
})

//!---------------------------------------------------------

//* Conversor de temperaturas

//* 1c = 33.8 F

const celsius = document.getElementById('celsiusInput')
const fahrenheit = document.getElementById('fahrenheitInput')

const flecha1 = document.getElementById('flecha1')


flecha1.addEventListener('click', (e) => {
    
    const celsiusNum = parseInt(celsius.value)
    resultadoF = (celsiusNum * 9/5) + 32
    

    fahrenheit.placeholder = resultadoF

    if (celsius === NaN) {
        fahrenheit.placeholder = ''
    }

})

//!-----------------------------------------------------
//* To do list

const inputTodo = document.getElementById('inputtodo')
const botonAgregar = document.getElementById('agregar')
const ulContenedor = document.getElementById('container-tareas')



botonAgregar.addEventListener('click', function agregarTarea(){
    /* Creo un elemento li de lista */
    const lista = document.createElement('li')
    /* obtengo el valor del input */
    const texto = inputTodo.value

    /* en el elemento li ingreso el texto del input */
    lista.textContent = texto
    
    lista.classList.add('listaTexto')

    /* agrego el li con el texto ya listo en el ul */
    ulContenedor.appendChild(lista)
})


//!--------------------------------------------------------------

//* Cambiar color de fondo


const inputCambiar = document.getElementById('inputCambiar')
const botonCambiar = document.getElementById('botonCambiar')

const body = document.body

botonCambiar.addEventListener('click', function cambiarColor(){
    const color = inputCambiar.value
    body.style.backgroundColor = color
})