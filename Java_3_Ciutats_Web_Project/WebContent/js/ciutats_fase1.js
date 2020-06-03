//------
//FASE 1
//------

// Afegir la gestió d'un event de click en el botó per executar el codi de totes les fases
// des de la funció "presionBoton" quan l'usuari ho demani

 addEventListener('load',inicializarEventos, false);
 
 function inicializarEventos(){
	 var ob = document.getElementById("boton1");
	 ob.addEventListener('click',presionBoton,false);
 }
 
 var arrayCiutats = [];
 
 // Es guarda en l'array global "arrayCiutats" els noms de les ciutats introduïdes als camps de text amb name="ciutat"
 // S'executen totes les fases corresponents a cada funció JavaScript "faseX"
 function presionBoton(){
	 var inputCiutats = document.getElementsByName("ciutat");
	 
	 arrayCiutats = [];
	 
	 for (var i=0; i < inputCiutats.length; i++ ){
		 arrayCiutats.push(inputCiutats[i].value);
	 }
	 
	 fase1();
	 fase2();
	 fase3();
	 fase4();
 }

 function fase1(){
	 
	 // Es mostra per pantalla (variable de tipus string: resultat): els noms que conté l'array "arrayCiutats"
	 
	 var resultat ="Els noms de ciutats que has introduit s&oacute;n: ";
	 resultat += "<BR>";
	 
	 for (var i=0; i<arrayCiutats.length; i++){
		 resultat += arrayCiutats[i] + ", ";
	 }
	 
	 document.getElementById("fase1").innerHTML = resultat;
 }
