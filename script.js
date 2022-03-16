var dados = [];

function jogar1d4() {
    var numeroAleatorio = Math.floor(1 + 4 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d4: ${numeroAleatorio}`;
}
function jogar1d6() {
    var numeroAleatorio = Math.floor(1 + 6 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d6: ${numeroAleatorio}`;
}
function jogar1d8() {
    var numeroAleatorio = Math.floor(1 + 8 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d8: ${numeroAleatorio}`;
}
function jogar1d10() {
    var numeroAleatorio = Math.floor(1 + 10 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d10: ${numeroAleatorio}`;
}
function jogar1d12() {
    var numeroAleatorio = Math.floor(1 + 12 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d12: ${numeroAleatorio}`;
}
function jogar1d20() {
    var numeroAleatorio = Math.floor(1 + 20 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d20: ${numeroAleatorio}`;
}
function jogar1d100() {
    var numeroAleatorio = Math.floor(1 + 100 * Math.random());

    var resp = document.getElementById('logMessage');
    resp.innerHTML = `Resultado do 1d100: ${numeroAleatorio}`;
}