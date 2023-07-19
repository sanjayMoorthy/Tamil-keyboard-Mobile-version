let nextPage = document.querySelector('.keyset2')
let btns = document.querySelectorAll("button")
let bodys = document.querySelector(".textarea")

// console.log(nextPage)
let currentPage = document.querySelector('.keyset1')
// console.log(currentPage);
let transectionBtn = document.querySelector('.additionalKey1')
// console.log(transectionBtn)
let numberTransaction = document.querySelector('.uparrow')
let keytamilNumber = document.querySelector('.keytamilNumber')
let keyNumber = document.querySelector('.keyNumber')

transectionBtn.addEventListener('click',(e)=>{
    e.target.classList.toggle("active")
    if(e.target.classList.contains("active")){
        e.target.innerText = "அக"
        currentPage.style.display = "none"
        nextPage.style.display = "block"
    }
    else{
        e.target.innerText = "?123"
        currentPage.style.display = "block"
        nextPage.style.display = "none"
    }
})

let array1 = ['க','உ','௩','௪','௫','௬','௭','௮','௯','௦'];
let array2 = [1,2,3,4,5,6,7,8,9,0];

function arrowFc(arrayName){
    let HTMLElem = arrayName.map(getData => {
        return elements = `
        <button class="page2Style1">${getData}</button>
        `
    }).join("")
    keytamilNumber.innerHTML = HTMLElem
}

arrowFc(array1)

let arrowBtn = false;

numberTransaction.addEventListener("click",()=>{
    if(arrowBtn == false){
        arrowBtn = true
        arrowFc(array1)
    }else{
        arrowBtn = false
        arrowFc(array2)
    }
})

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        if (btns[i].innerText == "⌫") {
            bodys.value = bodys.value.slice(0,-1);
        }
        else if (btns[i].innerText == "space") {
            bodys.value += ' '
        }
        else if(btns[i].innerText == "&#x21B5"){
            bodys.value += "\n"
        } else{
            bodys.value += btns[i].innerText
        }
    })
}

