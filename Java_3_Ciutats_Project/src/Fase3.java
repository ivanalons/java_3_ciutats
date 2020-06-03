import java.util.Arrays;

public class Fase3 {

	public static void executar(String[] arrayCiutats) {
		
		System.out.println("------");
		System.out.println("FASE 3");
		System.out.println("------");
		
		// Es crea l'array "arrayCiutatsModificades" amb la mateixa mida que l'array "arrayCiutats" 
		
		String[] arrayCiutatsModificades = new String[arrayCiutats.length];
		
		// S'instancia l'array "arrayCiutatsModificades" amb els noms de les ciutats de l'array "arrayCiutats"
		// canviant les lletres de cada ciutat de les vocals "a" o "A" per "4"
		
		for(int i=0;i<arrayCiutats.length;i++) {
			
			String nomCiutat = arrayCiutats[i];
			
			nomCiutat = nomCiutat.replace("a", "4");
			nomCiutat = nomCiutat.replace("A", "4");
			
			arrayCiutatsModificades [i] = nomCiutat;

		}
		
		// S'ordena l'array "arrayCiutatsModificades" per ordre alfabètic
		
		Arrays.sort(arrayCiutatsModificades);
		
		// Es mostra l'array per consola
		
		System.out.println(Arrays.toString(arrayCiutatsModificades));
		
	}

}
