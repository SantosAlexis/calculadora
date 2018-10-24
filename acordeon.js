		window.addEventListener('load',cargar, true);

		function cargar(){
			
			if (localStorage.getItem('acordeon')) {
				notas = document.getElementById('acordeon');
				notas.innerHTML = localStorage.getItem('acordeon');
			}
			boton = document.getElementById('sav');
			boton.addEventListener('click',agregar,true);
			/*bo = document.getElementById('regresar');
			bo.addEventListener('click',volver,true);*/
		}

		function agregar(){
			//texto = document.getElementById('acordeon');
			notas = document.getElementById('acordeon');
			notas.innerHTML = notas.value;
			//BOM
			localStorage.setItem('acordeon',notas.innerHTML);
			//notas.value = "";
			//navigator.vibrate('100');

		}
		function volver(){
			window.location.assign('index.html');
		}
