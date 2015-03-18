var canvas1 = document.getElementById("layer1");
var ctx1 = canvas1.getContext("2d");
var canvas2 = document.getElementById("layer2");
var ctx2 = canvas2.getContext("2d");
var canvas3 =document.getElementById("layer3");
var ctx3 = canvas3.getContext("2d");
var canvas4=document.getElementById("layer4");
var ctx4 =canvas4.getContext("2d");
var canvas5=document.getElementById("layer5");
var ctx5 =canvas5.getContext("2d");





function camada_base(){
	ctx1.save()
	//fundo azul
	ctx1.fillStyle="#006CA9";
	ctx1.fillRect(0,0,canvas3.width,canvas3.height);
	ctx1.restore();
	ctx1.save();
	//textura da barra de fundo mais a cor em overlay
	var img= new Image();

	img.onload = function(){
		var padrao = ctx1.createPattern(img, 'repeat');
		ctx1.fillStyle = padrao;
		ctx1.fillRect(0,189,700,canvas3.height-189);
		
		ctx1.globalAlpha=0.9;
		ctx1.fillStyle="#03172F";
		ctx1.fillRect(0,189,700,canvas3.height-189);

	},
	img.src = "images/textura1.jpg";
	ctx1.restore();
	ctx1.save();
	//nuvens no canto superior direito
	nuvens_primeiras();
	ctx1.restore();

	ctx1.save();
	desenhar_lapis_descobertos();
	ctx1.restore();
}

function nuvens_primeiras(){
	//nuvem verde marinho
	ctx1.save();
	ctx1.beginPath();
	ctx1.lineTo(292,0);
	ctx1.quadraticCurveTo(288,23,260,21);
	ctx1.quadraticCurveTo(252,56,215,46);
	ctx1.lineTo(209,50);
	ctx1.bezierCurveTo(213,80,161,90,151,75);
	ctx1.quadraticCurveTo(145,92,96,84);
	ctx1.lineTo(96,0);
	ctx1.closePath();
	ctx1.fillStyle="#008390";
	ctx1.fill();
	ctx1.restore();

	//nuvem verde marinho escura
	ctx1.save();
	ctx1.beginPath();
	ctx1.lineTo(283,0);
	ctx1.quadraticCurveTo(275,18,251,12);
	ctx1.bezierCurveTo(258,40,225,47,214,34)
	ctx1.quadraticCurveTo(210,43,200,44);
	ctx1.bezierCurveTo(212,73,160,83,156,65);
	ctx1.quadraticCurveTo(150,66,144,66);
	ctx1.quadraticCurveTo(147,86,96,78);
	ctx1.lineTo(96,0);
	ctx1.closePath();
	ctx1.fillStyle="#034554";
	ctx1.fill();
	ctx1.restore();

	//nuvem preta
	ctx1.save();
	ctx1.beginPath();
	ctx1.lineTo(276,0);
	ctx1.quadraticCurveTo(263,13,251,3);
	ctx1.quadraticCurveTo(243,8,241,9);
	ctx1.bezierCurveTo(254,33,221,46,216,20);
	ctx1.lineTo(212,20);
	ctx1.quadraticCurveTo(210,42,189,39);
	ctx1.lineTo(185,43);
	ctx1.bezierCurveTo(220,60,158,82,165,58);
	ctx1.lineTo(163,56);
	ctx1.quadraticCurveTo(151,60,135,59);
	ctx1.quadraticCurveTo(142,83,96,68);
	ctx1.lineTo(96,0);
	ctx1.closePath();
	ctx1.fillStyle="#000000";
	ctx1.fill();
	ctx1.restore();
}

