function concatenar(dato){
			//alert("hola");
		dato = document.getElementById("entrada").value+=dato;
		//dato += document.getElementById("entrada").value;
		//innerHTML += dato;

	}
function borrar(){
	//alert("hola");
	document.getElementById("entrada").value="";
 }
function igual(){
	imp = document.getElementById("entrada").value;
	//alert(imp);
	if(imp=="007"){
   window.location.assign('acordeon.html');
   }   
   res = eval(imp);
   document.getElementById("entrada").value=res;
}

