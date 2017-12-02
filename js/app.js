var $j=jQuery.noConflict();
document.observe("dom:loaded", function(){
	var valorActual=0
	valor=0
	contador=0
	columnasTablero=$j('.panel-tablero').children()
	matriz=[]
	matriz.length=0
		//**********FUNCION DE BOTON DE INICIO**********
		$j('.btn-reinicio').click(function(){
			if ($j('.btn-reinicio').text()==='Reiniciar') {
					location.reload();
			}else{
				($j('.btn-reinicio').text('Reiniciar'));
				($j('#score-text').text('0'));
				inicio();//ACTIVA CRONOMETRO DEL TIMER
				iniciando=setInterval(buscaImagenesIguales,2000); //BUSCA IMAGENES IGUALES CADA 1.3 SEGUNDOS
				cuenta()//CONTADOR DE MOVIMIENTOS
			}
		});
	animaTitulo();
	generaImagenes();
})
//**********FUNCION DE ANIMACION DEL TITULO***************
	function animaTitulo(){
	  var titulo = $j('.main-titulo');
	  var primerColor = '#F2F2F2';
		titulo.animate({
			color: primerColor
		},500, function() {desactivaTitulo(titulo)})
	}
	function desactivaTitulo(titulo){
		var segundoColor= '#FFFF00';
		titulo.animate({
			color: segundoColor
		}, 500, function(){animaTitulo(titulo)});
	}
	//GENERA FILAS DE DULCES POR CADA COLUMNAS EN EL TABLERO
	function generaImagenes(){
			for ( i = 1; i < 8; i++) {
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).html("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).append("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).append("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).append("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).append("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).append("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				imagen=Math.floor((Math.random()*4)+1)+'.png';
				$j('.col-'+i).append("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
				$j('.col-'+i+' img').addClass('elemento');
			}
		}
	//***************CODEX PARA BUSCAR IMAGENES IGUALES POR CADA COLUMNA
		function buscaImagenesIguales(){
				matriz.length=0
					for (var i = 1; i < columnasTablero.length+1; i++) {
						var img1=$j('.col-'+i+' img:nth-child(1)').attr('src')
						var img2=$j('.col-'+i+' img:nth-child(2)').attr('src')
						var img3=$j('.col-'+i+' img:nth-child(3)').attr('src')
						var img4=$j('.col-'+i+' img:nth-child(4)').attr('src')
						var img5=$j('.col-'+i+' img:nth-child(5)').attr('src')
						var img6=$j('.col-'+i+' img:nth-child(6)').attr('src')
						var img7=$j('.col-'+i+' img:nth-child(7)').attr('src')
						if ((img1===img2)&&(img2===img3)) {//busca desde el la 1era imagen
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
								}else if ((img5===img6)&&(img6===img7)) {
									matriz.push(($j('.col-'+i+' img:nth-child(5)')));
									matriz.push(($j('.col-'+i+' img:nth-child(6)')));
									matriz.push(($j('.col-'+i+' img:nth-child(7)')));
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
									matriz.push(($j('.col-'+i+' img:nth-child(7)')))
							}
						}else if ((img2===img3)&&(img3===img4)) {//busca desde la 2da imagen
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
								}else if ((img5===img6)&&(img6===img7)) {
										matriz.push(($j('.col-'+i+' img:nth-child(5)')));
										matriz.push(($j('.col-'+i+' img:nth-child(6)')));
										matriz.push(($j('.col-'+i+' img:nth-child(7)')))
								}
							}else if ((img3===img4)&&(img4===img5)) {//busca desde la 3ra imagen
									matriz.push(($j('.col-'+i+' img:nth-child(3)')));
									matriz.push(($j('.col-'+i+' img:nth-child(4)')));
									matriz.push(($j('.col-'+i+' img:nth-child(5)')));
									if (img5===img6) {
										matriz.push(($j('.col-'+i+' img:nth-child(6)')))
										if (img6===img7) {
											matriz.push(($j('.col-'+i+' img:nth-child(7)')))
										}
									}
							}else if ((img4===img5)&&(img5===img6)) {//busca desde la 4ta imagen
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
	//************CODEX PROTOTYPE**************
	//*****************************************
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
									matriz.push($j(fila7))
								}
							}
						} else if (((fila5).readAttribute('src') == (fila6).readAttribute('src'))&&
						((fila6).readAttribute('src') == (fila7).readAttribute('src'))){
							matriz.push($j(fila5));
							matriz.push($j(fila6));
							matriz.push($j(fila7))
						}
					}else if (((fila4).readAttribute('src') == (fila5).readAttribute('src'))&&
						((fila5).readAttribute('src') == (fila6).readAttribute('src'))){
							matriz.push($j(fila4));
							matriz.push($j(fila5));
							matriz.push($j(fila6))
							if ((fila6).readAttribute('src') == (fila7).readAttribute('src')){
									matriz.push($j(fila7));
								}
							}
				}else if (((fila2).readAttribute('src') == (fila3).readAttribute('src'))&&
							((fila3).readAttribute('src') == (fila4).readAttribute('src'))) {
							matriz.push($j(fila2));
							matriz.push($j(fila3));
							matriz.push($j(fila4))
							if ((fila4).readAttribute('src') == (fila5).readAttribute('src')){
								matriz.push($j(fila5))
								if ((fila5).readAttribute('src') == (fila6).readAttribute('src')){
									matriz.push($j(fila6))
									if ((fila6).readAttribute('src') == (fila7).readAttribute('src')){
										matriz.push($j(fila7));
									}
								}
							}else if (((fila5).readAttribute('src') == (fila6).readAttribute('src'))&&
									((fila6).readAttribute('src') == (fila7).readAttribute('src'))){
										matriz.push($j(fila5));
										matriz.push($j(fila6));
										matriz.push($j(fila7))
								}
				}else if (((fila3).readAttribute('src') == (fila4).readAttribute('src'))&&
							((fila4).readAttribute('src') == (fila5).readAttribute('src'))) {
							matriz.push($j(fila3));
							matriz.push($j(fila4));
							matriz.push($j(fila5))
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
		animaIguales();
		}
	///******************FUNCION PARA ANIMACION DE DULCES*********************
		
		function animaIguales(){
			$j.each(matriz,function(index,value){
				animacionDulce(value)
				function animacionDulce(elemento){
					elemento.animate({
					opacity:0.25
					},100,function(){retornaAnimacion(elemento)})
				}
				function retornaAnimacion(elemento){
					elemento.animate({
					opacity:1
					},100,function(){animacionDulce(elemento)})
				}

			})
			puntaje();
		}
	//*************ASIGNACION DE PUNTOS**************
		function puntaje(){
			setTimeout(function(){
				$j.each(matriz,function(index,value){
					var valorActual=$j('#score-text').html()//ASIGNA PUNTOS
					valorActual=parseInt(valorActual)+10;
					$j('#score-text').html(valorActual)
				})
			},2500)
			reemplazaAnimaciones();
		}

	//*************//ESCOGE ANIMACIONES POR COLUMNA PARA REEMPLAZAR IMAGENES*****************
		function reemplazaAnimaciones(){
			setTimeout(function() {
				for (var i = 0; i < matriz.length+1; i++) {
					$j(matriz[i]).hide(900,function(){
						$j(this).show().detach();
						for (var i = 1; i < columnasTablero.length+1; i++) {
							espacioLibre=(7- $j('.col-'+i+' img').length)//RELLENA ESPACIOS  DE MATRIZ CON NUEVOS DULCES
							imagen=Math.floor((Math.random()*4)+1)+'.png';
							$j('.col-'+i+' img:nth-child('+espacioLibre+')').before("<img class="+imagen.substr(0,1)+" src=image/"+imagen+">");
							$j('.col-'+i+' img:nth-child('+espacioLibre+')').addClass('elemento');
						}
					})
				}
		
			},2500)
			setTimeout(function() {
				desplazaDulce();
			}, 300);
		}
	//*****************ACTIVA MOVIMIENTO DE DULCES ***************
		function desplazaDulce(){
			$j('.panel-tablero').droppable();
			for (var i = 1; i < 8; i++) {
				$j('.col-'+i).sortable({})
			}
		}
	//*****************CUENTA MOVIMIENTO POR DULCE*****************
		function cuenta(){
			$j('.panel-tablero div').mouseup(function(){
				clearInterval(iniciando);
				contador=contador+1
				$j('#movimientos-text').html(parseInt(contador));
				iniciando=setInterval(buscaImagenesIguales,2000);		
			});	
		}