function desenhar_lapis_descobertos(){
	ctx1.translate(232,189);

	//primeiro lapis(lado esquerdo)
	//parte escura
	ctx1.save();
	ctx1.beginPath()
	ctx1.lineTo(0,-48);
	ctx1.quadraticCurveTo(9,-56,11,-73);
	ctx1.lineTo(15,-68);
	ctx1.lineTo(10,0);
	ctx1.lineTo(0,0);
	ctx1.closePath();
	ctx1.fillStyle="#003051";
	ctx1.fill();
	ctx1.restore();
	//parteclara
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(10,0);
	ctx1.lineTo(10,-48);
	ctx1.quadraticCurveTo(12,-53,12,-68);
	ctx1.lineTo(14,-67);
	ctx1.lineTo(15,-68);
	ctx1.quadraticCurveTo(16,-54,19,-50);
	ctx1.lineTo(19,0);
	ctx1.closePath();
	ctx1.fillStyle="#00A8DC";
	ctx1.fill();
	ctx1.restore();

	//segundo lapis
	//parte escura
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(25,0);
	ctx1.lineTo(25,-52);
	ctx1.quadraticCurveTo(28,-54,29,-65);
	ctx1.lineTo(33,-71);
	ctx1.quadraticCurveTo(36,-51,41,-47);
	ctx1.lineTo(41,0);
	ctx1.closePath();
	ctx1.fillStyle="#003051";
	ctx1.fill();
	ctx1.restore();
	//parte clara
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(41,0);
	ctx1.lineTo(41,-47);
	ctx1.quadraticCurveTo(36,-51,33,-71);
	ctx1.lineTo(36,-72);
	ctx1.quadraticCurveTo(43,-52,48,-48);
	ctx1.lineTo(48,0);
	ctx1.closePath();
	ctx1.fillStyle="#00A8DC";
	ctx1.fill();
	ctx1.restore();
	//parte da mina
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(30,0);
	ctx1.lineTo(29,-80);
	ctx1.quadraticCurveTo(30,-83,34,-81);
	ctx1.quadraticCurveTo(34,-76,36,-72);
	ctx1.lineTo(33,-71);
	ctx1.lineTo(34,0);
	ctx1.closePath();
	ctx1.fillStyle="#001122";
	ctx1.fill();
	ctx1.restore();

	//quarto lapis
	//parte da mina
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(96,-66);
	ctx1.lineTo(97,-74);
	ctx1.quadraticCurveTo(99,-78,101,-74);
	ctx1.lineTo(103,-66);
	ctx1.closePath();
	ctx1.fillStyle="#001122";
	ctx1.fill();
	ctx1.restore();
	//parte mais escura
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(87,0);
	ctx1.lineTo(87,-51);
	ctx1.quadraticCurveTo(94,-58,96,-67);
	ctx1.quadraticCurveTo(98,-65,100,-70);
	ctx1.lineTo(100,0);
	ctx1.closePath();
	ctx1.fillStyle="#00334E";
	ctx1.fill();
	ctx1.restore();
	//parte mais clara
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(100,0);
	ctx1.lineTo(100,-69);
	ctx1.quadraticCurveTo(102,-66,103,-66);
	ctx1.quadraticCurveTo(108,-58,115,-51);
	ctx1.lineTo(115,0);
	ctx1.closePath();
	ctx1.fillStyle="#00B1E4";
	ctx1.fill();
	ctx1.restore();
	//parte media
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(93,0);
	ctx1.lineTo(93,-49);
	ctx1.lineTo(100,-56);
	ctx1.lineTo(107,-49);
	ctx1.lineTo(107,0);
	ctx1.closePath();
	ctx1.fillStyle="#06425C";
	ctx1.fill();
	ctx1.restore();


	//terceiro lapis
	//parte da mina
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(72,-73);
	ctx1.lineTo(73,-81);
	ctx1.quadraticCurveTo(74,-84,78,-82);
	ctx1.lineTo(79,-73);
	ctx1.closePath();
	ctx1.fillStyle="#001122";
	ctx1.fill();
	ctx1.restore();
	//parte mais escura
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(62,0);
	ctx1.lineTo(62,-48);
	ctx1.quadraticCurveTo(69,-60,72,-74);
	ctx1.lineTo(76,-73);
	ctx1.lineTo(76,0);
	ctx1.closePath();
	ctx1.fillStyle="#003258";
	ctx1.fill();
	ctx1.restore();
	//parte mais clara
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(76,0);
	ctx1.lineTo(76,-73);
	ctx1.lineTo(79,-74);
	ctx1.quadraticCurveTo(83,-55,90,-49);
	ctx1.lineTo(90,0);
	ctx1.closePath();
	ctx1.fillStyle="#01ADDD";
	ctx1.fill();
	ctx1.restore();
	//parte intermedia
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(68,0);
	ctx1.lineTo(68,-48);
	ctx1.lineTo(76,-54);
	ctx1.lineTo(83,-48);
	ctx1.lineTo(83,0);
	ctx1.closePath();
	ctx1.fillStyle="#004765";
	ctx1.fill();
	ctx1.restore();

	//quinto lapis
	//parte mina
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(110,-70);
	ctx1.lineTo(111,-81);
	ctx1.quadraticCurveTo(114,-85,117,-81);
	ctx1.lineTo(118,-70);
	ctx1.closePath();
	ctx1.fillStyle="#001122";
	ctx1.fill();
	ctx1.restore();
	//parte mais escura
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(101,0);
	ctx1.lineTo(101,-49);
	ctx1.quadraticCurveTo(108,-58,110,-71);
	ctx1.quadraticCurveTo(113,-71,114,-72);
	ctx1.lineTo(114,0);
	ctx1.closePath();
	ctx1.fillStyle="#032B45";
	ctx1.fill();
	ctx1.restore();
	//parte mais clara
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(114,0);
	ctx1.lineTo(114,-72);
	ctx1.quadraticCurveTo(117,-71,118,-72);
	ctx1.quadraticCurveTo(122,-58,129,-56);
	ctx1.lineTo(129,0);
	ctx1.closePath();
	ctx1.fillStyle="#00A1D1";
	ctx1.fill();
	ctx1.restore();
	//parte do meio
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(108,0);
	ctx1.lineTo(108,-50);
	ctx1.lineTo(114,-56);
	ctx1.lineTo(121,-49);
	ctx1.lineTo(121,0);
	ctx1.closePath();
	ctx1.fillStyle="#00405C";
	ctx1.fill();
	ctx1.restore();


	//setimo lapis
	ctx1.save();
	//parte escura
	ctx1.fillStyle="#002D41";
	ctx1.beginPath();
	ctx1.moveTo(148,0);
	ctx1.lineTo(148,-54);
	ctx1.lineTo(159,-51);
	ctx1.lineTo(159,-28);
	ctx1.lineTo(155,-20);
	ctx1.lineTo(156,0);
	ctx1.lineTo(148,0);
	ctx1.closePath();
	ctx1.fill();
	//ctx1.fillRect(148,0,11,-54);
	//parte clara
	ctx1.fillStyle="#026F9C";
	ctx1.fillRect(159,0,11,-56)
	ctx1.restore();

	//sexto lapis
	//parte escura
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(121,0);
	ctx1.lineTo(121,-52);
	ctx1.quadraticCurveTo(126,-59,128,-69);
	ctx1.lineTo(137,-57);
	ctx1.lineTo(136,-53);
	ctx1.lineTo(136,0);
	ctx1.closePath();
	ctx1.fillStyle="#0c273d";
	ctx1.fill();
	ctx1.restore();
	//parte clara
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(136,0);
	ctx1.lineTo(136,-53);
	ctx1.lineTo(137,-57);
	ctx1.lineTo(149,-56);
	ctx1.lineTo(149,0);
	ctx1.closePath();
	ctx1.fillStyle="#00A3CC";
	ctx1.fill();
	ctx1.restore();
	//parte do meio
	ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(127,0);
	ctx1.lineTo(127,-52);
	ctx1.lineTo(130,-55);
	ctx1.quadraticCurveTo(132,-50,136,-53);
	ctx1.lineTo(142,-49);
	ctx1.lineTo(142,0);
	ctx1.closePath();
	ctx1.fillStyle="#00405C";
	ctx1.fill();
	ctx1.restore(); 

}

