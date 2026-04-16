


// <h3>2. Implementing If Conditional Statement</h3>
let age = 18
if (age >= 18) {
  console.log("Eres adulto y puedes obtener licencia.")
} else {
  console.log("No eres adulto. No puedes obtener licencia.")
}

let username = "admin"
if (username == "admin") {
  console.log("Admin Access allowed")
}else {
  console.log("Admin Access not allowed")
}

// Switch
let day = 1
switch (day) {
  case 1: console.log("Lunes")
    break
  case 2: console.log("Martes")
    break
  case 3: console.log("Miércoles")
    break
  case 4: console.log("Jueves")
    break
  case 5: console.log("Viernes")
    break
  case 6: console.log("Sábado")
    break
  case 7: console.log("Domingo")
    break
}



// tabla de multiplicar de un número con while, do while, y for

let count = 1
let tableOf = 5

while (count <= 10) {
  console.log(count * tableOf)
  count++
}

count = 1
do {
  console.log(count * tableOf)
  count++
} while (count <= 10);

for (let count = 1; count <= 10; count++){
  console.log(count * tableOf)
}

// Arrays
let fruits = ["Apple","Mango","Banana"] // se crea un array con []
console.log(fruits) // accediendo a todo el array
console.log(fruits[0]) // accediendo al item 0 del array
console.log(fruits[1]) // accediendo al item 1 del array
console.log(fruits[2]) // accediendo al item 2 del array

fruits[0] = "Peach" // cambiando Apple por Peach (el item 0)
console.log(fruits)
console.log(fruits[0]) // accediendo al item 0 del array

let score = [2,6,3,65,89]
console.log(score)

let array = [1, "Aple", -1,0.5, true]
console.log(array) // un arrau puede tener elementos de diferente tipo

console.log(array.length) // para conocer la cantidad de elementos de un array



// Usando el operador "spread" (los tres puentos: ... )

// para agregar todos los elementos de un array a otro array
let fruits1 = ["Apple","Mango","Banana","Peach"]
let fruits2 = ["Pineapple","Guava"]

// se desea pasar los items de fruits1 y fruits2 a allfruits
allFruits = [...fruits1,...fruits2]
console.log(allFruits)
// el order importa
allFruits = [...fruits2,...fruits1]
console.log(allFruits)
// se puede insertar los items de un array en un lugar específico de otra
let fruits3 = ["Melon","Lemon","Strawberry",...allFruits,"Grape","Orange"]
console.log(fruits3)


///////////////////////////////////////////////////////////////////////////////
// 5. Functional Programming In JavaScript

// Functions as Value

// declarando una función normalmente:
function sayHi(){
  console.log("Hola")
}
console.log(sayHi) // devuelve la función en sí misma, más no el resultado de la función
// si se asigna a una variable el nombre de la función, es como si la función también se llamara como la variable:
let hola = sayHi
hola() // ejecuta sayHi()


function suma (a,b){ // una función normal que suma dos valores
  console.log(a + b)
}
// asignando esta función a un objeto (como método)
let mate = {
  add : suma, // agrega a add la función suma convirtiéndolo en un método.
}
mate.add(4, 6) // se ejecuta la fumción suma desde el método add del obj mate.



///////////////////////////////////////////////////////////////////////////////
// 6. JavaScript Document Object Model DOM & DOM Events

///////////////////////////////////////
// 3. Get Element By Tag Name & Class Name
document.getElementsByClassName('paragraph')

///////////////////////////////////////
// 4. innerText & TextContent
function v06_04_e01 (obj){
  console.log("Con innerText:")
  console.log(obj.previousElementSibling.innerText)
  console.log("Con textContent:")
  console.log(obj.previousElementSibling.textContent)
  console.log("Con innerHTML:")
  console.log(obj.previousElementSibling.innerHTML)
}

///////////////////////////////////////
// 5. QuerySelector

document.querySelector("ul") // para seleccionar el primer elemento ul

document.querySelector(".parrafo") // para seleccionar el primer elemento con la clase "parrafo"

document.querySelector("#especial") // para selccionar el primer elemento con el id "especial"

///////////////////////////////////////
// 6. Parent & Child Nodes

// para obtener el padre:
document.getElementById('v06_06').parentNode
document.getElementById('v06_06').parentElement
// para obtener el hijo
document.getElementById('v06_06').childNodes
document.getElementById('v06_06').children
document.getElementById('v06_06').childElementCount
document.getElementById('v06_06').firstChild
document.getElementById('v06_06').firstElementChild
document.getElementById('v06_06').lastChild
document.getElementById('v06_06').lastElementChild

///////////////////////////////////////
// 7. Siblings-converted

// para obtener el siguiente hermano:
document.getElementById('v06_07').nextElementSibling
document.getElementById('v06_07').previousElementSibling
document.getElementById('v06_07').nextSibling
document.getElementById('v06_07').previousSibling

