//------
//FASE 2
//------

function fase2(){
	
	var resultat = "Nom de ciutats ordenats per ordre alfab&egrave;tic:";
	resultat += "<BR>";
	
	// S'ordena l'array "arrayCiutats" per ordre alfabètic	
	
	arrayCiutats.sort();
	
	// Es mostra per pantalla (variable de tipus string: resultat):
	// els noms de totes les ciutats que hi ha l'array "arrayCiutats" per ordre alfabètic
	
	for(var i=0;i<arrayCiutats.length;i++){
		resultat += arrayCiutats[i] + ", ";
	}
	
	document.getElementById("fase2").innerHTML = resultat;
}