function camada_segunda(){
	ctx2.save();
	var img= new Image();
	//textura
	img.onload = function(){
		var padrao = ctx2.createPattern(img,'repeat');

		ctx2.translate(380,305);
		ctx2.save();
		ctx2.globalAlpha=0.7;
		ctx2.fillStyle=padrao;
		ctx2.quadraticCurveTo(10,-58,7,-136);
		ctx2.lineTo(18,-168);
		ctx2.bezierCurveTo(-36,-159,-41,-237,-22,-250);
		ctx2.quadraticCurveTo(-45,-270,-29,-305);
		ctx2.lineTo(320,-305);
		ctx2.lineTo(320,0);
		ctx2.lineTo(0,0);
		ctx2.closePath();
		ctx2.fill();
		ctx2.restore();
		ctx2.globalAlpha=0.7;
		sombra_mao_lapis();
	},
	img.src ="images/textura2.jpg";
	ctx2.restore();
}

function sombra_mao_lapis(){
	//shade
	ctx2.save();
	ctx2.beginPath();
	ctx2.quadraticCurveTo(10,-58,7,-136);
	ctx2.lineTo(18,-168);
	ctx2.bezierCurveTo(-36,-159,-41,-237,-22,-250);
	ctx2.quadraticCurveTo(-45,-270,-29,-305);
	ctx2.lineTo(320,-305);
	ctx2.lineTo(320,0);
	ctx2.lineTo(0,0);
	ctx2.closePath();
	ctx2.fillStyle="#001324";
	ctx2.fill();
	ctx2.restore();
}

function camada_segundacontinuacao(){
	//cores para o corpo dos segmentos
	var cores = ["#F9E6DF","#F08C7C","#E8543A","#E4391B","#E32F18","#C7251A"];
	//cores para a base dos segmentos
	var cor_base = ["#D82D1B","#DC2B1B","#D5291B","#CE2C1D","#CE281C","#C7251A"];
	var x_original = 168;//x usado para o translate
	var x_translate = 24;//mudanca a efectuar no x para modificar o translate
	var n_segmentos = 6; //n_segmentos a desenhar

	ctx3.save();
	segundas_nuvens();
	ctx3.restore();

	ctx3.save();
	lapis_pretos();
	ctx3.restore();

	//loop que gera os segmentos do lado direito(branco->vermelho)
	for(var i=0;i<n_segmentos;i++){
		ctx3.save();
		ctx3.translate(x_original,305);
		segmento_vermelhobranco(cores[i],cor_base[i]);
		ctx3.restore();
		/**os segmentos nao estao equidistantes, mas antes cada segmento esta
		a mais 0.5px do que a distancia entre os anteriores
		*/
		x_translate=x_translate+0.5;
		//redefinicao das coordenada x do translate
		x_original=x_original-x_translate;
	}
	
}

