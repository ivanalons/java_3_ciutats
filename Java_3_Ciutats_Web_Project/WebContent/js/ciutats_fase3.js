//------
//FASE 3
//------

function fase3(){
	
	var resultat = "";
	
	var arrayCiutatsModificades = Array(arrayCiutats.length);
	
	// Es crea un nou array "arrayCiutatsModificades" amb el canvi de lletres "a" per "4" al nom de cada ciutat
	// que conté l'array global "arrayCiutats"
	
	for (var i=0;i<arrayCiutats.length;i++){
		
		let nomCiutat = arrayCiutats[i];
		
		//modificar totes les aparicions de la lletra "a" o "A" per "4" a la variable nomCiutat
		nomCiutat = nomCiutat.replace(/a/gi,"4"); 
		
		arrayCiutatsModificades[i] = nomCiutat;
		
	}
	
	// S'ordena l'array "arrayCiutatsModificades" per ordre alfabètic
	
	arrayCiutatsModificades.sort();
	
	// Es mostra per pantalla l'array "arrayCiutatsModificades" (contingut de la variable resultat) 
	
	resultat += arrayCiutatsModificades.toString();
	
	document.getElementById("fase3").innerHTML = resultat;
}
