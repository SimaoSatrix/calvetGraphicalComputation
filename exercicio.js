var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var images;





function camada_base(){
	ctx.save();
	//fundo azul
	ctx.fillStyle="#006CA9";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();

	ctx.save();
	//textura da barra de fundo mais a cor em overlay
	var padrao = ctx.createPattern(images[0], 'repeat');
	ctx.fillStyle = padrao;
	ctx.fillRect(0,189,700,canvas.height-189);	

	ctx.globalAlpha=0.9;
	ctx.fillStyle="#03172F";
	ctx.fillRect(0,189,700,canvas.height-189);
	ctx.restore();

	ctx.save();
	//nuvens no canto superior direito
	nuvens_primeiras();
	ctx.restore();

	ctx.save();
	desenhar_lapis_descobertos();
	ctx.restore();
}

function nuvens_primeiras(){
	//nuvem verde marinho
	ctx.save();
	ctx.beginPath();
	ctx.lineTo(292,0);
	ctx.quadraticCurveTo(288,23,260,21);
	ctx.quadraticCurveTo(252,56,215,46);
	ctx.lineTo(209,50);
	ctx.bezierCurveTo(213,80,161,90,151,75);
	ctx.quadraticCurveTo(145,92,96,84);
	ctx.lineTo(96,0);
	ctx.closePath();
	ctx.fillStyle="#008390";
	ctx.fill();
	ctx.restore();

	//nuvem verde marinho escura
	ctx.save();
	ctx.beginPath();
	ctx.lineTo(283,0);
	ctx.quadraticCurveTo(275,18,251,12);
	ctx.bezierCurveTo(258,40,225,47,214,34)
	ctx.quadraticCurveTo(210,43,200,44);
	ctx.bezierCurveTo(212,73,160,83,156,65);
	ctx.quadraticCurveTo(150,66,144,66);
	ctx.quadraticCurveTo(147,86,96,78);
	ctx.lineTo(96,0);
	ctx.closePath();
	ctx.fillStyle="#034554";
	ctx.fill();
	ctx.restore();

	//nuvem preta
	ctx.save();
	ctx.beginPath();
	ctx.lineTo(276,0);
	ctx.quadraticCurveTo(263,13,251,3);
	ctx.quadraticCurveTo(243,8,241,9);
	ctx.bezierCurveTo(254,33,221,46,216,20);
	ctx.lineTo(212,20);
	ctx.quadraticCurveTo(210,42,189,39);
	ctx.lineTo(185,43);
	ctx.bezierCurveTo(220,60,158,82,165,58);
	ctx.lineTo(163,56);
	ctx.quadraticCurveTo(151,60,135,59);
	ctx.quadraticCurveTo(142,83,96,68);
	ctx.lineTo(96,0);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();
	ctx.restore();
}

