
let telaAtual = 1;
document.querySelectorAll(".viatura").forEach(v => v.remove());


const texto = `
> iniciando sistema...

> scanning memories...

> buscando persona especial...

> persona encontrada
> nombre: Elen Ambrosio Souza

> status: mi novia ❤️

> cargando nuestra historia...
`;

let i = 0;

function digitar(){

if(i < texto.length){

document.getElementById("terminal-text").innerHTML += texto.charAt(i);

i++;

setTimeout(digitar,40);

}

}

digitar();


function startStory(){

document.getElementById("music").play();

irParaTela(2);

}


function irParaTela(numero){
    telaAtual = numero;
    document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
});

document.getElementById("tela"+numero).classList.add("ativa");

if(numero === 2){
animarEventos();
}

if(numero === 5){

digitarCarta();

setInterval(criarCoracao,600);

/* viatura aparece de vez em quando */

setInterval(criarViatura,12000);

}

/* NOVA TELA DO VIDEO */

if(numero === 6){

const musica = document.getElementById("music");

if(musica){
musica.pause();
}

}

}




let coracoes = 0;

function pegarCoracao(el){

el.style.display = "none";

coracoes++;

if(coracoes === 4){

document.getElementById("mensagemJogo").innerText =
"Has desbloqueado mi corazón ❤️";

document.getElementById("botaoFinal").style.display = "inline-block";

}

}



const carta = `
22 de febrero de 2026

El día que nuestra historia empezó.

22 de marzo de 2026

1 mes después...

Quiero seguir escribiendo
muchos capítulos
de esta historia contigo.

Te amo.

Y si existe un hilo rojo...

me alegra que el mío
me haya llevado hasta ti.

Feliz 1 mes ❤️
`;

let j = 0;

function digitarCarta(){

const el = document.getElementById("textoCarta");

function escrever(){

if(j < carta.length){

el.innerHTML += carta.charAt(j);

j++;

setTimeout(escrever,40);

}

}

escrever();

}


// ANIMAÇÃO AO ROLAR A PÁGINA

function animarEventos(){

const eventos = document.querySelectorAll(".evento");

eventos.forEach((evento, index) => {

setTimeout(() => {

evento.classList.add("apareceu");

}, index * 600);

});

}


function criarCoracao(){

const coracao = document.createElement("div");

coracao.className = "coracao-final";

coracao.innerText = "❤️";

coracao.style.left = Math.random()*100 + "vw";

document.body.appendChild(coracao);

setTimeout(()=>{
coracao.remove();
},6000);

}






// CRIAR ESTRELAS PISCANDO

for(let i=0;i<40;i++){

const star = document.createElement("div");

star.className = "star";

star.style.left = Math.random()*100+"vw";
star.style.top = Math.random()*100+"vh";

star.style.animationDelay = Math.random()*3+"s";

document.body.appendChild(star);

}



function criarEstrelaCadente(){

const estrela = document.createElement("div");

estrela.className = "shooting-star";

estrela.style.top = Math.random()*50+"vh";

document.body.appendChild(estrela);

setTimeout(()=>{
estrela.remove();
},3000);

}

setInterval(criarEstrelaCadente,8000);



function criarViatura(){

if(telaAtual !== 5) return; // só funciona na tela 5

const viatura = document.createElement("div");

viatura.className = "viatura";

viatura.innerText = "🚓💨👮‍♂️👮‍♂️👮‍♂️👮‍♀️";

document.body.appendChild(viatura);

setTimeout(()=>{
viatura.remove();
},6000);

}


const video = document.getElementById("meuVideo");
const musica = document.getElementById("music");

if(video){

video.addEventListener("ended",()=>{

/* fade in da música */

musica.volume = 0;
musica.play();

let volume = 0;

const fade = setInterval(()=>{

if(volume < 1){

volume += 0.05;
musica.volume = volume;

}else{

clearInterval(fade);

}

},200);


/* mostrar mensagem final */

const msg = document.getElementById("finalMensagem");

setTimeout(()=>{
msg.style.opacity = 1;
},500);


/* RESETAR O VIDEO */

video.currentTime = 0;

});

}
