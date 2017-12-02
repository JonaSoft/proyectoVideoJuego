
var segundos=59
var minutos=1
function inicio(){
	tiempo=setInterval(cronometro,1000);
}
function cronometro(){
	$j('#timer').text('0'+minutos+':'+segundos)
	if (segundos<10) {
//***************SEGUNDOS MENORES QUE 10 ACOMPAÑADOS DEL 0 POR DELANTE**********
		$j('#timer').text('0'+minutos+':0'+segundos)
	}
	if ((segundos== -1)&&(minutos==0)) {
		clearInterval(buscaImagenesIguales);
		clearInterval(tiempo);
		clearInterval(cronometro);
		segundos=0;
		minutos=0;
		resumen()
	}else if ((segundos==0)&&(minutos==1)) {
				minutos=0;
				segundos=59
	}
	segundos=segundos-1
}
//**********EFECTOS CUANDO EL TIEMPO CONCLUYE**********
function resumen(){
	$j('.panel-tablero').animate({
		width:0,
		height:0,
		opacity:0,
	},1200,function(){
		$j('.time').animate({
			width:0
		},10)
		$j('#timer').text('00:00')
	});
	$j('.panel-score').css('width','100%');
	$j('.panel-score').css('margin-left','90%');
	$j('.panel-score').animate({
		marginLeft: 0
	},1800,function(){
		$j('.score').before("<h1 class='titulo-over'>Juego Terminado<h1>")
	})
	$j('.time').hide();
	$j('.panel-tablero').hide()
}
