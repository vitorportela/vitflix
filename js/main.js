var numerofilme = 0;
function trailer(){
    /*document.getElementsByTagName("BODY")[0].style.overflow = "hidden";*/
    document.getElementById("fundo").style.display = "block";
    document.getElementById("video").src = "https://www.youtube.com/embed/"+links[numerofilme];
}
function hidefundo(){
    /*document.getElementsByTagName("BODY")[0].style.overflow = "auto";*/
    fundo = document.getElementById("fundo");
    fundo.style.display = "none";
    var iframe = fundo.querySelector( 'iframe');
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}

function clique(numero) {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    document.getElementById("imagem").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url("+imagens[numero]+")";
    document.getElementById("titulo").innerHTML = titulos[numero];
    document.getElementById("resumo").innerHTML =  resumos[numero];
    document.getElementById("botoes").style.display = "block";
    document.getElementById("sociais").style.display = "none";
    numerofilme = numero;
}

function home(){

    document.getElementById("imagem").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url(img/m00b.jpg)";
    document.getElementById("titulo").innerHTML = titulos[0];
    document.getElementById("resumo").innerHTML =  resumos[0];
    document.getElementById("botoes").style.display = "none";
    document.getElementById("sociais").style.display = "block";
}

var imagens = ["",
"https://www.themoviedb.org/t/p/original/grbqn667G0LSdwsocBfIayiJvtq.jpg",
"https://www.themoviedb.org/t/p/original/ugoims6PfRgcAcIgTRoK2uvjhOu.jpg",
"https://www.themoviedb.org/t/p/original/xLsM5yTg9he5PWXXbrwzw1Wg8xp.jpg",
"https://www.themoviedb.org/t/p/original/fAJuZDEkrqmYQUUDrro8wRqb2Tn.jpg",
"https://www.themoviedb.org/t/p/original/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
"https://www.themoviedb.org/t/p/original/ijnaE8IU7XC5kA8uZbTxq6SmSnH.jpg",
"https://www.themoviedb.org/t/p/original/hXmfyEZRFLLkC1W9Ts4bFU2EwAT.jpg",
"https://www.themoviedb.org/t/p/original/i03tV9H6EX6eMma1rMqJ3ggpNVn.jpg",
"https://www.themoviedb.org/t/p/original/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
"https://www.themoviedb.org/t/p/original/gaqWbJ9Qde3z9xlvGh3FtIn7e40.jpg",
"https://www.themoviedb.org/t/p/original/58Gl3xXEvhF557tZER55rbPiMOT.jpg",
"https://www.themoviedb.org/t/p/original/fatz1aegtBGh7KS0gipcsw9MqUn.jpg"];
var titulos = ["Vitor Portela",
"NOVA ORDEM ESPACIAL",
"RELATOS DO MUNDO",
"MALCOLM E MARIE",
"PARA TODOS OS GAROTOS",
"OS PEQUENOS VESTÍGIOS",
"SOUL",
"BLISS",
"PONTO VERMELHO",
"TENET",
"DESTRUIÇÃO FINAL",
"ZONA DE COMBATE",
"JUDAS E O MESSIAS NEGRO"];
var resumos = ["O Projeto VITFLIX (clone do netflix) foi criado utilizando tecnologias simples como HTML5, CSS3 e JavaScript.",
"Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide.‎",
"Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.",
"Um cineasta chega em casa após a première de seu novo filme. Enquanto aguarda a liberação das críticas, ele e sua namorada se veem desenrolando os muitos problemas e segredos do seu relacionamento.",
"Lara Jean Covey está prestes a se formar e iniciar uma nova fase de sua vida. Durante duas viagens marcantes, ela começa a avaliar como ficará sua relação com a família, os amigos e o namorado após a formatura.",
"Um policial começa a ter problemas em sua investigação devido a seu passado obscuro e sua tendência por quebrar as regras.",
"Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.",
"Uma alucinante história de amor vivida por Greg, recentemente divorciado e demitido, quando ele conhece a misteriosa Isabel, que vive nas ruas e está convencida de que o mundo poluído e deteriorado ao redor deles é só uma simulação virtual. A princípio descrente, Greg descobre que pode haver alguma verdade na louca teoria de Isabel.",
"Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos.",
"Armado com apenas uma palavra – Tenet – e lutando pela sobrevivência do mundo inteiro, o Protagonista viaja através de um mundo crepuscular de espionagem internacional em uma missão que irá desenrolar em algo para além do tempo real.",
"Quando cientistas descobrem que um cometa atingirá a Terra em poucos dias e provavelmente causará a extinção da humanidade, uma família tenta cruzar o país para chegar a sua única esperança de sobrevivência: um grupo de abrigos subterrâneos em Greenland.",
"Em um futuro próximo, um piloto de drone e um androide ultrassecreto trabalham lado a lado no campo de batalha para evitar um ataque nuclear.",
"A história de Fred Hampton, um dos líderes do Partido dos Panteras Negras, que foi assassinado em 1969 sob as ordens do FBI, que coagiu um pequeno criminoso chamado William O'Neal para ajudá-los a silenciar Hampton."];

var links = ["",
"v6jmKLAW928",
"OawrKhc3XdM",
"x24-QURldsE",
"wwaPEbdu6o4",
"9tOME28jr2U",
"hWBxoH4-4yw",
"ZHtPm8v-yNw",
"dBUsVqqDhsY",
"VvqqrbaMKtk",
"hresXHZox5w",
"71QFeMSE3qU",
"GSJTm3RkS3w"];