function desenhar_lapis_descobertos(){
	ctx.translate(232,189);

	//primeiro lapis(lado esquerdo)
	//parte escura
	ctx.save();
	ctx.beginPath()
	ctx.lineTo(0,-48);
	ctx.quadraticCurveTo(9,-56,11,-73);
	ctx.lineTo(15,-68);
	ctx.lineTo(10,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fillStyle="#003051";
	ctx.fill();
	ctx.restore();
	//parteclara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(10,0);
	ctx.lineTo(10,-48);
	ctx.quadraticCurveTo(12,-53,12,-68);
	ctx.lineTo(14,-67);
	ctx.lineTo(15,-68);
	ctx.quadraticCurveTo(16,-54,19,-50);
	ctx.lineTo(19,0);
	ctx.closePath();
	ctx.fillStyle="#00A8DC";
	ctx.fill();
	ctx.restore();

	//segundo lapis
	//parte escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(25,0);
	ctx.lineTo(25,-52);
	ctx.quadraticCurveTo(28,-54,29,-65);
	ctx.lineTo(33,-71);
	ctx.quadraticCurveTo(36,-51,41,-47);
	ctx.lineTo(41,0);
	ctx.closePath();
	ctx.fillStyle="#003051";
	ctx.fill();
	ctx.restore();
	//parte clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(41,0);
	ctx.lineTo(41,-47);
	ctx.quadraticCurveTo(36,-51,33,-71);
	ctx.lineTo(36,-72);
	ctx.quadraticCurveTo(43,-52,48,-48);
	ctx.lineTo(48,0);
	ctx.closePath();
	ctx.fillStyle="#00A8DC";
	ctx.fill();
	ctx.restore();
	//parte da mina
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(30,0);
	ctx.lineTo(29,-80);
	ctx.quadraticCurveTo(30,-83,34,-81);
	ctx.quadraticCurveTo(34,-76,36,-72);
	ctx.lineTo(33,-71);
	ctx.lineTo(34,0);
	ctx.closePath();
	ctx.fillStyle="#001122";
	ctx.fill();
	ctx.restore();

	//quarto lapis
	//parte da mina
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(96,-66);
	ctx.lineTo(97,-74);
	ctx.quadraticCurveTo(99,-78,101,-74);
	ctx.lineTo(103,-66);
	ctx.closePath();
	ctx.fillStyle="#001122";
	ctx.fill();
	ctx.restore();
	//parte mais escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(87,0);
	ctx.lineTo(87,-51);
	ctx.quadraticCurveTo(94,-58,96,-67);
	ctx.quadraticCurveTo(98,-65,100,-70);
	ctx.lineTo(100,0);
	ctx.closePath();
	ctx.fillStyle="#00334E";
	ctx.fill();
	ctx.restore();
	//parte mais clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(100,0);
	ctx.lineTo(100,-69);
	ctx.quadraticCurveTo(102,-66,103,-66);
	ctx.quadraticCurveTo(108,-58,115,-51);
	ctx.lineTo(115,0);
	ctx.closePath();
	ctx.fillStyle="#00B1E4";
	ctx.fill();
	ctx.restore();
	//parte media
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(93,0);
	ctx.lineTo(93,-49);
	ctx.lineTo(100,-56);
	ctx.lineTo(107,-49);
	ctx.lineTo(107,0);
	ctx.closePath();
	ctx.fillStyle="#06425C";
	ctx.fill();
	ctx.restore();


	//terceiro lapis
	//parte da mina
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(72,-73);
	ctx.lineTo(73,-81);
	ctx.quadraticCurveTo(74,-84,78,-82);
	ctx.lineTo(79,-73);
	ctx.closePath();
	ctx.fillStyle="#001122";
	ctx.fill();
	ctx.restore();
	//parte mais escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(62,0);
	ctx.lineTo(62,-48);
	ctx.quadraticCurveTo(69,-60,72,-74);
	ctx.lineTo(76,-73);
	ctx.lineTo(76,0);
	ctx.closePath();
	ctx.fillStyle="#003258";
	ctx.fill();
	ctx.restore();
	//parte mais clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(76,0);
	ctx.lineTo(76,-73);
	ctx.lineTo(79,-74);
	ctx.quadraticCurveTo(83,-55,90,-49);
	ctx.lineTo(90,0);
	ctx.closePath();
	ctx.fillStyle="#01ADDD";
	ctx.fill();
	ctx.restore();
	//parte intermedia
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(68,0);
	ctx.lineTo(68,-48);
	ctx.lineTo(76,-54);
	ctx.lineTo(83,-48);
	ctx.lineTo(83,0);
	ctx.closePath();
	ctx.fillStyle="#004765";
	ctx.fill();
	ctx.restore();

	//quinto lapis
	//parte mina
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(110,-70);
	ctx.lineTo(111,-81);
	ctx.quadraticCurveTo(114,-85,117,-81);
	ctx.lineTo(118,-70);
	ctx.closePath();
	ctx.fillStyle="#001122";
	ctx.fill();
	ctx.restore();
	//parte mais escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(101,0);
	ctx.lineTo(101,-49);
	ctx.quadraticCurveTo(108,-58,110,-71);
	ctx.quadraticCurveTo(113,-71,114,-72);
	ctx.lineTo(114,0);
	ctx.closePath();
	ctx.fillStyle="#032B45";
	ctx.fill();
	ctx.restore();
	//parte mais clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(114,0);
	ctx.lineTo(114,-72);
	ctx.quadraticCurveTo(117,-71,118,-72);
	ctx.quadraticCurveTo(122,-58,129,-56);
	ctx.lineTo(129,0);
	ctx.closePath();
	ctx.fillStyle="#00A1D1";
	ctx.fill();
	ctx.restore();
	//parte do meio
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(108,0);
	ctx.lineTo(108,-50);
	ctx.lineTo(114,-56);
	ctx.lineTo(121,-49);
	ctx.lineTo(121,0);
	ctx.closePath();
	ctx.fillStyle="#00405C";
	ctx.fill();
	ctx.restore();


	//setimo lapis
	ctx.save();
	//parte escura
	ctx.fillStyle="#002D41";
	ctx.beginPath();
	ctx.moveTo(148,0);
	ctx.lineTo(148,-54);
	ctx.lineTo(159,-51);
	ctx.lineTo(159,-28);
	ctx.lineTo(155,-20);
	ctx.lineTo(156,0);
	ctx.lineTo(148,0);
	ctx.closePath();
	ctx.fill();
	//parte clara
	ctx.fillStyle="#026F9C";
	ctx.fillRect(159,0,11,-56);
	ctx.restore();

	//sexto lapis
	//parte escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(121,0);
	ctx.lineTo(121,-52);
	ctx.quadraticCurveTo(126,-59,128,-69);
	ctx.lineTo(137,-57);
	ctx.lineTo(136,-53);
	ctx.lineTo(136,0);
	ctx.closePath();
	ctx.fillStyle="#0c273d";
	ctx.fill();
	ctx.restore();
	//parte clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(136,0);
	ctx.lineTo(136,-53);
	ctx.lineTo(137,-57);
	ctx.lineTo(149,-56);
	ctx.lineTo(149,0);
	ctx.closePath();
	ctx.fillStyle="#00A3CC";
	ctx.fill();
	ctx.restore();
	//parte do meio
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(127,0);
	ctx.lineTo(127,-52);
	ctx.lineTo(130,-55);
	ctx.quadraticCurveTo(132,-50,136,-53);
	ctx.lineTo(142,-49);
	ctx.lineTo(142,0);
	ctx.closePath();
	ctx.fillStyle="#00405C";
	ctx.fill();
	ctx.restore(); 

}

function camada_segunda(){
	ctx.save();
	//textura

	var padrao = ctx.createPattern(images[1],'repeat');
	ctx.translate(380,305);
	ctx.save();
	ctx.globalAlpha=0.7;
	ctx.fillStyle=padrao;

	ctx.beginPath();
	ctx.quadraticCurveTo(7,-58,7,-136);
	ctx.lineTo(18,-168);
	ctx.bezierCurveTo(-36,-159,-41,-237,-22,-250);
	ctx.quadraticCurveTo(-45,-270,-29,-305);
	ctx.lineTo(320,-305);
	ctx.lineTo(320,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();

	ctx.globalAlpha=0.7;
	sombra_mao_lapis();

	ctx.restore();
}

function sombra_mao_lapis(){
	//shade
	ctx.save();
	ctx.beginPath();
	ctx.quadraticCurveTo(7,-58,7,-136);
	ctx.lineTo(18,-168);
	ctx.bezierCurveTo(-36,-159,-41,-237,-22,-250);
	ctx.quadraticCurveTo(-45,-270,-29,-305);
	ctx.lineTo(320,-305);
	ctx.lineTo(320,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fillStyle="#001324";
	ctx.fill();
	ctx.restore();
}

function camada_segundacontinuacao(){
	//cores para o corpo dos segmentos
	var cores = ["#F9E6DF","#F08C7C","#E8543A","#E4391B","#E32F18","#C7251A"];
	//cores para a base dos segmentos
	var cor_base = ["#D82D1B","#DC2B1B","#D5291B","#CE2C1D","#CE281C","#C7251A"];
	var x_original = 168;//x usado para o translate
	var x_translate = 24;//mudanca a efectuar no x para modificar o translate
	var n_segmentos = 6; //n_segmentos a desenhar

	ctx.save();
	segundas_nuvens();
	ctx.restore();

	ctx.save();
	lapis_pretos();
	ctx.restore();

	//loop que gera os segmentos do lado direito(branco->vermelho)
	for(var i=0;i<n_segmentos;i++){
		ctx.save();
		ctx.translate(x_original,305);
		segmento_vermelhobranco(cores[i],cor_base[i]);
		ctx.restore();
		/**os segmentos nao estao equidistantes, mas antes cada segmento esta
		a mais 0.5px do que a distancia entre os anteriores
		*/
		x_translate=x_translate+0.5;
		//redefinicao das coordenada x do translate
		x_original=x_original-x_translate;
	}
	
}

function segundas_nuvens(){
	ctx.translate(352,0);

	//nuvem debaixo
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-6,14);
	ctx.quadraticCurveTo(4,11,12,12);
	ctx.quadraticCurveTo(13,5,16,0);
	ctx.lineTo(120,0);
	ctx.quadraticCurveTo(118,17,99,19);
	ctx.bezierCurveTo(103,34,85,55,61,41);
	ctx.lineTo(59,44);
	ctx.bezierCurveTo(70,74,31,90,15,77);
	ctx.quadraticCurveTo(6,87,-4,86.5);
	ctx.quadraticCurveTo(-5,65,4.5,53.5);
	ctx.quadraticCurveTo(-12.5,39,-6,14);
	ctx.closePath();
	ctx.fillStyle="#005078";
	ctx.fill();
	ctx.restore();

	//nuvem intermedia
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-7,20);
	ctx.quadraticCurveTo(6,17,18,21);
	ctx.quadraticCurveTo(19,7,23,0);
	ctx.lineTo(113,0);
	ctx.quadraticCurveTo(108,15,91,13);
	ctx.bezierCurveTo(100,40,68,42,61,33);
	ctx.lineTo(59,33);
	ctx.quadraticCurveTo(57,39,51,41);
	ctx.bezierCurveTo(68,67,24,88,15,66);
	ctx.lineTo(11,66);
	ctx.quadraticCurveTo(11,77,-4,79);
	ctx.quadraticCurveTo(-1,62,4.5,53.5);
	ctx.quadraticCurveTo(-12.5,39,-7,20);
	ctx.closePath();
	ctx.fillStyle="#00253F";
	ctx.fill();
	ctx.restore();

	//nuvem acima
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-8,27);
	ctx.quadraticCurveTo(9,22,25,31);
	ctx.quadraticCurveTo(20,14,30,0);
	ctx.lineTo(106,0);
	ctx.quadraticCurveTo(101,10,92,5);
	ctx.quadraticCurveTo(87,9,83,12);
	ctx.bezierCurveTo(96,27,73,43,60,21);
	ctx.lineTo(57,22);
	ctx.quadraticCurveTo(55,37,40,40);
	ctx.lineTo(40,44);
	ctx.bezierCurveTo(65,60,20,81,18,59);
	ctx.quadraticCurveTo(9,60,4,59);
	ctx.quadraticCurveTo(5,56,4.5,53.5);
	ctx.quadraticCurveTo(-10,39,-8,27);
	ctx.moveTo(1,60);
	ctx.quadraticCurveTo(7,69,-3.5,73);
	ctx.quadraticCurveTo(-2,66,1,60);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();
	ctx.restore();

}