function v06_07_e01 (){
  let first = document.getElementById('v06_07_e01').firstElementChild
  console.log(`El primer elemento es: ${first.textContent}`)
  // console.log(first.textContent)
  console.log("El resto de hermanos son:")
  let ns = first.nextElementSibling
  while (ns) {
    console.log(ns.textContent)
    ns = ns.nextElementSibling
  }
}




let parent = document.querySelector("ul")

let item1 = document.createElement("li")
item1.textContent = "Apple"

let item2 = document.createElement("li")
item2.textContent = "Mango"

parent.prepend(item1, item2) // para agregar al inicio
parent.append(item1, item2) // para agregar al final
// en este caso sólo se ve el efecto de append, agregando item1 e item2 al final, esto debido a que primero los agregas al inicio con prepend, pero luego la siguiente línea, los agrega (mueve) al final ya que son los mismos objetos contenidos en las variables item1 e item2.


///////////////////////////////////////
// 20. Introduction To Events-converted
function hello(obj){
  console.log(`Hiciste clic en ${obj.innerHTML}`)
  //console.log(`Hiciste clic en ${obj}`)
}
function hello1(txt){
  console.log(`Hiciste clic en ${txt}`)
  //console.log(`Hiciste clic en ${obj}`)
}

///////////////////////////////////////
// 22. AddEventListener-converted
let elementClick = document.querySelector("#conEventListenerClic")
elementClick.addEventListener("click",function(){
  console.log("Hiciste clic en un elemento con addEventListener (click)")
})

///////////////////////////////////////
//  23. Mouseover & Mouseout-converted
let elementMouseOver = document.querySelector("#conEventListenerMouseover")
let txtAnterior = elementMouseOver.innerText

elementMouseOver.addEventListener("mouseover",function(){
  console.log("pusiste el mouse sobre un elemento con addEventListener (mouseover)")
  this.innerText="... sácame el mouse de encima !!!! >( "
  this.style.color = "red"
})
elementMouseOver.addEventListener("mouseout", function(){
  console.log("sacaste el mouse de un elemento con addEventListener (mouseout)")
  this.innerText = txtAnterior
  this.style.color = "inherit"
})

///////////////////////////////////////
// 25. Coding Challenge Part 10 DOM & DOM Events (Solution)-converted

// obteniendo botones
let incrementButton = document.querySelector(".button1")
let decrementButton = document.querySelector(".button2")

// cambiádoles el texto
incrementButton.innerText = "+"
decrementButton.innerText = "-"

// cambiando el fondo a boton 2
decrementButton.style.backgroundColor = "red"

// agregando texto contador
let countHolder = document.createElement("h2")
decrementButton.after(countHolder) // agregar después del botón decremento
// document.body.appendChild(countHolder) esto agrega al final del body
let contador = 0
countHolder.innerText = contador

// si se hace clic en el botón 1
incrementButton.addEventListener("click", ()=>{
  contador += 1
  countHolder.innerText = contador
})

// si se hace clic en el botón 2
decrementButton.addEventListener("click", ()=>{
  contador -= 1
  countHolder.innerText = contador
})


///////////////////////////////////////
// 27. Coding Challenge Part 11 Simple Interest Calculator (Solution)-converted

function calculate (){
  // obteniendo campos como floats
  let p = parseFloat(document.querySelector("#principalAmount").value)
  let n = parseFloat(document.querySelector("#timePeriod").value)
  let r = parseFloat(document.querySelector("#interestRate").value)

  let si = p * n * r / 100

  document.querySelector(".interest span").innerHTML = si
}

document.querySelector(".btn").addEventListener("click",calculate)


///////////////////////////////////////
// 29. Coding Challenge Part 12 Todo App Part 1 (Solution)-converted

let taskInput = document.querySelector(".taskinput")
let addButton = document.querySelector(".addtask")

addButton.addEventListener("click",addButtonClicked)

function addButtonClicked (){
  //let todoItem = taskInput.value
  console.log(taskInput.value)

  let listItem = document.createElement("li")
  let listItemText = document.createElement("p")
  let deleteButton = document.createElement("button")

  let unorderedList = document.querySelector(".todo-list")
  unorderedList.appendChild(listItem)
  listItem.style.border = "1px solid #999"
  listItem.style.width = "500px"

  listItemText.innerText = taskInput.value
  listItemText.style.display = "inline-block"
  listItemText.style.width = "250px"
  listItem.appendChild(listItemText)

  deleteButton.innerHTML = "Hecho"
  deleteButton.style.display = "inline-block"
  deleteButton.style.width = "100px"
  listItem.appendChild(deleteButton)
  deleteButton.addEventListener("click",()=>{
    listItem.remove()
  })

  taskInput.value = ""

}