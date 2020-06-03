//------
//FASE 4
//------

function fase4(){
	
	var resultat = "";
	
	// es crea un array de 2D "arrayCaracters" amb mida "arrayCiutats.length" (nombre de ciutats == 6) a la primera dimensió
	
	var arrayCaracters = Array(arrayCiutats.length);
	
	// S'instancia l'array 2D "caractersArray" amb un array de caràcters del nom de cada ciutat a la segona dimensió

	for (var i=0;i<arrayCiutats.length;i++){
		let nomCiutat = arrayCiutats[i];
		let lenCiutat = nomCiutat.length;
		
		arrayCaracters[i] = Array(lenCiutat); // es crea un nou array a la segona dimensió amb la mida de "nomCiutat"
		
		for (var j=0;j<nomCiutat.length;j++){
			arrayCaracters[i][j] = nomCiutat.charAt(j); //s'instancia cada posició de l'array amb el caràcter 'j' de 'nomCiutat'
		}
	}
	
	// Es fa un recorregut de l'array 2D "arrayCaracters" i es mostra per consola els nom de cada ciutat per
	// ordre invertit	
	
	for (var i=0;i<arrayCaracters.length;i++){
		let nom = arrayCaracters[i];
		let nomInvertit = "";
		for (var j=nom.length-1;j>=0;j--){
			nomInvertit += arrayCaracters[i][j]; 
		}
		resultat += nomInvertit;
		resultat += "<BR>";
	}
	
	document.getElementById("fase4").innerHTML = resultat;

}