function lapis_pretos(){
	ctx.translate(440,189);
	ctx.fillStyle="#000000";
	
	//primeiro lapis
	ctx.save();
	ctx.beginPath();
	ctx.lineTo(0,-47);
	ctx.quadraticCurveTo(7,-57,10,-80);
	ctx.quadraticCurveTo(12.5,-81,14,-80);
	ctx.quadraticCurveTo(16,-55,22,-46);
	ctx.lineTo(22,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();

	//resto dos lapis
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(26,0);
	ctx.lineTo(26,-46);
	ctx.quadraticCurveTo(31,-57,35,-81);
	ctx.quadraticCurveTo(37,-83,39,-82);
	ctx.quadraticCurveTo(42,-62,46,-54);
	ctx.quadraticCurveTo(52,-66,54,-77);
	ctx.quadraticCurveTo(55,-78,56,-77);
	ctx.lineTo(59,-64);
	ctx.lineTo(60,-64);
	ctx.quadraticCurveTo(62,-74,65,-82);
	ctx.quadraticCurveTo(66.5,-82.5,68,-82);
	ctx.quadraticCurveTo(69,-69,73,-58);
	ctx.lineTo(76,-69);
	ctx.lineTo(107,-69);
	ctx.lineTo(107,0);
	ctx.lineTo(26,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();

}

function segmento_vermelhobranco(fillcorpo,fillbase){
	
	//corpo
	ctx.save();
	ctx.fillStyle=fillcorpo;
	ctx.beginPath();
	ctx.bezierCurveTo(9.5,-50,14,-110,9,-135);
	ctx.lineTo(20,-171);
	ctx.quadraticCurveTo(-3,-168,-19,-175);
	ctx.lineTo(-30,-170);
	ctx.quadraticCurveTo(-70,-214,-36,-254);
	ctx.quadraticCurveTo(-63,-260,-77,-271);
	ctx.lineTo(-85,-271);
	ctx.lineTo(-85,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();


	//base
	ctx.fillStyle=fillbase;
	ctx.beginPath();
	ctx.lineTo(12,-16);
	ctx.quadraticCurveTo(3,-16,5,-27);
	ctx.quadraticCurveTo(7,-33,7,-38);
	ctx.lineTo(-1,-23);
	ctx.quadraticCurveTo(-4,-17,-12,-16);
	ctx.lineTo(-25,-16);
	ctx.lineTo(-25,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();


}

function camada_terceira(){
	ctx.save();
	nuvens_pretas_topo();
	ctx.restore();

	ctx.save();
	barravermelha_lapisentalhe();
	ctx.restore();

}

function nuvens_pretas_topo(){
	ctx.beginPath();
	ctx.moveTo(0,99);
	ctx.quadraticCurveTo(32,100,49,71);
	ctx.quadraticCurveTo(100,80,99,0);
	ctx.lineTo(0,0);
	ctx.lineTo(0,99);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();

}

function barravermelha_lapisentalhe(){
	ctx.translate(180,305);

	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-24,0);
	ctx.lineTo(-24,-16);
	//primeiro entalhe lapis
	ctx.lineTo(0,-16);
	ctx.quadraticCurveTo(9,-16,13,-25);
	ctx.quadraticCurveTo(43,-78,87,-109);
	ctx.lineTo(93,-127);
	//primeiro entalhe dedo
	ctx.quadraticCurveTo(118,-104,156,-98);
	ctx.lineTo(155,-104);
	ctx.quadraticCurveTo(173,-106,192,-123);
	ctx.quadraticCurveTo(199,-117,208,-112);
	//segundo entalhe lapis
	ctx.quadraticCurveTo(209,-66,201,-22);
	ctx.quadraticCurveTo(205,-16,213,-20);
	ctx.bezierCurveTo(226,-56,258,-107,271,-113);
	ctx.lineTo(276,-128);
	//segundo entalhe dedo
	ctx.quadraticCurveTo(292,-109,317,-98);
	ctx.lineTo(316,-104);
	ctx.quadraticCurveTo(333,-109,343,-123);
	ctx.quadraticCurveTo(355,-113,369,-114);
	//fim do entalhes
	ctx.lineTo(411,-135);
	ctx.lineTo(520,-135);
	ctx.lineTo(520,0);
	ctx.lineTo(-12,0);
	ctx.closePath();
	ctx.fillStyle="#D82D1B";
	ctx.fill();
	ctx.restore();

}

function camada_quarta(){
	ctx.translate(524,305);
	ctx.save();
	anelar();
	ctx.restore();

	ctx.save();
	medio();
	ctx.restore();

	ctx.save();
	lapis_principal();
	ctx.restore();

	ctx.save();
	indicador();
	ctx.restore();

}

function anelar(){
	//dedo
	ctx.beginPath();
	ctx.moveTo(151,-112);
	ctx.quadraticCurveTo(134,-120,128,-127);
	ctx.lineTo(127,-164);
	ctx.lineTo(151,-167);
	ctx.lineTo(151,-112);
	ctx.closePath();
	ctx.fillStyle="#64422D";
	ctx.fill();

	//unha
	ctx.beginPath();
	ctx.moveTo(139,-118);
	ctx.quadraticCurveTo(133,-121,129,-126);
	ctx.lineTo(131,-147);
	ctx.lineTo(143,-147);
	ctx.lineTo(139,-118);
	ctx.closePath();
	ctx.fillStyle="#A05A5B";
	ctx.fill();
}

function medio(){
	//dedo
	ctx.beginPath();
	ctx.moveTo(109,-105);
	ctx.quadraticCurveTo(140,-120,130,-158);
	ctx.lineTo(78,-161);
	ctx.lineTo(70,-134);
	ctx.lineTo(109,-105);
	ctx.closePath();
	var gradiente =ctx.createRadialGradient(129,-126,15,117,-129,35);
	gradiente.addColorStop(0,"#BD9D5F");
	gradiente.addColorStop(1,"#5B4C26");
	ctx.fillStyle=gradiente;
	ctx.fill();

	//unha parte escura
	ctx.beginPath();
	ctx.moveTo(110,-99);
	ctx.quadraticCurveTo(110,-113,97,-138);
	ctx.quadraticCurveTo(87,-142,76,-147);
	ctx.lineTo(72,-130);
	ctx.quadraticCurveTo(86,-114,110,-99);
	ctx.closePath();
	ctx.fillStyle="#CA6154";
	ctx.fill();

	//unha parte clara
	ctx.beginPath();
	ctx.moveTo(110,-99);
	ctx.quadraticCurveTo(110,-113,97,-138);
	ctx.lineTo(95,-139);
	ctx.quadraticCurveTo(101,-117,101,-105);
	ctx.lineTo(110,-99);
	ctx.closePath();
	ctx.fillStyle="#DD8F76";
	ctx.fill();
}

function lapis_principal(){
	//parte da apara grande
	//clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(8,-49);
	ctx.quadraticCurveTo(12,-94,10,-134);
	ctx.lineTo(29,-143);
	ctx.lineTo(36,-124);
	ctx.lineTo(31,-113);
	ctx.lineTo(22,-72);
	ctx.lineTo(11,-51);
	ctx.lineTo(8,-49);
	ctx.closePath();
	ctx.fillStyle="#C6C5B5";
	ctx.fill();
	ctx.restore()
	//escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(22,-44);
	ctx.quadraticCurveTo(41,-80,63,-112);
	ctx.lineTo(58,-139);
	ctx.lineTo(35,-126);
	ctx.lineTo(31,-113);
	ctx.quadraticCurveTo(23,-94,22,-72);
	ctx.lineTo(22,-44);
	ctx.closePath();
	ctx.fillStyle="#96B69E";
	ctx.fill();
	ctx.restore();


	//corpo do lapis
	//parte mais escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(60.5,-108);
	ctx.quadraticCurveTo(65,-115,70,-120);
	ctx.lineTo(79,-157);
	ctx.lineTo(85,-180);
	ctx.lineTo(72,-193);
	ctx.lineTo(66,-166);
	ctx.lineTo(58,-135);
	ctx.quadraticCurveTo(61,-121,60.5,-108);
	ctx.closePath();
	ctx.fillStyle="#1E111A";
	ctx.fill();
	ctx.restore();
	//parte media tonalidade
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(31,-113);
	ctx.quadraticCurveTo(46,-131,58,-135);
	ctx.lineTo(66,-166);
	ctx.lineTo(71,-190);
	ctx.lineTo(44,-199);
	ctx.lineTo(41,-185);
	ctx.lineTo(29,-139);
	ctx.quadraticCurveTo(32,-129,31,-113)
	ctx.closePath();
	ctx.fillStyle="#54213A";
	ctx.fill();
	ctx.restore();
	//parte mais clara
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(29,-139);
	ctx.lineTo(41,-185);
	ctx.lineTo(24,-188);
	ctx.lineTo(20,-169);
	ctx.lineTo(10,-135);
	ctx.quadraticCurveTo(12,-129,13,-120);
	ctx.quadraticCurveTo(21,-133,29,-139);
	ctx.closePath();
	ctx.fillStyle="#67526D";
	ctx.fill();
	ctx.restore();


	//resto do corpo do lapis
	//parte mais escura
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(106,-305);
	ctx.lineTo(101,-284);
	ctx.lineTo(114,-283);
	ctx.lineTo(117,-305);
	ctx.lineTo(106,-305);
	ctx.closePath();
	ctx.fillStyle="#130E17";
	ctx.fill();
	ctx.restore();
	//parte da tonalidade media
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(106,-305);
	ctx.lineTo(101,-284);
	ctx.lineTo(89,-239);
	ctx.lineTo(59,-250);
	ctx.lineTo(75,-305);
	ctx.lineTo(106,-305);
	ctx.closePath();
	ctx.fillStyle="#53283C";
	ctx.fill();
	ctx.restore();
	//parte tapada
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(75,-305);
	ctx.lineTo(59,-250);
	ctx.lineTo(50,-250);
	ctx.lineTo(50,-305);
	ctx.lineTo(75,-305);
	ctx.closePath();
	ctx.fillStyle="#130E17";
	ctx.fill();
	ctx.restore();


	//parte da apara acima da mina
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(22,-45);
	ctx.lineTo(22,-72);
	ctx.lineTo(11,-53);
	ctx.lineTo(22,-45);
	ctx.closePath();
	ctx.fillStyle="#DBB277";
	ctx.fill();
	ctx.restore();

	//parte da mina
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(3,-20);
	ctx.quadraticCurveTo(4,-13,11,-17);
	ctx.quadraticCurveTo(16,-31,22,-43);
	ctx.lineTo(21,-53);
	ctx.quadraticCurveTo(19,-57,15,-56);
	ctx.lineTo(8,-49);
	ctx.quadraticCurveTo(6,-35,3,-20);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();
	ctx.restore();
}

function indicador(){
	//parte do dedo
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-15,-305);
	ctx.quadraticCurveTo(-18,-290,-14,-258);
	ctx.quadraticCurveTo(-13,-254,-11,-252);
	ctx.lineTo(1,-171);
	ctx.quadraticCurveTo(21,-161.5,42,-187);
	ctx.quadraticCurveTo(80,-315,71,-305);
	ctx.lineTo(-15,-305);
	ctx.closePath();
	ctx.fillStyle="#CBB288";
	ctx.fill();
	ctx.restore();
	
	//sombra debaixo da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(12,-191);
	ctx.quadraticCurveTo(7,-174,6,-170);
	ctx.quadraticCurveTo(1,-170,-1,-172);
	ctx.lineTo(11,-192);
	ctx.lineTo(11,-191)
	ctx.closePath();
	ctx.fillStyle="#536123";
	ctx.fill();
	ctx.restore();

	//parte da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-11,-252);
	ctx.quadraticCurveTo(-18,-202,-3,-167);
	ctx.quadraticCurveTo(4,-168,11,-192);
	ctx.quadraticCurveTo(4,-222,-4,-246);
	ctx.quadraticCurveTo(-8,-250,-11,-252);
	ctx.closePath();

	ctx.fillStyle="#E99674";
	ctx.fill();
	ctx.restore();

	//sombra do dedo
	//
	ctx.save();
	ctx.translate(524,305);
	ctx.globalAlpha=0.7;
	var padrao = ctx.createPattern(images[2], 'repeat');
	ctx.fillStyle = padrao;
	ctx.beginPath();
	ctx.moveTo(26,-305);
	ctx.quadraticCurveTo(25,-262,18,-186);
	ctx.quadraticCurveTo(18,-174,15,-169);
	ctx.quadraticCurveTo(27,-169,42,-187);
	ctx.quadraticCurveTo(80,-315,71,-305);
	ctx.lineTo(26,-305);
	ctx.closePath();
	ctx.fill();
	ctx.restore();


	ctx.save();
	ctx.beginPath();
	ctx.moveTo(26,-305);
	ctx.quadraticCurveTo(25,-262,18,-186);
	ctx.quadraticCurveTo(18,-174,15,-169);
	ctx.quadraticCurveTo(27,-169,42,-187);
	ctx.quadraticCurveTo(80,-315,71,-305);
	ctx.lineTo(26,-305);
	ctx.closePath();
	ctx.globalAlpha=0.85;
	var grad = ctx.createRadialGradient(-10,-286,5,23,-277,55);
	grad.addColorStop("0","#B9A16C");
	grad.addColorStop("1","#7C662A")
	ctx.fillStyle=grad;
	ctx.fill();	
	ctx.restore();

	//parte clara da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-11,-252);
	ctx.quadraticCurveTo(-18,-202,-3,-167);
	ctx.quadraticCurveTo(1,-171,3,-176);
	ctx.quadraticCurveTo(-6,-216,-4,-246);
	ctx.quadraticCurveTo(-8,-250,-11,-252);
	ctx.closePath();
	ctx.fillStyle="#F2A490";
	ctx.fill();
	ctx.restore();
	//ponta da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-3,-167);
	ctx.quadraticCurveTo(4,-168,11,-192);
	ctx.lineTo(10,-196);
	ctx.quadraticCurveTo(0,-179,-6.5,-176);
	ctx.lineTo(-3,-167);
	ctx.closePath();
	ctx.fillStyle="#EDC7BD";
	ctx.fill();
	ctx.restore();

}

function camada_quarta_continuacao(){
	ctx.translate(524,305);

	//base do polegar
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(176,-296);
	ctx.lineTo(112,-290);
	ctx.quadraticCurveTo(86,-280,66,-253);
	ctx.lineTo(66,-168);
	ctx.quadraticCurveTo(80,-155,100,-156);
	ctx.quadraticCurveTo(113,-156,146,-162);
	ctx.lineTo(176,-169);
	ctx.lineTo(176,-296);
	ctx.closePath();
	ctx.fillStyle="#C8A983";
	ctx.fill();
	ctx.restore();

	//sombra inferior da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(147,-164);
	ctx.quadraticCurveTo(129,-160,106,-158);
	ctx.quadraticCurveTo(88,-157,75,-164);
	ctx.lineTo(74,-177);
	ctx.lineTo(150,-189);
	ctx.lineTo(147,-164);
	ctx.closePath();
	ctx.fillStyle="#8F7235";
	ctx.fill();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(147,-164);
	ctx.lineTo(124,-160);
	ctx.quadraticCurveTo(108,-163,99,-171);
	ctx.lineTo(150,-189);
	ctx.lineTo(147,-164);
	ctx.closePath();
	ctx.fillStyle="#906733";
	ctx.fill();
	ctx.restore();

	//base da unha 
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(111,-268);
	ctx.quadraticCurveTo(93,-264,58,-250);
	ctx.stroke();
	ctx.bezierCurveTo(22,-220,35,-175,79,-163);
	ctx.quadraticCurveTo(99,-167,122,-176);
	ctx.lineTo(131,-243);
	ctx.lineTo(111,-268);
	ctx.closePath();
	ctx.fillStyle="#D78D7E";
	ctx.fill();
	ctx.restore();

	//tonalidade media da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(123,-248);
	ctx.lineTo(44,-228);
	ctx.quadraticCurveTo(38,-200,56,-181);
	ctx.lineTo(63,-183);
	ctx.lineTo(123,-203);
	ctx.lineTo(123,-248)
	ctx.closePath();
	ctx.fillStyle="#D87356";
	ctx.fill();
	ctx.restore();

	//tonalidade escura da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(123,-203);
	ctx.lineTo(63,-183);
	ctx.lineTo(56,-181);
	ctx.quadraticCurveTo(66,-171,79,-163);
	ctx.quadraticCurveTo(99,-167,122,-176);
	ctx.lineTo(123,-203);
	ctx.closePath();
	ctx.fillStyle="#C35139";
	ctx.fill();
	ctx.restore();

	//ponta da unha
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(58,-250);
	ctx.bezierCurveTo(22,-220,35,-175,79,-163);
	ctx.lineTo(90,-165);
	ctx.bezierCurveTo(45,-175,37,-230,71,-254);
	ctx.lineTo(58,-250);
	ctx.closePath();
	ctx.fillStyle="#E59888";
	ctx.fill();
	ctx.restore();
	
}

function camada_ultima(){
	ctx.translate(524,305);
	ctx.beginPath();
	ctx.moveTo(113,-305);
	ctx.quadraticCurveTo(110,-274,111,-260);
	ctx.quadraticCurveTo(112,-254,117,-251);
	ctx.quadraticCurveTo(113,-218,125,-167);
	ctx.lineTo(129,-171);
	ctx.quadraticCurveTo(136,-166,147,-168);
	ctx.lineTo(138,-132);
	ctx.quadraticCurveTo(141,-83,133,-17);
	ctx.quadraticCurveTo(137,-11,141,-16);
	ctx.quadraticCurveTo(160,-56,176,-73);
	ctx.lineTo(176,-305);
	ctx.lineTo(113,-305);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();

}

function pre_load_images(){
	var img1 = new Image();
	img1.src = "images/textura1.jpg";
	var img2 = new Image();
	img2.src = "images/textura2.jpg";
	var img3 = new Image();
	img3.src = "images/textura3.jpg";
	images= [img1,img2,img3];

}

function draw_Quadro(){
	window.requestAnimationFrame(draw_Quadro);

	//fundo, barra com textura, lapis a descoberto e nuvens(verde)
	ctx.save();
	camada_base();
	ctx.restore();

	//sombra de lapis com a textura
	ctx.save();
	camada_segunda();
	ctx.restore();

	//lapis pretos, nuvens(azuis) e segmentos(branco->vermelho)
	ctx.save();
	camada_segundacontinuacao();
	ctx.restore();

	//barra vermelho de base e nuvens pretas de topo
	ctx.save();
	camada_terceira();
	ctx.restore();

	//dedos anelar medio e indicador, lapis principal
	ctx.save();
	camada_quarta();
	ctx.restore();

	//polegar
	ctx.save();
	camada_quarta_continuacao();
	ctx.restore();

	//shade de mao e lapis preta
	ctx.save();
	camada_ultima();
	ctx.restore();

	
}

function main(){


	pre_load_images();

	draw_Quadro();

}

