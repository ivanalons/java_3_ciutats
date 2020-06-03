import java.util.Arrays;

public class Fase2 {

	public static void executar(String[] arrayCiutats) {
		
		System.out.println("------");
		System.out.println("FASE 2");
		System.out.println("------");
		
		// S'ordena l'array "arrayCiutats" per ordre alfab�tic
		
		Arrays.sort(arrayCiutats);
		
		// Es mostra per pantalla els noms de totes les ciutats que hi ha l'array "arrayCiutats" per ordre alfab�tic
		
		System.out.println("Noms de ciutats ordenats per ordre alfab�tic: ");
		for(String c: arrayCiutats) {
			System.out.print(c + ", ");
		}
		
		System.out.println();

	}

}
