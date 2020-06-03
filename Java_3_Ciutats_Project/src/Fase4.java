
public class Fase4 {

	public static void executar(String[] ciutats) {

		System.out.println("------");
		System.out.println("FASE 4");
		System.out.println("------");
		
		// es crea un array de 2D "caractersArray" amb mida "ciutats.length" (nombre de ciutats == 6) a la primera dimensió
		
		char[][] caractersArray = new char[ciutats.length][];
		
		// S'instancia l'array 2D "caractersArray" amb un array de caràcters del nom de cada ciutat a la segona dimensió
		
		for(int i=0; i<ciutats.length; i++) {
			
			String nomCiutat = ciutats[i];
			int lenCiutat = nomCiutat.length();
			
			caractersArray[i] = new char[lenCiutat];
			
			for(int j=0; j<lenCiutat; j++) {
				caractersArray[i][j] = nomCiutat.charAt(j);
			}
	
		}
		
		// Es fa un recorregut de l'array 2D "caractersArray" i es mostra per consola els nom de cada ciutat per
		// ordre invertit
		
		for ( char[] element : caractersArray) {
			
			String nomInvertit = "";
			
			for( int i=element.length-1; i>=0; i--) {
				
				nomInvertit += element[i];
				
			}
			
			System.out.println(nomInvertit);
		}
		
	}

}