function segundas_nuvens(){
	ctx3.translate(352,0);

	//nuvem debaixo
	ctx3.save();
	ctx3.beginPath();
	ctx3.moveTo(-6,14);
	ctx3.quadraticCurveTo(4,11,12,12);
	ctx3.quadraticCurveTo(13,5,16,0);
	ctx3.lineTo(120,0);
	ctx3.quadraticCurveTo(118,17,99,19);
	ctx3.bezierCurveTo(103,34,85,55,61,41);
	ctx3.lineTo(59,44);
	ctx3.bezierCurveTo(70,74,31,90,15,77);
	ctx3.quadraticCurveTo(6,87,-4,86.5);
	ctx3.quadraticCurveTo(-5,65,4.5,53.5);
	ctx3.quadraticCurveTo(-12.5,39,-6,14);
	ctx3.closePath();
	ctx3.fillStyle="#005078";
	ctx3.fill();
	ctx3.restore();

	//nuvem intermedia
	ctx3.save();
	ctx3.beginPath();
	ctx3.moveTo(-7,20);
	ctx3.quadraticCurveTo(6,17,18,21);
	ctx3.quadraticCurveTo(19,7,23,0);
	ctx3.lineTo(113,0);
	ctx3.quadraticCurveTo(108,15,91,13);
	ctx3.bezierCurveTo(100,40,68,42,61,33);
	ctx3.lineTo(59,33);
	ctx3.quadraticCurveTo(57,39,51,41);
	ctx3.bezierCurveTo(68,67,24,88,15,66);
	ctx3.lineTo(11,66);
	ctx3.quadraticCurveTo(11,77,-4,79);
	ctx3.quadraticCurveTo(-1,62,4.5,53.5);
	ctx3.quadraticCurveTo(-12.5,39,-7,20);
	ctx3.closePath();
	ctx3.fillStyle="#00253F";
	ctx3.fill();
	ctx3.restore();

	//nuvem acima
	ctx3.save();
	ctx3.beginPath();
	ctx3.moveTo(-8,27);
	ctx3.quadraticCurveTo(9,22,25,31);
	ctx3.quadraticCurveTo(20,14,30,0);
	ctx3.lineTo(106,0);
	ctx3.quadraticCurveTo(101,10,92,5);
	ctx3.quadraticCurveTo(87,9,83,12);
	ctx3.bezierCurveTo(96,27,73,43,60,21);
	ctx3.lineTo(57,22);
	ctx3.quadraticCurveTo(55,37,40,40);
	ctx3.lineTo(40,44);
	ctx3.bezierCurveTo(65,60,20,81,18,59);
	ctx3.quadraticCurveTo(9,60,4,59);
	ctx3.quadraticCurveTo(5,56,4.5,53.5);
	ctx3.quadraticCurveTo(-10,39,-8,27);
	ctx3.moveTo(1,60);
	ctx3.quadraticCurveTo(7,69,-3.5,73);
	ctx3.quadraticCurveTo(-2,66,1,60);
	ctx3.closePath();
	ctx3.fillStyle="#000000";
	ctx3.fill();
	ctx3.restore();

}

function lapis_pretos(){
	ctx3.translate(440,189);
	ctx3.fillStyle="#000000";
	
	//primeiro lapis
	ctx3.save();
	ctx3.beginPath();
	ctx3.lineTo(0,-47);
	ctx3.quadraticCurveTo(7,-57,10,-80);
	ctx3.quadraticCurveTo(12.5,-81,14,-80);
	ctx3.quadraticCurveTo(16,-55,22,-46);
	ctx3.lineTo(22,0);
	ctx3.lineTo(0,0);
	ctx3.closePath();
	ctx3.fill();
	ctx3.restore();

	//resto dos lapis
	ctx3.save();
	ctx3.beginPath();
	ctx3.moveTo(26,0);
	ctx3.lineTo(26,-46);
	ctx3.quadraticCurveTo(31,-57,35,-81);
	ctx3.quadraticCurveTo(37,-83,39,-82);
	ctx3.quadraticCurveTo(42,-62,46,-54);
	ctx3.quadraticCurveTo(52,-66,54,-77);
	ctx3.quadraticCurveTo(55,-78,56,-77);
	ctx3.lineTo(59,-64);
	ctx3.lineTo(60,-64);
	ctx3.quadraticCurveTo(62,-74,65,-82);
	ctx3.quadraticCurveTo(66.5,-82.5,68,-82);
	ctx3.quadraticCurveTo(69,-69,73,-58);
	ctx3.lineTo(76,-69);
	ctx3.lineTo(107,-69);
	ctx3.lineTo(107,0);
	ctx3.lineTo(26,0);
	ctx3.closePath();
	ctx3.fill();
	ctx3.restore();

}

