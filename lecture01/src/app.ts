
let listaCorredores: []=[];

const registrar = () =>{
    let nombre: any =document.getElementById('nombre')?.nodeValue;
    let edad: any= document.getElementById('edad')?.nodeValue;
    let correo: any=document.getElementById('correo')?.nodeValue;
    listaCorredores.push(nombre);
}
const mostrar= ()=>{
    let runners= document.getElementById('runners');
    runners.innerHTML='';

    for (const runner of listaCorredores) {
        let runnerParagraph= document.createElement('p');
        runnerParagraph.innerText =runner;
        runners?.appendChild(runnerParagraph);

    }
}
console.log(listaCorredores);
