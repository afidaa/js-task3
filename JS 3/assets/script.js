"use strict"
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');

let todo = [];
function add(){
    if(inp.value==' '  || todo.find(inp.value)){
        alert('deyer yazila bilmez');  
    }
    else{
        todo.push(inp.value);
        inp.value='';
    }
}
btn.addEventListener('click',add)
   