function segmento_vermelhobranco(fillcorpo,fillbase){
	
	//corpo
	ctx3.save();
	ctx3.fillStyle=fillcorpo;
	ctx3.beginPath();
	ctx3.bezierCurveTo(9.5,-50,14,-110,9,-135);
	ctx3.lineTo(20,-171);
	ctx3.quadraticCurveTo(-3,-168,-19,-175);
	ctx3.lineTo(-30,-170);
	ctx3.quadraticCurveTo(-70,-214,-36,-254);
	ctx3.quadraticCurveTo(-63,-260,-77,-271);
	ctx3.lineTo(-85,-271);
	ctx3.lineTo(-85,0);
	ctx3.lineTo(0,0);
	ctx3.closePath();
	ctx3.fill();


	//base
	ctx3.fillStyle=fillbase;
	ctx3.beginPath();
	ctx3.lineTo(12,-16);
	ctx3.quadraticCurveTo(3,-16,5,-27);
	ctx3.quadraticCurveTo(7,-33,7,-38);
	ctx3.lineTo(-1,-23);
	ctx3.quadraticCurveTo(-4,-17,-12,-16);
	ctx3.lineTo(-25,-16);
	ctx3.lineTo(-25,0);
	ctx3.lineTo(0,0);
	ctx3.closePath();
	ctx3.fill();
	ctx3.restore();


}

function camada_terceira(){
	ctx3.save();
	nuvens_pretas_topo();
	ctx3.restore();

	ctx3.save();
	barravermelha_lapisentalhe();
	ctx3.restore();

}

function nuvens_pretas_topo(){
	ctx3.beginPath();
	ctx3.moveTo(0,99);
	ctx3.quadraticCurveTo(32,100,49,71);
	ctx3.quadraticCurveTo(100,80,99,0);
	ctx3.lineTo(0,0);
	ctx3.lineTo(0,99);
	ctx3.closePath();
	ctx3.fillStyle="#000000";
	ctx3.fill();

}

function barravermelha_lapisentalhe(){
	ctx3.translate(180,305);

	ctx3.save();
	ctx3.beginPath();
	ctx3.moveTo(-24,0);
	ctx3.lineTo(-24,-16);
	//primeiro entalhe lapis
	ctx3.lineTo(0,-16);
	ctx3.quadraticCurveTo(9,-16,13,-25);
	ctx3.quadraticCurveTo(43,-78,87,-109);
	ctx3.lineTo(93,-127);
	//primeiro entalhe dedo
	ctx3.quadraticCurveTo(118,-104,156,-98);
	ctx3.lineTo(155,-104);
	ctx3.quadraticCurveTo(173,-106,192,-123);
	ctx3.quadraticCurveTo(199,-117,208,-112);
	//segundo entalhe lapis
	ctx3.quadraticCurveTo(209,-66,201,-22);
	ctx3.quadraticCurveTo(205,-16,213,-20);
	ctx3.bezierCurveTo(226,-56,258,-107,271,-113);
	ctx3.lineTo(276,-128);
	//segundo entalhe dedo
	ctx3.quadraticCurveTo(292,-109,317,-98);
	ctx3.lineTo(316,-104);
	ctx3.quadraticCurveTo(333,-109,343,-123);
	ctx3.quadraticCurveTo(355,-113,369,-114);
	//fim do entalhes
	ctx3.lineTo(411,-135);
	ctx3.lineTo(520,-135);
	ctx3.lineTo(520,0);
	ctx3.lineTo(-12,0);
	ctx3.closePath();
	ctx3.fillStyle="#D82D1B";
	ctx3.fill();
	ctx3.restore();

}

function camada_quarta(){
	ctx4.translate(524,305);
	ctx4.save();
	anelar();
	ctx4.restore();

	ctx4.save();
	medio();
	ctx4.restore();

	ctx4.save();
	lapis_principal();
	ctx4.restore();

	ctx4.save();
	indicador();
	ctx4.restore();

}

function anelar(){
	//dedo
	ctx4.beginPath();
	ctx4.moveTo(151,-112);
	ctx4.quadraticCurveTo(134,-120,128,-127);
	ctx4.lineTo(127,-164);
	ctx4.lineTo(151,-167);
	ctx4.lineTo(151,-112);
	ctx4.closePath();
	ctx4.fillStyle="#64422D";
	ctx4.fill();

	//unha
	ctx4.beginPath();
	ctx4.moveTo(139,-118);
	ctx4.quadraticCurveTo(133,-121,129,-126);
	ctx4.lineTo(131,-147);
	ctx4.lineTo(143,-147);
	ctx4.lineTo(139,-118);
	ctx4.closePath();
	ctx4.fillStyle="#A05A5B";
	ctx4.fill();
}

