"use strict";
let listaCorredores = [];
const registrar = () => {
    var _a, _b, _c;
    let nombre = (_a = document.getElementById('nombre')) === null || _a === void 0 ? void 0 : _a.nodeValue;
    let edad = (_b = document.getElementById('edad')) === null || _b === void 0 ? void 0 : _b.nodeValue;
    let correo = (_c = document.getElementById('correo')) === null || _c === void 0 ? void 0 : _c.nodeValue;
    listaCorredores.push(nombre);
};
const mostrar = () => {
    let runners = document.getElementById('runners');
    runners.innerHTML = '';
    for (const runner of listaCorredores) {
        let runnerParagraph = document.createElement('p');
        runnerParagraph.innerText = runner;
        runners === null || runners === void 0 ? void 0 : runners.appendChild(runnerParagraph);
    }
};
console.log(listaCorredores);
