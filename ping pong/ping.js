//jogo de ping pong
var iniciar ;
var bola;
var cpu;
var player;
var painel_pontos;
//animation control
var game, frame;
//posição
var bolax, bolay;
var posplayerx,posplayery,poscpux,poscpuy;
//direção
var dirJy;

//posições iniciais
var posinitialy  =180,posinitialcpuy = 180,posinitialbolax = 475, posinitialbolay = 240;

//tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

//direção
var dirbolax, dirbolay;
var dirplayerY = 0, dircpuY = 0;
var velbola, velcpu, verplayer;

//controle
var pontos = 0;
var tecla;