function medio(){
	//dedo
	ctx4.beginPath();
	ctx4.moveTo(109,-105);
	ctx4.quadraticCurveTo(140,-120,130,-158);
	ctx4.lineTo(78,-161);
	ctx4.lineTo(70,-134);
	ctx4.lineTo(109,-105);
	ctx4.closePath();
	var gradiente =ctx4.createRadialGradient(129,-126,15,117,-129,35);
	gradiente.addColorStop(0,"#BD9D5F");
	gradiente.addColorStop(1,"#5B4C26");
	ctx4.fillStyle=gradiente;
	ctx4.fill();

	//unha parte escura
	ctx4.beginPath();
	ctx4.moveTo(110,-99);
	ctx4.quadraticCurveTo(110,-113,97,-138);
	ctx4.quadraticCurveTo(87,-142,76,-147);
	ctx4.lineTo(72,-130);
	ctx4.quadraticCurveTo(86,-114,110,-99);
	ctx4.closePath();
	ctx4.fillStyle="#CA6154";
	ctx4.fill();

	//unha parte clara
	ctx4.beginPath();
	ctx4.moveTo(110,-99);
	ctx4.quadraticCurveTo(110,-113,97,-138);
	ctx4.lineTo(95,-139);
	ctx4.quadraticCurveTo(101,-117,101,-105);
	ctx4.lineTo(110,-99);
	ctx4.closePath();
	ctx4.fillStyle="#DD8F76";
	ctx4.fill();
}

function lapis_principal(){
	//parte da apara grande
	//clara
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(8,-49);
	ctx4.quadraticCurveTo(12,-94,10,-134);
	ctx4.lineTo(29,-143);
	ctx4.lineTo(36,-124);
	ctx4.lineTo(31,-113);
	ctx4.lineTo(22,-72);
	ctx4.lineTo(11,-51);
	ctx4.lineTo(8,-49);
	ctx4.closePath();
	ctx4.fillStyle="#C6C5B5";
	ctx4.fill();
	ctx4.restore()
	//escura
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(22,-44);
	ctx4.quadraticCurveTo(41,-80,63,-112);
	ctx4.lineTo(58,-139);
	ctx4.lineTo(35,-126);
	ctx4.lineTo(31,-113);
	ctx4.quadraticCurveTo(23,-94,22,-72);
	ctx4.lineTo(22,-44);
	ctx4.closePath();
	ctx4.fillStyle="#96B69E";
	ctx4.fill();
	ctx4.restore();


	//corpo do lapis
	//parte mais escura
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(60.5,-108);
	ctx4.quadraticCurveTo(65,-115,70,-120);
	ctx4.lineTo(79,-157);
	ctx4.lineTo(85,-180);
	ctx4.lineTo(72,-193);
	ctx4.lineTo(66,-166);
	ctx4.lineTo(58,-135);
	ctx4.quadraticCurveTo(61,-121,60.5,-108);
	ctx4.closePath();
	ctx4.fillStyle="#1E111A";
	ctx4.fill();
	ctx4.restore();
	//parte media tonalidade
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(31,-113);
	ctx4.quadraticCurveTo(46,-131,58,-135);
	ctx4.lineTo(66,-166);
	ctx4.lineTo(71,-190);
	ctx4.lineTo(44,-199);
	ctx4.lineTo(41,-185);
	ctx4.lineTo(29,-139);
	ctx4.quadraticCurveTo(32,-129,31,-113)
	ctx4.closePath();
	ctx4.fillStyle="#54213A";
	ctx4.fill();
	ctx4.restore();
	//parte mais clara
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(29,-139);
	ctx4.lineTo(41,-185);
	ctx4.lineTo(24,-188);
	ctx4.lineTo(20,-169);
	ctx4.lineTo(10,-135);
	ctx4.quadraticCurveTo(12,-129,13,-120);
	ctx4.quadraticCurveTo(21,-133,29,-139);
	ctx4.closePath();
	ctx4.fillStyle="#67526D";
	ctx4.fill();
	ctx4.restore();


	//resto do corpo do lapis
	//parte mais escura
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(106,-305);
	ctx4.lineTo(101,-284);
	ctx4.lineTo(114,-283);
	ctx4.lineTo(117,-305);
	ctx4.lineTo(106,-305);
	ctx4.closePath();
	ctx4.fillStyle="#130E17";
	ctx4.fill();
	ctx4.restore();
	//parte da tonalidade media
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(106,-305);
	ctx4.lineTo(101,-284);
	ctx4.lineTo(89,-239);
	ctx4.lineTo(59,-250);
	ctx4.lineTo(75,-305);
	ctx4.lineTo(106,-305);
	ctx4.closePath();
	ctx4.fillStyle="#53283C";
	ctx4.fill();
	ctx4.restore();
	//parte tapada
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(75,-305);
	ctx4.lineTo(59,-250);
	ctx4.lineTo(50,-250);
	ctx4.lineTo(50,-305);
	ctx4.lineTo(75,-305);
	ctx4.closePath();
	ctx4.fillStyle="#130E17";
	ctx4.fill();
	ctx4.restore();


	//parte da apara acima da mina
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(22,-45);
	ctx4.lineTo(22,-72);
	ctx4.lineTo(11,-53);
	ctx4.lineTo(22,-45);
	ctx4.closePath();
	ctx4.fillStyle="#DBB277";
	ctx4.fill();
	ctx4.restore();

	//parte da mina
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(3,-20);
	ctx4.quadraticCurveTo(4,-13,11,-17);
	ctx4.quadraticCurveTo(16,-31,22,-43);
	ctx4.lineTo(21,-53);
	ctx4.quadraticCurveTo(19,-57,15,-56);
	ctx4.lineTo(8,-49);
	ctx4.quadraticCurveTo(6,-35,3,-20);
	ctx4.closePath();
	ctx4.fillStyle="#000000";
	ctx4.fill();
	ctx4.restore();
}

