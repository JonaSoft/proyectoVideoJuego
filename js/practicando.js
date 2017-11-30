var $j=jQuery.noConflict();
document.observe("dom:loaded", function(){
var matriz=[]
var elemento=""
var imagen=""
var columnasTablero=$j('.panel-tablero').children();
var valorActual=0
var movimientos=0
animaTitulo();
generaFilas();
	$j('.btn-reinicio').click(function(){
		if ($j('.btn-reinicio').text()==='Reiniciar') {
			location.reload();
			mueveDulce()
			//$j(document).load('../index.html');
		}else(
			($j('.btn-reinicio').text('Reiniciar')));
			($j('#score-text').text('0'));
			inicio();
			buscaImagenesIguales();
			//mueveDulce()
			//contarMovimientos()
	})
	function animaTitulo(){//DECLARANDO VARIABLES TITULO Y COLORES
	  var titulo = $j('.main-titulo');
	  var primerColor = '#FFFF00';
		titulo.animate({
			color: primerColor
		},500, function() {desactivaTitulo(titulo)}
		)
	}
	function desactivaTitulo(titulo){
		var segundoColor= '#F2F2F2';
		titulo.animate({
			color: segundoColor
		}, 500, function(){animaTitulo(titulo)});
	}
	function generaFilas(){// GENERA FILAS DE DULCES POR CADA COLUMNAS EN EL TABLERO
		for ( i = 1; i < 8; i++) {
			mueveDulce();
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).html("<img id='1' class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).append("<img id='2'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).append("<img id='3'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).append("<img id='4'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).append("<img id='5'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).append("<img id='6'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i).append("<img id='7'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");
			$j('.col-'+i+' img').addClass('elemento');
			//$j('.col-'+i).sortable(buscaImagenesIguales())
		}

	}
	//CODEX JQUERY Y PROTOTYPE PARA BUSCAR DULCES IGUALES
	function buscaImagenesIguales(){
		matriz=[]
			for (var i = 0; i < columnasTablero.length+1; i++) {
				var img1=$j('.col-'+i+' img:nth-child(1)').attr('src')
				var img2=$j('.col-'+i+' img:nth-child(2)').attr('src')
				var img3=$j('.col-'+i+' img:nth-child(3)').attr('src')
				var img4=$j('.col-'+i+' img:nth-child(4)').attr('src')
				var img5=$j('.col-'+i+' img:nth-child(5)').attr('src')
				var img6=$j('.col-'+i+' img:nth-child(6)').attr('src')
				var img7=$j('.col-'+i+' img:nth-child(7)').attr('src')
				if ((img1===img2)&&(img2===img3)) {
					matriz.push(($j('.col-'+i+' img:nth-child(1)')));
					matriz.push(($j('.col-'+i+' img:nth-child(2)')));
					matriz.push(($j('.col-'+i+' img:nth-child(3)')))
					if (img3===img4) {
						matriz.push(($j('.col-'+i+' img:nth-child(4)')))
						if (img4===img5) {
							matriz.push(($j('.col-'+i+' img:nth-child(5)')))
							if (img5===img6) {
								matriz.push(($j('.col-'+i+' img:nth-child(6)')))
								if (img6===img7) {
									matriz.push(($j('.col-'+i+' img:nth-child(7)')))
								}
							}
						}
					}
				}else if ((img2===img3)&&(img3===img4)) {
						matriz.push(($j('.col-'+i+' img:nth-child(2)')));
						matriz.push(($j('.col-'+i+' img:nth-child(3)')));
						matriz.push(($j('.col-'+i+' img:nth-child(4)')))
						if (img4===img5) {
							matriz.push(($j('.col-'+i+' img:nth-child(5)')))
							if (img5===img6) {
								matriz.push(($j('.col-'+i+' img:nth-child(6)')))
								if (img6===img7) {
									matriz.push(($j('.col-'+i+' img:nth-child(7)')))
								}
							}
						}
					}else if ((img3===img4)&&(img4===img5)) {
							matriz.push(($j('.col-'+i+' img:nth-child(3)')));
							matriz.push(($j('.col-'+i+' img:nth-child(4)')));
							matriz.push(($j('.col-'+i+' img:nth-child(5)')));
							if (img5===img6) {
								matriz.push(($j('.col-'+i+' img:nth-child(6)')))
								if (img6===img7) {
									matriz.push(($j('.col-'+i+' img:nth-child(7)')))
								}
							}
					}else if ((img4===img5)&&(img5===img6)) {
								matriz.push(($j('.col-'+i+' img:nth-child(4)')));
								matriz.push(($j('.col-'+i+' img:nth-child(5)')));
								matriz.push(($j('.col-'+i+' img:nth-child(6)')))
								if (img6===img7) {
									matriz.push(($j('.col-'+i+' img:nth-child(7)')))
								}
					}else if ((img5===img6)&&(img6===img7)) {
								matriz.push(($j('.col-'+i+' img:nth-child(5)')));
								matriz.push(($j('.col-'+i+' img:nth-child(6)')));
								matriz.push(($j('.col-'+i+' img:nth-child(7)')));
					};
			}
		for ( var i = 0; i < 7; i++) {
			 fila1=$$('.col-1 img')[i]
			 fila2=$$('.col-2 img')[i]
			 fila3=$$('.col-3 img')[i]
			 fila4=$$('.col-4 img')[i]
			 fila5=$$('.col-5 img')[i]
			 fila6=$$('.col-6 img')[i]
			 fila7=$$('.col-7 img')[i]
			if (((fila1).readAttribute('src') == (fila2).readAttribute('src'))&&
				((fila2).readAttribute('src') == (fila3).readAttribute('src'))){
				matriz.push($j(fila1));
				matriz.push($j(fila2));
				matriz.push($j(fila3));
				if ((fila3).readAttribute('src') == (fila4).readAttribute('src')){
					matriz.push($j(fila4))
					if ((fila4).readAttribute('src') == (fila5).readAttribute('src')){
						matriz.push($j(fila5))
						if ((fila5).readAttribute('src') == (fila6).readAttribute('src')){
							matriz.push($j(fila6))
							if ((fila6).readAttribute('src') == (fila7).readAttribute('src')){
								matriz.push($j(fila7));
							}
						}
					}
				}
			}else if (((fila2).readAttribute('src') == (fila3).readAttribute('src'))&&
						((fila3).readAttribute('src') == (fila4).readAttribute('src'))) {
						matriz.push($j(fila2));
						matriz.push($j(fila3));
						matriz.push($j(fila4));
						if ((fila4).readAttribute('src') == (fila5).readAttribute('src')){
							matriz.push($j(fila5))
							if ((fila5).readAttribute('src') == (fila6).readAttribute('src')){
								matriz.push($j(fila6))
								if ((fila6).readAttribute('src') == (fila7).readAttribute('src')){
									matriz.push($j(fila7));
								}
							}
						}
			}else if (((fila3).readAttribute('src') == (fila4).readAttribute('src'))&&
						((fila4).readAttribute('src') == (fila5).readAttribute('src'))) {
						matriz.push($j(fila3));
						matriz.push($j(fila4));
						matriz.push($j(fila5));
						if ((fila5).readAttribute('src') == (fila6).readAttribute('src')){
							matriz.push($j(fila6))
							if ((fila6).readAttribute('src') == (fila7).readAttribute('src')){
								matriz.push($j(fila7))
							}
						}
			}else if (((fila4).readAttribute('src') == (fila5).readAttribute('src'))&&
						((fila5).readAttribute('src') == (fila6).readAttribute('src'))) {
						matriz.push($j(fila4));
						matriz.push($j(fila5));
						matriz.push($j(fila6));
						if ((fila6).readAttribute('src') == (fila7).readAttribute('src')){
							matriz.push($j(fila7))
						}
			}else if (((fila5).readAttribute('src') == (fila6).readAttribute('src'))&&
						((fila6).readAttribute('src') == (fila7).readAttribute('src'))) {
						matriz.push($j(fila5));
						matriz.push($j(fila6));
						matriz.push($j(fila7));
			}
		}
		$j.each(matriz,function(index,value){///FUNCION PARA ANIMACION DE DULCES
			animacionDulce(value)
			function animacionDulce(elemento){
				elemento.animate({
				opacity:0.10
				},50,function(){retornaAnimacion(elemento)})
			}
			function retornaAnimacion(elemento){
				elemento.animate({
				opacity:1
				},50,function(){animacionDulce(elemento)})
			}
		})
	mueveDulce();
	reemplazaAnimaciones();
	tiempoFinalizado()
	}
	function reemplazaAnimaciones(){//ESCOGE ANIMACIONES POR COLUMNA PARA REEMPLAZAR IMAGENES
		animados=$j('img').filter(':animated')
		setTimeout(function() {
			for (var i = 0; i < animados.length+1; i++) {
				$j(animados[i]).hide(500,function(){
					$j(this).show().remove();
					if (i=7) {
						for (var i = 1; i < columnasTablero.length+1; i++) {
							espacioLibre=(7- $j('.col-'+i+' img').length)//RELLENA ESPACIOS  DE MATRIZ CON NUEVOS DULCES
							imagen=Math.floor((Math.random()*4)+1)+'.png';
							$j('.col-'+i+' img:nth-child('+espacioLibre+')').before("<img class='elemento' src=image/"+imagen+"/>");
							$j('.col-'+i+' img:nth-child('+espacioLibre+')').addClass('elemento').css('position','relative')
							//smmover()
						}
						$j.each(matriz,function(index,value){
							var valorActual=$j('#score-text').text()//ASIGNA PUNTOS
							valorActual=parseInt(valorActual)+10
							$j('#score-text').text(valorActual)

						})
						setInterval(buscaImagenesIguales,900);
					}
				})
			}
		},1000)
	}
	function mueveDulce(){
		$j('.elemento').draggable();
		$j('.panel-tablero').droppable();
		for (var i = 1; i < 8; i++) {
			$j('.col-'+i).sortable()
		}
	}
	function tiempoFinalizado(){
	var tiempoFinal= $j('.data-info').text()
	tiempoFinal=(tiempoFinal.substr(4, tiempoFinal.length-5));
		if (tiempoFinal==="00:0") {
			clearInterval(buscaImagenesIguales);
			animados=""
		}
	}
})
function mover(){
	for (var i = 1; i < 8; i++) {
		$j('.col-'+i).sortable()
	}
}
function contarMovimientos(){
	$j('.panel-tablero').mousemove(function(event){
		movimientos++;
		$j('#movimientos-text').html(movimientos)
	})
}
