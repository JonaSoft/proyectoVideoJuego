var $j=jQuery.noConflict();
document.observe("dom:loaded", function(){
matriz=[]
elemento=""
imagen=""
columnasTablero=$j('.panel-tablero').children();
valorActual=0
animaTitulo()
	$j('.btn-reinicio').click(function(){
		$j(this).text('Reiniciar');
		$j('#score-text').text('0');
		generaFilas();
		animaColumna();
		desapareceAnimacion();
		reapareceImagen();
				//tiempo()
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
			var segundoColor= '#00FF00';
			titulo.animate({
			color: segundoColor
		}, 500, function(){animaTitulo(titulo)}
		);
	}
	
	function generaFilas(){// GENERA FILAS POR COLUMNAS EN EL TABLERO
		//columnasTablero=$j('.panel-tablero').children();
		for ( i = 1; i < 8; i++) {
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
			$j('.col-'+i+' img').addClass('elemento').css('position','relative')

		}
		buscaImagenesIguales()
		function buscaImagenesIguales(){
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
				//animaColumna();
		}}
	}
	
	function animaColumna(){
		$j.each(matriz,function(index,value){
			animacionDulce(value)
			function animacionDulce(elemento){		//FUNCIONES PARA ANIMACION DE DULCES
				elemento.animate({
					opacity:0.10
				},90,function(){retornaAnimacion(elemento)})
			}
			function retornaAnimacion(elemento){
				elemento.animate({
					opacity:1
				},90,function(){animacionDulce(elemento)})
			}
		})
		//desapareceAnimacion()
	}
	function desapareceAnimacion(){//ESCOGE ANIMACIONES POR COLUMNA PARA REEMPLAZAR IMAGENES
		animados=$j('img').filter(':animated')
		//noanimados=$j('img').filter(('img:not(:animated)'))
		setTimeout(function() {
			for (var i = 0; i < animados.length+1; i++) {
				$j(animados[i]).hide(600,'linear',function(){
					$j(this).show().remove();
					if (i=7) {
						for (var i = 1; i < columnasTablero.length+1; i++) {
						//alert(1)
						porGenerar=(7- $j('.col-'+i+' img').length)
						//alert(porGenerar);
						imagen=Math.floor((Math.random()*4)+1)+'.png';
						$j('.col-'+i+' img:nth-child('+porGenerar+')').before("<img class='elemento' src=image/"+imagen+"/>");
						$j('.col-'+i+' img:nth-child('+porGenerar+')').addClass('elemento').css('position','relative')
						//imagen=Math.floor((Math.random()*4)+1)+'.png';
						//$j('.col-'+i).append("<img id='7'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");

					}
					puntuacion();
					function puntuacion(){
						var valorActual=$j('#score-text').text()
						valorActual=parseInt(valorActual)+10
						$j('#score-text').text(valorActual)
						
					}
					//buscaImagenesIguales()
					};
				});
				//$j(animados[i]).delay(500).remove()
				//puntuacion()
			}
			//reapareceImagen()
		}, 3000)
		
	}
	function reapareceImagen(){

		for (var i = 1; i < columnasTablero.length+1; i++) {
			//alert(1)
			porGenerar=(7- $j('.col-'+i+' img').length)
			//alert(porGenerar);
			imagen=Math.floor((Math.random()*4)+1)+'.png';
			$j('.col-'+i+' img:nth-child('+porGenerar+')').before("<img class='elemento' src="+imagen+"/>");
			$j('.col-'+i+' img:nth-child('+porGenerar+')').css('width','120px').css('height','98px').css('position','relative')
			//imagen=Math.floor((Math.random()*4)+1)+'.png';
			//$j('.col-'+i).append("<img id='7'class="+imagen.substr(0,1)+" src=image/"+imagen+"/>");

		}
	}
	function tiempo(){
		for (var i = 0; i < 59; i++) {
			$j('#timer').delay(50).text(59-parseInt(i));
		}
	}

})