function indicador(){
	//parte do dedo
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(-15,-305);
	ctx4.quadraticCurveTo(-18,-290,-14,-258);
	ctx4.quadraticCurveTo(-13,-254,-11,-252);
	ctx4.lineTo(1,-171);
	ctx4.quadraticCurveTo(21,-161.5,42,-187);
	ctx4.quadraticCurveTo(80,-315,71,-305);
	ctx4.lineTo(-15,-305);
	ctx4.closePath();
	ctx4.fillStyle="#CBB288";
	ctx4.fill();
	ctx4.restore();
	
	//sombra debaixo da unha
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(12,-191);
	ctx4.quadraticCurveTo(7,-174,6,-170);
	ctx4.quadraticCurveTo(1,-170,-1,-172);
	ctx4.lineTo(11,-192);
	ctx4.lineTo(11,-191)
	ctx4.closePath();
	ctx4.fillStyle="#536123";
	ctx4.fill();
	ctx4.restore();

	//parte da unha
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(-11,-252);
	ctx4.quadraticCurveTo(-18,-202,-3,-167);
	ctx4.quadraticCurveTo(4,-168,11,-192);
	ctx4.quadraticCurveTo(4,-222,-4,-246);
	ctx4.quadraticCurveTo(-8,-250,-11,-252);
	ctx4.closePath();

	ctx4.fillStyle="#E99674";
	ctx4.fill();
	ctx4.restore();

	//sombra do dedo
	ctx4.save();
	var img= new Image();

	img.onload = function(){
		ctx4.translate(524,305);
		ctx4.globalAlpha=0.7;
		var padrao = ctx4.createPattern(img, 'repeat');
		ctx4.fillStyle = padrao;
		ctx4.beginPath();
		ctx4.moveTo(26,-305);
		ctx4.quadraticCurveTo(25,-262,18,-186);
		ctx4.quadraticCurveTo(18,-174,15,-169);
		ctx4.quadraticCurveTo(27,-169,42,-187);
		ctx4.quadraticCurveTo(80,-315,71,-305);
		ctx4.lineTo(26,-305);
		ctx4.closePath();
		ctx4.fill();

		ctx4.beginPath();
		ctx4.moveTo(26,-305);
		ctx4.quadraticCurveTo(25,-262,18,-186);
		ctx4.quadraticCurveTo(18,-174,15,-169);
		ctx4.quadraticCurveTo(27,-169,42,-187);
		ctx4.quadraticCurveTo(80,-315,71,-305);
		ctx4.lineTo(26,-305);
		ctx4.closePath();
		ctx4.globalAlpha=0.85;
		var grad = ctx4.createRadialGradient(-10,-286,5,23,-277,55);
		grad.addColorStop("0","#B9A16C");
		grad.addColorStop("1","#7C662A")
		ctx4.fillStyle=grad;
		ctx4.fill();
		
	

	},
	img.src = "images/textura3.jpg";
	ctx4.restore();;
	//parte clara da unha
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(-11,-252);
	ctx4.quadraticCurveTo(-18,-202,-3,-167);
	ctx4.quadraticCurveTo(1,-171,3,-176);
	ctx4.quadraticCurveTo(-6,-216,-4,-246);
	ctx4.quadraticCurveTo(-8,-250,-11,-252);
	ctx4.closePath();
	ctx4.fillStyle="#F2A490";
	ctx4.fill();
	ctx4.restore();
	//ponta da unha
	ctx4.save();
	ctx4.beginPath();
	ctx4.moveTo(-3,-167);
	ctx4.quadraticCurveTo(4,-168,11,-192);
	ctx4.lineTo(10,-196);
	ctx4.quadraticCurveTo(0,-179,-6.5,-176);
	ctx4.lineTo(-3,-167);
	ctx4.closePath();
	ctx4.fillStyle="#EDC7BD";
	ctx4.fill();
	ctx4.restore();

}

function camada_quarta_continuacao(){
	ctx5.translate(524,305);

	//base do polegar
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(176,-296);
	ctx5.lineTo(112,-290);
	ctx5.quadraticCurveTo(86,-280,66,-253);
	ctx5.lineTo(66,-168);
	ctx5.quadraticCurveTo(80,-155,100,-156);
	ctx5.quadraticCurveTo(113,-156,146,-162);
	ctx5.lineTo(176,-169);
	ctx5.lineTo(176,-296);
	ctx5.closePath();
	ctx5.fillStyle="#C8A983";
	ctx5.fill();
	ctx5.restore();

	//sombra inferior da unha
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(147,-164);
	ctx5.quadraticCurveTo(129,-160,106,-158);
	ctx5.quadraticCurveTo(88,-157,75,-164);
	ctx5.lineTo(74,-177);
	ctx5.lineTo(150,-189);
	ctx5.lineTo(147,-164);
	ctx5.closePath();
	ctx5.fillStyle="#8F7235";
	ctx5.fill();
	ctx5.restore();
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(147,-164);
	ctx5.lineTo(124,-160);
	ctx5.quadraticCurveTo(108,-163,99,-171);
	ctx5.lineTo(150,-189);
	ctx5.lineTo(147,-164);
	ctx5.closePath();
	ctx5.fillStyle="#906733";
	ctx5.fill();
	ctx5.restore();

	//base da unha 
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(111,-268);
	ctx5.quadraticCurveTo(93,-264,58,-250);
	ctx5.stroke();
	ctx5.bezierCurveTo(22,-220,35,-175,79,-163);
	ctx5.quadraticCurveTo(99,-167,122,-176);
	ctx5.lineTo(131,-243);
	ctx5.lineTo(111,-268);
	ctx5.closePath();
	ctx5.fillStyle="#D78D7E";
	ctx5.fill();
	ctx5.restore();

	//tonalidade media da unha
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(123,-248);
	ctx5.lineTo(44,-228);
	ctx5.quadraticCurveTo(38,-200,56,-181);
	ctx5.lineTo(63,-183);
	ctx5.lineTo(123,-203);
	ctx5.lineTo(123,-248)
	ctx5.closePath();
	ctx5.fillStyle="#D87356";
	ctx5.fill();
	ctx5.restore();

	//tonalidade escura da unha
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(123,-203);
	ctx5.lineTo(63,-183);
	ctx5.lineTo(56,-181);
	ctx5.quadraticCurveTo(66,-171,79,-163);
	ctx5.quadraticCurveTo(99,-167,122,-176);
	ctx5.lineTo(123,-203);
	ctx5.closePath();
	ctx5.fillStyle="#C35139";
	ctx5.fill();
	ctx5.restore();

	//ponta da unha
	ctx5.save();
	ctx5.beginPath();
	ctx5.moveTo(58,-250);
	ctx5.bezierCurveTo(22,-220,35,-175,79,-163);
	ctx5.lineTo(90,-165);
	ctx5.bezierCurveTo(45,-175,37,-230,71,-254);
	ctx5.lineTo(58,-250);
	ctx5.closePath();
	ctx5.fillStyle="#E59888";
	ctx5.fill();
	ctx5.restore();
	
}

function camada_ultima(){
	ctx5.translate(524,305);
	ctx5.beginPath();
	ctx5.moveTo(113,-305);
	ctx5.quadraticCurveTo(110,-274,111,-260);
	ctx5.quadraticCurveTo(112,-254,117,-251);
	ctx5.quadraticCurveTo(113,-218,125,-167);
	ctx5.lineTo(129,-171);
	ctx5.quadraticCurveTo(136,-166,147,-168);
	ctx5.lineTo(138,-132);
	ctx5.quadraticCurveTo(141,-83,133,-17);
	ctx5.quadraticCurveTo(137,-11,141,-16);
	ctx5.quadraticCurveTo(160,-56,176,-73);
	ctx5.lineTo(176,-305);
	ctx5.lineTo(113,-305);
	ctx5.closePath();
	ctx5.fillStyle="#000000";
	ctx5.fill();

}

function main(){
	//fundo, barra com textura, lapis a descoberto e nuvens(verde)
	ctx1.save();
	camada_base();
	ctx1.restore();

	//sombra de lapis com a textura
	ctx2.save();
	camada_segunda();
	ctx2.restore();

	//lapis pretos, nuvens(azuis) e segmentos(branco->vermelho)
	ctx3.save();
	camada_segundacontinuacao();
	ctx3.restore();

	//barra vermelho de base e nuvens pretas de topo
	ctx3.save();
	camada_terceira();
	ctx3.restore();

	//dedos anelar medio e indicador, lapis principal
	ctx4.save();
	camada_quarta();
	ctx4.restore();

	//polegar
	ctx5.save();
	camada_quarta_continuacao();
	ctx5.restore();

	//shade de mao e lapis preta
	ctx5.save();
	camada_ultima();
	ctx5.restore();
	


}

